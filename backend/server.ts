import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT;

app.post("/api/sql", (req: Request, res: Response) => {
  const { query } = req.body;
  console.log(query);

  const response = {
    sqlResult: [
      {
        reference_number: "III RC 204/21",
        court: "Sad Rejonowy w Gizycku",
        judgment_date: "2021-12-30",
        publication_date: "2022-02-08",
        mother_income: 909,
        father_income: 4350,
        siblings: 2,
        children: [
          {
            child_age: 4,
            alimony_asked: 600,
            alimony_granted: 500,
            general_expenses_plaintiff: null,
            general_expenses_court: 1000,
            additional_costs: 200,
          },
          {
            child_age: 2.5,
            alimony_asked: 600,
            alimony_granted: 400,
            general_expenses_plaintiff: null,
            general_expenses_court: 750,
            additional_costs: 750,
          },
        ],
      },
      {
        reference_number: "III RC 191/15",
        court: "Sad Rejonowy w Zabkowicach Slaskich",
        judgment_date: "2016-02-09",
        publication_date: "2016-03-15",
        mother_income: 1380,
        father_income: 1380,
        siblings: 2,
        children: [
          {
            child_age: 4,
            alimony_asked: 700,
            alimony_granted: 300,
            general_expenses_plaintiff: null,
            general_expenses_court: 650,
            additional_costs: null,
          },
          {
            child_age: 2,
            alimony_asked: 700,
            alimony_granted: 300,
            general_expenses_plaintiff: null,
            general_expenses_court: 550,
            additional_costs: 550,
          },
        ],
      },
    ],
  };

  res.send(response);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
