import { DataSource } from "typeorm";
import { SqlDatabase } from "langchain/sql_db";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { PromptTemplate } from "langchain/prompts";
import { RunnableSequence } from "langchain/schema/runnable";
import { StringOutputParser } from "langchain/schema/output_parser";

const runQuery = async (question: string) => {
  const datasource = new DataSource({
    type: "sqlite",
    database: "test.db",
  });

  const db = await SqlDatabase.fromDataSourceParams({
    appDataSource: datasource,
  });

  const llm = new ChatOpenAI();

  const prompt =
    PromptTemplate.fromTemplate(`Based on the provided SQL table schema below, write a SQL query that would answer the user's question.
    Always start the query with select * from. Always join Cases table with Children table.
  ------------
  SCHEMA: {schema}
  ------------
  QUESTION IN POLISH LANGUAGE: {question}
  ------------
  SQL QUERY:`);

  const sqlQueryChain = RunnableSequence.from([
    {
      schema: async () => db.getTableInfo(),
      question: (input: { question: string }) => input.question,
    },
    prompt,
    llm.bind({ stop: ["\nSQLResult:"] }),
    new StringOutputParser(),
  ]);

  const finalResponsePrompt =
    PromptTemplate.fromTemplate(`Based on the table schema below, question, SQL query, and SQL response, write a natural language response:
  ------------
  SCHEMA: {schema}
  ------------
  QUESTION IN POLISH LANGUAGE: {question}
  ------------
  SQL QUERY: {query}
  ------------
  SQL RESPONSE: {response}
  ------------
  NATURAL LANGUAGE RESPONSE:`);

  const finalChain = RunnableSequence.from([
    {
      question: (input) => input.question,
      query: sqlQueryChain,
    },
    {
      schema: async () => db.getTableInfo(),
      question: (input) => input.question,
      query: (input) => input.query,
      response: (input) => db.run(input.query),
    },
    {
      sql: (previousStepResult) => previousStepResult.query,
      sqlResult: (previousStepResult) => previousStepResult.response
    },
  ]);

  const finalResponse = await finalChain.invoke({
    question,
  });

  return finalResponse;
};

export { runQuery }
