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
  try {
    // const { query } = req.body;

    // const response = await runQuery(query)

    // console.log(response)

    // res.send(response);
    res.send({sqlResult: `[
      {
          "reference_number": "III RC 204/21",
          "court": "Sad Rejonowy w Gizycku",
          "judgment_date": "2021-12-30",
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
      },
      {
          "reference_number": "III RC 191/15",
          "court": "Sad Rejonowy w Zabkowicach Slaskich",
          "judgment_date": "2016-02-09",
          "publication_date": "2016-03-15",
          "mother_income": 1380,
          "father_income": 1380,
          "siblings": 2,
          "website": "https://orzeczenia.ms.gov.pl/content/$N/155020250001512_III_RC_000191_2015_Uz_2016-03-09_001",
          "children": [
              {
                  "child_age": 4,
                  "alimony_asked": 700,
                  "alimony_granted": 300,
                  "general_expenses_plaintiff": null,
                  "general_expenses_court": 650,
                  "additional_costs": null
              },
              {
                  "child_age": 2,
                  "alimony_asked": 700,
                  "alimony_granted": 300,
                  "general_expenses_plaintiff": null,
                  "general_expenses_court": 550,
                  "additional_costs": null
              }
          ]
      },
      {
          "reference_number": "III RC 163/21",
          "court": "Sad Rejonowy w Chelmnie",
          "judgment_date": "2022-06-02",
          "publication_date": "2022-07-07",
          "mother_income": 3800,
          "father_income": 7200,
          "siblings": 1,
          "website": "https://orzeczenia.ms.gov.pl/content/$N/151025100001512_III_RC_000163_2021_Uz_2022-06-02_002",
          "children": [
              {
                  "child_age": 7,
                  "alimony_asked": 1800,
                  "alimony_granted": 1200,
                  "general_expenses_plaintiff": 3400,
                  "general_expenses_court": 2560,
                  "additional_costs": null
              }
          ]
      },
      {
          "reference_number": "III RC 98/18",
          "court": "Sad Rejonowy w Wagrowcu",
          "judgment_date": "2019-01-22",
          "publication_date": "2019-12-06",
          "mother_income": 1634,
          "father_income": 1900,
          "siblings": 1,
          "website": "https://orzeczenia.ms.gov.pl/content/$N/153510600001512_III_RC_000098_2018_Uz_2019-02-04_002",
          "children": [
              {
                  "child_age": 7,
                  "alimony_asked": 500,
                  "alimony_granted": 700,
                  "general_expenses_plaintiff": 1300,
                  "general_expenses_court": 1300,
                  "additional_costs": null
              }
          ]
      },
      {
          "reference_number": "IV RC 546/20",
          "court": "Sad Rejonowy w Rybniku",
          "judgment_date": "2021-08-27",
          "publication_date": "2023-02-28",
          "mother_income": 3140,
          "father_income": 6033,
          "siblings": 3,
          "website": "https://orzeczenia.ms.gov.pl/content/$N/151515250002012_IV_RC_000546_2020_Uz_2021-08-27_001",
          "children": [
              {
                  "child_age": null,
                  "alimony_asked": 1300,
                  "alimony_granted": 900,
                  "general_expenses_plaintiff": 1650,
                  "general_expenses_court": 1530,
                  "additional_costs": null
              },
              {
                  "child_age": null,
                  "alimony_asked": 1300,
                  "alimony_granted": 900,
                  "general_expenses_plaintiff": 1650,
                  "general_expenses_court": 1530,
                  "additional_costs": null
              },
              {
                  "child_age": 2,
                  "alimony_asked": 1000,
                  "alimony_granted": 800,
                  "general_expenses_plaintiff": 1350,
                  "general_expenses_court": 1200,
                  "additional_costs": null
              }
          ]
      },
      {
          "reference_number": "III RC 239/18",
          "court": "Sad Rejonowy w Kaliszu",
          "judgment_date": "2019-03-01",
          "publication_date": "2019-05-23",
          "father_income": 5341,
          "siblings": 2,
          "website": "https://orzeczenia.ms.gov.pl/content/$N/152505100001512_III_RC_000239_2018_Uz_2019-03-01_001",
          "children": [
              {
                  "child_age": 13,
                  "alimony_asked": 1000,
                  "alimony_granted": 850,
                  "general_expenses_plaintiff": null,
                  "general_expenses_court": 1700,
                  "additional_costs": null
              },
              {
                  "child_age": 10,
                  "alimony_asked": 1000,
                  "alimony_granted": 800,
                  "general_expenses_plaintiff": null,
                  "general_expenses_court": 1600,
                  "additional_costs": null
              }
          ]
      },
      {
          "reference_number": "III RC 66/19",
          "court": "Sad Rejonowy w Kaliszu",
          "judgment_date": "2019-08-16",
          "publication_date": "2019-09-27",
          "mother_income": 3241,
          "father_income": 1450,
          "siblings": 2,
          "website": "https://orzeczenia.ms.gov.pl/content/$N/152505100001512_III_RC_000066_2019_Uz_2019-08-16_001",
          "children": [
              {
                  "child_age": 12,
                  "alimony_asked": 2000,
                  "alimony_granted": 850,
                  "general_expenses_plaintiff": null,
                  "general_expenses_court": 1300,
                  "additional_costs": 1700
              },
              {
                  "child_age": 10,
                  "alimony_asked": 2000,
                  "alimony_granted": 750,
                  "general_expenses_plaintiff": null,
                  "general_expenses_court": 1100,
                  "additional_costs": null
              }
          ]
      },
      {
          "reference_number": "III RC 53/21",
          "court": "Sad Rejonowy w Toruniu",
          "judgment_date": "2022-04-22",
          "publication_date": "2022-12-19",
          "mother_income": null,
          "father_income": null,
          "siblings": 2,
          "website": "https://orzeczenia.ms.gov.pl/content/$N/151025200001512_III_RC_000053_2021_Uz_2022-04-22_001",
          "children": [
              {
                  "child_age": null,
                  "alimony_asked": 2000,
                  "alimony_granted": 900,
                  "general_expenses_plaintiff": 4872,
                  "general_expenses_court": 2250,
                  "additional_costs": null
              },
              {
                  "child_age": null,
                  "alimony_asked": 2000,
                  "alimony_granted": 900,
                  "general_expenses_plaintiff": 4427,
                  "general_expenses_court": 2250,
                  "additional_costs": 950
              }
          ]
      },
      {
          "reference_number": "III RC 27/23",
          "court": "Sad Rejonowy w Lidzbarku Warminskim",
          "judgment_date": "2023-06-01",
          "publication_date": "2023-07-07",
          "mother_income": 2731,
          "father_income": 2670,
          "siblings": 2,
          "website": "https://orzeczenia.ms.gov.pl/content/$N/150515450001512_III_RC_000027_2023_Uz_2023-06-29_001",
          "children": [
              {
                  "child_age": 10,
                  "alimony_asked": 850,
                  "alimony_granted": 600,
                  "general_expenses_plaintiff": 1700,
                  "general_expenses_court": 1100,
                  "additional_costs": null
              },
              {
                  "child_age": 14,
                  "alimony_asked": 1000,
                  "alimony_granted": 800,
                  "general_expenses_plaintiff": 1700,
                  "general_expenses_court": 1400,
                  "additional_costs": 150
              }
          ]
      },
      {
          "reference_number": "III RC 503/21",
          "court": "Sad Rejonowy w Toruniu",
          "judgment_date": "2022-05-10",
          "publication_date": "2022-09-14",
          "mother_income": null,
          "father_income": 3534,
          "siblings": 1,
          "website": "https://orzeczenia.ms.gov.pl/content/$N/151025200001512_III_RC_000503_2021_Uz_2022-05-10_001",
          "children": [
              {
                  "child_age": null,
                  "alimony_asked": 1500,
                  "alimony_granted": 1000,
                  "general_expenses_plaintiff": 2500,
                  "general_expenses_court": null,
                  "additional_costs": null
              }
          ]
      },
      {
          "reference_number": "III RC 111/22",
          "court": "Sad Rejonowy w Lidzbarku Warminskim",
          "judgment_date": "2023-01-10",
          "publication_date": "2023-01-27",
          "mother_income": 3946,
          "father_income": 5600,
          "siblings": 1,
          "website": "https://orzeczenia.ms.gov.pl/content/$N/150515450001512_III_RC_000111_2022_Uz_2023-01-24_001",
          "children": [
              {
                  "child_age": 14,
                  "alimony_asked": 1000,
                  "alimony_granted": 850,
                  "general_expenses_plaintiff": null,
                  "general_expenses_court": 1700,
                  "additional_costs": 2500
              }
          ]
      },
      {
          "reference_number": "XIII Ca 421/14",
          "court": "Sad Okregowy we Wroclawiu",
          "judgment_date": "2015-01-07",
          "publication_date": "2015-02-17",
          "mother_income": 1700,
          "father_income": 2000,
          "siblings": 1,
          "website": "https://orzeczenia.ms.gov.pl/content/$N/155025000006509_XIII_Ca_000421_2014_Uz_2015-01-07_001",
          "children": [
              {
                  "child_age": 11,
                  "alimony_asked": 450,
                  "alimony_granted": 600,
                  "general_expenses_plaintiff": 1000,
                  "general_expenses_court": 1200,
                  "additional_costs": null
              }
          ]
      },
      {
          "reference_number": "III RC 234/18",
          "court": "Sad Rejonowy w Wagrowcu",
          "judgment_date": "2019-06-12",
          "publication_date": "2019-07-11",
          "mother_income": 4500,
          "father_income": 3550,
          "siblings": 2,
          "website": "https://orzeczenia.ms.gov.pl/content/$N/153510600001512_III_RC_000234_2018_Uz_2019-06-24_001",
          "children": [
              {
                  "child_age": 14,
                  "alimony_asked": 1500,
                  "alimony_granted": 800,
                  "general_expenses_plaintiff": 2962,
                  "general_expenses_court": 1330,
                  "additional_costs": null
              },
              {
                  "child_age": 11,
                  "alimony_asked": 1500,
                  "alimony_granted": 760,
                  "general_expenses_plaintiff": 2962,
                  "general_expenses_court": 1260,
                  "additional_costs": null
              }
          ]
      },
      {
          "reference_number": "III RC 101/21",
          "court": "Sad Rejonowy w Grudziadzu",
          "judgment_date": "2021-10-18",
          "publication_date": "2022-01-05",
          "mother_income": 890,
          "father_income": 2199,
          "siblings": 2,
          "website": "https://orzeczenia.ms.gov.pl/content/$N/151025150001512_III_RC_000101_2021_Uz_2021-11-05_001",
          "children": [
              {
                  "child_age": 17,
                  "alimony_asked": 800,
                  "alimony_granted": 500,
                  "general_expenses_plaintiff": null,
                  "general_expenses_court": null,
                  "additional_costs": null
              },
              {
                  "child_age": 12,
                  "alimony_asked": 800,
                  "alimony_granted": 500,
                  "general_expenses_plaintiff": null,
                  "general_expenses_court": null,
                  "additional_costs": null
              }
          ]
      },
      {
          "reference_number": "III RC 767/16",
          "court": "Sad Rejonowy w Olsztynie",
          "judgment_date": "2017-02-27",
          "publication_date": "2017-08-03",
          "mother_income": 0,
          "father_income": 3200,
          "siblings": 2,
          "website": "https://orzeczenia.ms.gov.pl/content/$N/150515250001512_III_RC_000767_2016_Uz_2017-02-27_001",
          "children": [
              {
                  "child_age": 9,
                  "alimony_asked": 700,
                  "alimony_granted": 450,
                  "general_expenses_plaintiff": 1370,
                  "general_expenses_court": null,
                  "additional_costs": null
              },
              {
                  "child_age": 3,
                  "alimony_asked": 650,
                  "alimony_granted": 450,
                  "general_expenses_plaintiff": 1303,
                  "general_expenses_court": null,
                  "additional_costs": null
              }
          ]
      },
      {
          "reference_number": "III RC 53/23",
          "court": "Sad Rejonowy w Szczytnie",
          "judgment_date": "2023-05-09",
          "publication_date": "2023-08-28",
          "mother_income": 4550,
          "father_income": 1272,
          "siblings": 1,
          "website": "https://orzeczenia.ms.gov.pl/content/$N/150515300001512_III_RC_000053_2023_Uz_2023-05-29_002",
          "children": [
              {
                  "child_age": 13,
                  "alimony_asked": 1100,
                  "alimony_granted": 850,
                  "general_expenses_plaintiff": 1800,
                  "general_expenses_court": 1800,
                  "additional_costs": null
              }
          ]
      },
      {
          "reference_number": "V RC 249/19",
          "court": "Sad Rejonowy dla Warszawy-Mokotowa",
          "judgment_date": "2021-07-14",
          "publication_date": "2022-05-10",
          "mother_income": 4700,
          "father_income": 18700,
          "siblings": 1,
          "website": "https://orzeczenia.ms.gov.pl/content/$N/154505200002512_V_RC_000249_2019_Uz_2021-07-14_002",
          "children": [
              {
                  "child_age": 4,
                  "alimony_asked": 4000,
                  "alimony_granted": 2700,
                  "general_expenses_plaintiff": null,
                  "general_expenses_court": 3600,
                  "additional_costs": null
              }
          ]
      },
      {
          "reference_number": "V RC 664/18",
          "court": "Sad Rejonowy dla Warszawy Pragi - Polnoc w Warszawie",
          "judgment_date": "2022-03-29",
          "publication_date": "2022-07-11",
          "mother_income": 3400,
          "father_income": 3200,
          "siblings": 1,
          "website": "https://orzeczenia.ms.gov.pl/content/$N/154510250002512_V_RC_000664_2018_Uz_2022-03-29_003",
          "children": [
              {
                  "child_age": 11,
                  "alimony_asked": 1200,
                  "alimony_granted": 800,
                  "general_expenses_plaintiff": null,
                  "general_expenses_court": 1700,
                  "additional_costs": null
              }
          ]
      },
      {
          "reference_number": "V RC 217/20",
          "court": "Sadu Rejonowego dla Warszawy-Mokotowa w Warszawie",
          "judgment_date": "2021-01-13",
          "publication_date": "2021-11-25",
          "mother_income": 10210,
          "father_income": 12000,
          "siblings": 1,
          "website": "https://orzeczenia.ms.gov.pl/content/$N/154505200002512_V_RC_000217_2020_Uz_2021-02-22_001",
          "children": [
              {
                  "child_age": 10,
                  "alimony_asked": null,
                  "alimony_granted": 2800,
                  "general_expenses_plaintiff": null,
                  "general_expenses_court": 4810,
                  "additional_costs": 140
              }
          ]
      },
      {
          "reference_number": "V RC 927/18",
          "court": "Sad Rejonowy dla Warszawy Pragi - Polnoc w Warszawie",
          "judgment_date": "2020-08-11",
          "publication_date": "2020-10-23",
          "mother_income": 4100,
          "father_income": 7900,
          "siblings": 1,
          "website": "https://orzeczenia.ms.gov.pl/content/$N/154510250002512_V_RC_000927_2018_Uz_2020-08-11_002",
          "children": [
              {
                  "child_age": 15,
                  "alimony_asked": 1500,
                  "alimony_granted": 1170,
                  "general_expenses_plaintiff": 2000,
                  "general_expenses_court": null,
                  "additional_costs": null
              }
          ]
      },
      {
          "reference_number": "VIII RC 201/19",
          "court": "Sad Rejonowy Szczecin-Centrum w Szczecinie",
          "judgment_date": "2020-10-19",
          "publication_date": "2021-07-27",
          "mother_income": 1900,
          "father_income": 7945,
          "siblings": 1,
          "website": "https://orzeczenia.ms.gov.pl/content/$N/155515300004012_VIII_RC_000201_2019_Uz_2020-10-19_001",
          "children": [
              {
                  "child_age": 10,
                  "alimony_asked": 1600,
                  "alimony_granted": 1100,
                  "general_expenses_plaintiff": 1885,
                  "general_expenses_court": 1885,
                  "additional_costs": null
              }
          ]
      },
      {
          "reference_number": "VIII RC 124/19",
          "court": "Sad Rejonowy Szczecin-Centrum w Szczecinie",
          "judgment_date": "2020-01-08",
          "publication_date": "2020-09-02",
          "mother_income": 3895,
          "father_income": 8270,
          "siblings": 1,
          "website": "https://orzeczenia.ms.gov.pl/content/$N/155515300004012_VIII_RC_000124_2019_Uz_2020-01-28_001",
          "children": [
              {
                  "child_age": 21,
                  "alimony_asked": 3065,
                  "alimony_granted": 1700,
                  "general_expenses_plaintiff": 1885,
                  "general_expenses_court": 2731,
                  "additional_costs": null
              }
          ]
      }
  ]`, result: '', sql: ''})
  } catch (error) {
    res.status(500).send(error.message)
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
