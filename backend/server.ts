import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { runQuery } from "./db/sql";

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT;

app.post("/api/sql", async (req: Request, res: Response) => {
  const { query } = req.body;

  const response = await runQuery(query)

  console.log(response)

  res.send(response);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
