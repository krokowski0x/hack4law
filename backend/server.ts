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

  // const response = await runQuery(query)

  // console.log(response)

  res.send({sql: '', sqlResult: [{
    "reference_number": "III RC 204/21",
    "court": "Sad Rejonowy w Gizycku",
    "judgement_date": "2021-12-30",
    "publication_date": "2022-02-08",
    "mother_income": 909,
    "father_income": 4350,
    "siblings": 2,
    "website": "https://orzeczenia.ms.gov.pl/content/$N/150515100001512_III_RC_000204_2021_Uz_2021-12-30_001",
    "children": [
        {
            "child_age": 4,
            "alimony_asked": 600,
            "alimony_granted": 500,
            "general_expenses_plaintiff": null,
            "general_expenses_court": 1000,
            "additional_costs": 200
        },
        {
            "child_age": 2.5,
            "alimony_asked": 600,
            "alimony_granted": 400,
            "general_expenses_plaintiff": null,
            "general_expenses_court": 750,
            "additional_costs": 180
        }
    ]
}], result: ''});
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
