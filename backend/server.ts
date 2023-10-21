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
          "judgement_date": "2021-12-30",
          "publication_date": "2022-02-08",
          "mother_income": 909,
          "father_income": 4350,
          "siblings": 2,
          "description": "Sąd Rejonowy w Giżycku zasądził od pozwanego Ł. L. alimenty w kwocie 500 zł miesięcznie dla W. L. i 400 zł miesięcznie dla S. L., płatne do 10-tego każdego miesiąca, poczynając od 1 października 2021 r.",
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
          "judgement_date": "2016-02-09",
          "publication_date": "2016-03-15",
          "mother_income": 1380,
          "father_income": 1380,
          "siblings": 2,
          "description": "Sprawa dotyczyła podwyższenia alimentów dla małoletnich powodów O. S. i L. S., reprezentowanych przez przedstawicielkę ustawową G. H., przeciwko pozwanemu Ł. S. W dniu 09 lutego 2016 roku, Sąd Rejonowy w Ząbkowicach Śląskich zasądził od pozwanego tytułem podwyższonych alimentów na utrzymanie małoletniego powoda O. S. i małoletniej powódki L. S. kwotę po 300 zł miesięcznie na każde z dzieci, co łącznie wynosi 600 zł miesięcznie.",
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
          "judgement_date": "2022-06-02",
          "publication_date": "2022-07-07",
          "mother_income": 3800,
          "father_income": 7200,
          "siblings": 1,
          "description": "Sąd Rejonowy w Chełmnie, w dniu 02 czerwca 2022r., podwyższył rentę alimentacyjną orzeczoną wyrokiem Sądu Okręgowego w Toruniu z dnia 03 czerwca 2019r. z kwoty 700 zł miesięcznie do kwoty 1.200 zł miesięcznie, płatną do rąk matki małoletniego powoda.",
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
          "judgement_date": "2019-01-22",
          "publication_date": "2019-12-06",
          "mother_income": 1634,
          "father_income": 1900,
          "siblings": 1,
          "description": "Matka małoletniego powoda, M. K., wniosła o zasądzenie od pozwanego A. S. renty alimentacyjnej w kwocie 500 zł miesięcznie. Sąd ocenił zeznania M. K. za wiarygodne, szczególnie w kwestii kosztów utrzymania mieszkania, ale uznał za zawyżone koszty wyżywienia małoletniego powoda oszacowane przez matkę na kwotę 500 zł miesięcznie. W wyniku procesu, Sąd obciążył pozwanego kosztami procesu na rzecz małoletniego powoda w kwocie 2.745 zł.",
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
          "judgement_date": "2021-08-27",
          "publication_date": "2023-02-28",
          "mother_income": 3140,
          "father_income": 6033,
          "siblings": 3,
          "description": "Sąd Rejonowy w Rybniku zasądził od pozwanego na rzecz małoletnich powódek M. i A. alimenty w kwocie po 900 zł miesięcznie na rzecz każdej z małoletnich powódek oraz na rzecz małoletniego powoda J. F. alimenty w kwocie po 800 zł miesięcznie, tj. łącznie 2600 zł, płatne do rąk matki małoletnich powodów K. F. do dnia 20-tego każdego miesiąca.",
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
          "judgement_date": "2019-03-01",
          "publication_date": "2019-05-23",
          "father_income": 5341,
          "siblings": 2,
          "description": "Sprawa dotyczyła pozwanego, który twierdził, że nie może wynająć domu, który otrzymał w ramach podziału majątku, oraz że jego miesięczne wynagrodzenie wynosi około 3300 zł netto. Sąd nie uwierzył pozwanemu w obu tych kwestiach, zauważając sprzeczności w jego zeznaniach i dowodach dotyczących zarobków. W wyniku tego, sąd podniósł obowiązek alimentacyjny pozwanego względem jego małoletniego syna i córki.",
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
          "judgement_date": "2019-08-16",
          "publication_date": "2019-09-27",
          "mother_income": 3241,
          "father_income": 1450,
          "siblings": 2,
          "description": "Małoletni M. M. (4) i M. M. (5), reprezentowani przez matkę E. M., wniesli pozew przeciwko ojcu Ł. M. o zasądzenie alimentów w kwocie 2000 zł miesięcznie na każdego z nich, zamiast dotychczasowego obowiązku alimentacyjnego wynoszącego 550 zł miesięcznie na każdego. Matka argumentowała, że od czasu ostatniego ustalenia wysokości obowiązku alimentacyjnego, wzrosły usprawiedliwione potrzeby dzieci, a dotychczas ustalona kwota alimentów nie jest wystarczająca na pokrycie tych potrzeb. Pozwany Ł. M., młody i zdrowy mężczyzna pracujący w gospodarstwie rolnym swoich rodziców, wnosił o oddalenie powództwa.",
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
          "judgement_date": "2022-04-22",
          "publication_date": "2022-12-19",
          "mother_income": null,
          "father_income": null,
          "siblings": 2,
          "description": "Sprawa dotyczyła podwyższenia alimentów dla małoletnich K. i K. D., działających przez matkę E. M., przeciwko L. D. Wcześniej ustalone alimenty wynosiły 400 zł miesięcznie dla każdego z małoletnich, ale Sąd Rejonowy w Toruniu zasądził podwyżkę do 900 zł miesięcznie dla każdego z dzieci, począwszy od 17.12.2020r.",
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
          "judgement_date": "2023-06-01",
          "publication_date": "2023-07-07",
          "mother_income": 2731,
          "father_income": 2670,
          "siblings": 2,
          "description": "Alimenty zostały zasądzone wyrokiem Sądu Rejonowego w Lidzbarku Warmińskim z dnia 20 kwietnia 2021 r. w sprawie III RC 20/21 z kwoty po 450 złotych miesięcznie do kwoty po 850 złotych. Sąd podwyższył alimenty od dnia 1 czerwca 2023 roku od pozwanego J. P. na rzecz małoletniej powódki M. P. do kwoty 600 złotych miesięcznie.",
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
          "judgement_date": "2022-05-10",
          "publication_date": "2022-09-14",
          "mother_income": null,
          "father_income": 3534,
          "siblings": 1,
          "description": "D. P. złożyła pozew w imieniu swojej małoletniej córki J. P., domagając się podwyższenia alimentów od ojca dziecka, M. P., z kwoty 750 zł miesięcznie do 1500 zł miesięcznie. M. P. wnosił o oddalenie powództwa w całości, kwestionując istotną zmianę okoliczności, która uzasadniałaby podwyżkę alimentów. Sąd zasądził od M. P. na rzecz J. P. alimenty w kwocie 1000 zł miesięcznie, począwszy od 30.07.2021r., oddalając powództwo w pozostałej części.",
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
          "judgement_date": "2023-01-10",
          "publication_date": "2023-01-27",
          "mother_income": 3946,
          "father_income": 5600,
          "siblings": 1,
          "description": "Sprawa dotyczyła podwyższenia alimentów dla małoletniej P. Ł., reprezentowanej przez przedstawicielkę ustawową A. Ł., przeciwko M. Ł. (1). Alimenty, które wcześniej wynosiły 500 złotych miesięcznie, zostały podwyższone do 850 złotych miesięcznie od 1 października 2022 roku. W pozostałym zakresie powództwo zostało oddalone, a koszty procesu pomiędzy stronami wzajemnie zniósł sąd.",
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
          "judgement_date": "2015-01-07",
          "publication_date": "2015-02-17",
          "mother_income": 1700,
          "father_income": 2000,
          "siblings": 1,
          "description": "Sąd Rejonowy w Oleśnicy podwyższył alimenty z kwoty 300 zł miesięcznie do kwoty 450 zł miesięcznie, począwszy od 1 października 2013 r. Apelacje obu stron zostały oddalone przez Sąd Okręgowy, który utrzymał decyzję Sądu Rejonowego.",
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
          "judgement_date": "2019-06-12",
          "publication_date": "2019-07-11",
          "mother_income": 4500,
          "father_income": 3550,
          "siblings": 2,
          "description": "Sąd oddalił wniosek pełnomocnika strony powodowej o przeprowadzenie dowodu z wydruków wiadomości tekstowych złożonych po terminie. Sąd dał wiarę zeznaniom E. B. na temat ponoszonych przez nią kosztów utrzymania małoletnich powodów, jednak oddalił wniosek pozwanego o przeprowadzenie dowodu z zeznań świadków.",
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
          "judgement_date": "2021-10-18",
          "publication_date": "2022-01-05",
          "mother_income": 890,
          "father_income": 2199,
          "siblings": 2,
          "description": "Sąd Rejonowy w Grudziądzu podwyższył alimenty z kwoty 300 zł miesięcznie do 500 zł miesięcznie na rzecz każdego z dzieci. Pozwany G. Ż. argumentował, że jego możliwości zarobkowe nie pozwalają mu na łożenie wyższych alimentów, a Sąd uwzględnił ten fakt, zasądzając od niego tylko część kosztów procesu.",
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
          "judgement_date": "2017-02-27",
          "publication_date": "2017-08-03",
          "mother_income": 0,
          "father_income": 3200,
          "siblings": 2,
          "description": "K. B., działając w imieniu swoich małoletnich dzieci O. T. i L. T., wystąpiła z pozwem o zasądzenie od ich ojca, P. T., alimentów w kwocie 700 zł miesięcznie dla O. T. i 650 zł miesięcznie dla L. T. Pozwany argumentował, że przekazuje co miesiąc kwotę 500 zł, co jego zdaniem jest wystarczające, i kwestionował niektóre wydatki przedstawione przez matkę dzieci. Sąd uznał powództwo za słuszne, ale tylko w pewnej jego części, zauważając rozbieżności w relacjach obu stron dotyczących kosztów utrzymania dzieci i ich potrzeb.",
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
          "judgement_date": "2023-05-09",
          "publication_date": "2023-08-28",
          "mother_income": 4550,
          "father_income": 1272,
          "siblings": 1,
          "description": "Sprawa dotyczyła alimentów dla małoletniej J.K., reprezentowanej przez jej matkę M.S., przeciwko R.K., ojcu dziecka. M.S. wniosła o zasądzenie alimentów w kwocie 1100 zł miesięcznie, podczas gdy R.K., pracujący na ¼ etatu jako mechanik samochodowy, wnosił o oddalenie powództwa ponad kwotę 600 zł, twierdząc, że nie jest w stanie przeznaczyć większej kwoty na utrzymanie dziecka. Sąd zasądził alimenty w kwocie 850 zł miesięcznie, płatne z góry do dnia 10 każdego miesiąca, począwszy od 1 maja 2023 roku",
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
          "judgement_date": "2021-07-14",
          "publication_date": "2022-05-10",
          "mother_income": 4700,
          "father_income": 18700,
          "siblings": 1,
          "description": "Sprawa dotyczyła sporu o alimenty, gdzie pozwany sporadycznie korzystał z samochodu rodziców i nie przekazywał żadnych dodatkowych środków na utrzymanie córki poza kwotą alimentów. Sąd uwzględnił dowody z dokumentów, ale nie uwzględnił paragonów, ponieważ nie stanowiły one istotnej okoliczności w sprawie. Sąd uznał, że przedstawicielka ustawowa w znacznej mierze sprawuje opiekę nad dzieckiem, a zeznania były wiarygodne tylko w części, szczególnie w odniesieniu do wyliczenia usprawiedliwionych potrzeb małoletniej.",
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
          "judgement_date": "2022-03-29",
          "publication_date": "2022-07-11",
          "mother_income": 3400,
          "father_income": 3200,
          "siblings": 1,
          "description": "Sprawa dotyczyła podwyższenia alimentów dla małoletniego W.K., które były płatne przez jego ojca, M.K. Wcześniej ustalona kwota wynosiła 550 zł miesięcznie, ale przedstawicielka ustawowa małoletniego, E.R., wniosła o podwyższenie tej kwoty do 1200 zł miesięcznie. Sąd zdecydował o podwyższeniu alimentów do 800 zł miesięcznie, oddalił powództwo wzajemne i zasądził od pozwanego na rzecz powoda kwotę 1206 zł tytułem zwrotu kosztów zastępstwa procesowego.",
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
          "judgement_date": "2021-01-13",
          "publication_date": "2021-11-25",
          "mother_income": 10210,
          "father_income": 12000,
          "siblings": 1,
          "description": "Sprawa dotyczyła rozwiedzionych rodziców małoletniej, którzy byli zobowiązani do wspólnego wykonywania władzy rodzicielskiej, a ojciec obciążony był udziałem w utrzymaniu dziecka w wysokości 2000 zł miesięcznie. Sąd zauważył, że koszty związane z edukacją dziecka wzrosły, wynosząc obecnie około 1500 zł, co nie przystawało do aktualnych możliwości zarobkowych rodziców. W wyniku procesu, ojciec przegrał sprawę o podwyższenie alimentów i został obciążony kosztami procesu, w tym kosztami zastępstwa procesowego strony powodowej.",
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
          "judgement_date": "2020-08-11",
          "publication_date": "2020-10-23",
          "mother_income": 4100,
          "father_income": 7900,
          "siblings": 1,
          "description": "Sąd w wyroku z dnia 11 sierpnia 2020 r. zasądził alimenty na kwotę 1.170 zł miesięcznie, co stanowiło różnicę 420 zł w stosunku do poprzedniej kwoty. Dodatkowo, sąd nakazał pobrać od pozwanego na rzecz Skarbu Państwa kwotę 252 zł tytułem nieuiszczonej opłaty sądowej i nadał rygor natychmiastowej wykonalności wyrokowi.",
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
          "judgement_date": "2020-10-19",
          "publication_date": "2021-07-27",
          "mother_income": 1900,
          "father_income": 7945,
          "siblings": 1,
          "description": "Sprawa dotyczyła rewizji alimentów zasądzonych 9 lat wcześniej. W tym czasie sytuacja majątkowa stron oraz potrzeby małoletniego M. P. uległy znaczącym zmianom, co wynikało z jego dorastania i związanego z tym wzrostu kosztów utrzymania. Sąd dokonał oceny aktualnych możliwości majątkowych i zarobkowych pozwanego, zakresu usprawiedliwionych potrzeb małoletniego powoda oraz zakresu osobistego udziału każdego z rodziców w utrzymaniu i wychowaniu małoletniego powoda.",
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
          "judgement_date": "2020-01-08",
          "publication_date": "2020-09-02",
          "mother_income": 3895,
          "father_income": 8270,
          "siblings": 1,
          "description": "Powód, W. W. wnosi o zasądzenie od pozwanego, D. W., alimentów w kwocie 3.065 zł miesięcznie, argumentując, że musiał wyprowadzić się do innego miasta na studia i nie jest w stanie samodzielnie utrzymać się. Pozwany, który już płaci alimenty na troje dzieci i spłaca kredyt mieszkaniowy, twierdzi, że powód nie czyni starań o pokrycie części wydatków. Sąd ustalił, że kontakty pozwanego z synem po 2017 roku były sporadyczne i praktycznie ustały po wniesieniu przez matkę powoda pozwu o rozwód i przez powoda pozwu o alimenty.",
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
