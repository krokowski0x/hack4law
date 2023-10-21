import json

# Assuming data is your input JSON data
data = [
    {
      "reference_number": "III RC 204/21",
      "court": "Sąd Rejonowy w Giżycku",
      "judgment_date": 44560,
      "publication_date": 44600,
      "mother_income": 909,
      "father_income": 4350,
      "siblings": 2,
      "child_age": 4,
      "alimony_asked": 600,
      "alimony_granted": 500,
      "general_expenses_court": 1000,
      "additional_costs": 200,
      "child_age_1": 2.5,
      "alimony_asked_1": 600,
      "alimony_granted_1": 400,
      "general_expenses_court_1": 750,
      "additional_costs_1": 180
    },
    {
      "reference_number": "III RC 191/15",
      "court": "Sąd Rejonowy w Ząbkowicach Śląskich",
      "judgment_date": 42409,
      "publication_date": 42444,
      "mother_income": 1380,
      "father_income": 1380,
      "siblings": 2,
      "child_age": 4,
      "alimony_asked": 700,
      "alimony_granted": 300,
      "general_expenses_court": 650,
      "child_age_1": 2,
      "alimony_asked_1": 700,
      "alimony_granted_1": 300,
      "general_expenses_court_1": 550
    },
    {
      "reference_number": "III RC 163/21",
      "court": "Sąd Rejonowy w Chełmnie",
      "judgment_date": 44714,
      "publication_date": 44749,
      "mother_income": 3800,
      "father_income": 7200,
      "siblings": 0,
      "child_age": 7,
      "alimony_asked": 1800,
      "alimony_granted": 1200,
      "general_expenses_plaintiff": 3400,
      "general_expenses_court": 2560
    },
    {
      "reference_number": "III RC 98/18",
      "court": "Sąd Rejonowy w Wągrowcu",
      "judgment_date": 43487,
      "publication_date": 43805,
      "mother_income": 1634,
      "father_income": 1900,
      "siblings": 0,

      "child_age": 7,
      "alimony_asked": 500,
      "alimony_granted": 700,
      "general_expenses_plaintiff": 1300,
      "general_expenses_court": 1300
    },
    {
      "reference_number": "IV RC 546/20",
      "court": "Sąd Rejonowy w Rybniku",
      "judgment_date": 44435,
      "publication_date": 44985,
      "mother_income": 3140,
      "father_income": 6033,
      "siblings": 2,
      "alimony_asked": 1300,
      "alimony_granted": 900,
      "general_expenses_plaintiff": 1650,
      "general_expenses_court": 1530,
      "alimony_asked_1": 1300,
      "alimony_granted_1": 900,
      "general_expenses_plaintiff_1": 1650,
      "general_expenses_court_1": 1530,
      "child_age_2": 2,
      "alimony_asked_2": 1000,
      "alimony_granted_2": 800,
      "general_expenses_plaintiff_2": 1350,
      "general_expenses_court_2": 1200
    },
    {
      "reference_number": "III RC 239/18",
      "court": "Sąd Rejonowy w Kaliszu",
      "judgment_date": 43525,
      "publication_date": 43608,
      "mother_income": 3751,
      "father_income": 5341,
      "siblings": 1,
      "child_age": 13,
      "alimony_asked": 1000,
      "alimony_granted": 850,
      "general_expenses_court": 1700,
      "child_age_1": 10,
      "alimony_asked_1": 1000,
      "alimony_granted_1": 800,
      "general_expenses_court_1": 1600
    },
    {
      "reference_number": "III RC 66/19",
      "court": "Sąd Rejonowy w Kaliszu",
      "judgment_date": 43693,
      "publication_date": 43735,
      "mother_income": 3241,
      "father_income": 1450,
      "siblings": 1,
      "child_age": 12,
      "alimony_asked": 2000,
      "alimony_granted": 850,
      "general_expenses_court": 1300,
      "additional_costs": 1700,
      "child_age_1": 10,
      "alimony_asked_1": 2000,
      "alimony_granted_1": 750,
      "general_expenses_court_1": 1100
    },
    {
      "reference_number": "III RC 53/21",
      "court": "Sąd Rejonowy w Toruniu",
      "judgment_date": 44673,
      "publication_date": 44914,
      "siblings": 1,
      "alimony_asked": 2000,
      "alimony_granted": 900,
      "general_expenses_plaintiff": 4872,
      "general_expenses_court": 2250,
      "alimony_asked_1": 2000,
      "alimony_granted_1": 900,
      "general_expenses_plaintiff_1": 4427,
      "general_expenses_court_1": 2250,
      "additional_costs_1": 950
    },
    {
      "reference_number": "III RC 27/23",
      "court": "Sąd Rejonowy w Lidzbarku Warmińskim",
      "judgment_date": 45078,
      "publication_date": 45114,
      "mother_income": 2731,
      "father_income": 2670,
      "siblings": 1,
      "child_age": 10,
      "alimony_asked": 850,
      "alimony_granted": 600,
      "general_expenses_plaintiff": 1700,
      "general_expenses_court": 1100,
      "child_age_1": 14,
      "alimony_asked_1": 1000,
      "alimony_granted_1": 800,
      "general_expenses_plaintiff_1": 1700,
      "general_expenses_court_1": 1400,
      "additional_costs_1": 150
    },
    {
      "reference_number": "III RC 503/21",
      "court": "Sąd Rejonowy w Toruniu",
      "judgment_date": 44691,
      "publication_date": 44818,
      "father_income": 3534,
      "siblings": 0,
      "alimony_asked": 1500,
      "alimony_granted": 1000,
      "general_expenses_plaintiff": 2500
    },
    {
      "reference_number": "III RC 111/22",
      "court": "Sąd Rejonowy w Lidzbarku Warmińskim",
      "judgment_date": 44936,
      "publication_date": 44953,
      "mother_income": 3946,
      "father_income": 5600,
      "siblings": 0,
      "child_age": 14,
      "alimony_asked": 1000,
      "alimony_granted": 850,
      "general_expenses_court": 1700,
      "additional_costs": 2500
    },
    {
      "reference_number": "XIII Ca 421/14",
      "court": "Sąd Okręgowy we Wrocławiu",
      "judgment_date": 42011,
      "publication_date": 42052,
      "mother_income": 1700,
      "father_income": 2000,
      "siblings": 0,
      "child_age": 11,
      "alimony_asked": 450,
      "alimony_granted": 600,
      "general_expenses_plaintiff": 1000,
      "general_expenses_court": 1200
    },
    {
      "reference_number": "III RC 234/18",
      "court": "Sąd Rejonowy w Wągrowcu",
      "judgment_date": 43628,
      "publication_date": 43657,
      "mother_income": 4500,
      "father_income": 3550,
      "siblings": 1,
      "child_age": 14,
      "alimony_asked": 1500,
      "alimony_granted": 800,
      "general_expenses_plaintiff": 2962,
      "general_expenses_court": 1330,
      "child_age_1": 11,
      "alimony_asked_1": 1500,
      "alimony_granted_1": 760,
      "general_expenses_plaintiff_1": 2962,
      "general_expenses_court_1": 1260
    },
    {
      "reference_number": "III RC 101/21",
      "court": "Sąd Rejonowy w Grudziądzu",
      "judgment_date": 44487,
      "publication_date": 44566,
      "mother_income": 890,
      "father_income": 2199,
      "siblings": 1,
      "child_age": 17,
      "alimony_asked": 800,
      "alimony_granted": 500,
      "child_age_1": 12,
      "alimony_asked_1": 800,
      "alimony_granted_1": 500
    },
    {
      "reference_number": "III RC 767/16",
      "court": "Sąd Rejonowy w Olsztynie",
      "judgment_date": 42793,
      "publication_date": 42950,
      "mother_income": 0,
      "father_income": 3200,
      "siblings": 1,
      "child_age": 9,
      "alimony_asked": 700,
      "alimony_granted": 450,
      "general_expenses_plaintiff": 1370,
      "child_age_1": 3,
      "alimony_asked_1": 650,
      "alimony_granted_1": 450,
      "general_expenses_plaintiff_1": 1303
    },
    {
      "reference_number": "III RC 53/23",
      "court": "Sąd Rejonowy w Szczytnie",
      "judgment_date": 45055,
      "publication_date": 45166,
      "mother_income": 4550,
      "father_income": 1272,
      "siblings": 0,
      "child_age": 13,
      "alimony_asked": 1100,
      "alimony_granted": 850,
      "general_expenses_plaintiff": 1800,
      "general_expenses_court": 1800,
      "alimony_asked_1": 1100
    },
    {
      "reference_number": "V RC 249/19",
      "court": "Sąd Rejonowy dla Warszawy-Mokotowa",
      "judgment_date": "14 lipca 2021 r.",
      "publication_date": 44691,
      "mother_income": 4700,
      "father_income": 18700,
      "siblings": 0,
      "child_age": 4,
      "alimony_asked": 4000,
      "alimony_granted": 2700,
      "general_expenses_court": 3600
    },
    {
      "reference_number": "V RC 664/18",
      "court": "Sąd Rejonowy dla Warszawy Pragi - Północ w Warszawie",
      "judgment_date": "29 marca 2022 r.",
      "publication_date": 44753,
      "mother_income": 3400,
      "father_income": 3200,
      "siblings": 0,
      "child_age": 11,
      "alimony_asked": 1200,
      "alimony_granted": 800,
      "general_expenses_court": 1700
    },
    {
      "reference_number": "V RC 217/20",
      "court": "Sądu Rejonowego dla Warszawy-Mokotowa w Warszawie",
      "judgment_date": "13 stycznia 2021 r.",
      "publication_date": 44525,
      "mother_income": 10210,
      "father_income": 12000,
      "siblings": 0,
      "child_age": 10,
      "alimony_granted": 2800,
      "general_expenses_court": 4810,
      "additional_costs": 140
    },
    {
      "reference_number": "V RC 927/18",
      "court": "Sąd Rejonowy dla Warszawy Pragi - Północ w Warszawie",
      "judgment_date": "11 sierpnia 2020 r.",
      "publication_date": 44127,
      "mother_income": 4100,
      "father_income": 7900,
      "siblings": 1,
      "child_age": 15,
      "alimony_asked": 1500,
      "alimony_granted": 1170,
      "general_expenses_plaintiff": 2000
    },
    {
      "reference_number": "VIII RC 201/19",
      "court": "Sąd Rejonowy Szczecin-Centrum w Szczecinie",
      "judgment_date": "19 października 2020 r.",
      "publication_date": 44404,
      "mother_income": 1900,
      "father_income": 7945,
      "siblings": 0,
      "child_age": 10,
      "alimony_asked": 1600,
      "alimony_granted": 1100,
      "general_expenses_plaintiff": 1885,
      "general_expenses_court": 1885
    },
    {
      "reference_number": "VIII RC 124/19",
      "court": "Sąd Rejonowy Szczecin-Centrum w Szczecinie",
      "judgment_date": "8 stycznia 2020 r.",
      "publication_date": 44076,
      "mother_income": 3895,
      "father_income": 8270,
      "siblings": 2,
      "child_age": 21,
      "alimony_asked": 3065,
      "alimony_granted": 1700,
      "general_expenses_plaintiff": 1885,
      "general_expenses_court": 2731
    }
  ]
# Initialize an empty dictionary
result = {}

# Iterate over the data
for item in data:
  # Extract reference number
  ref_number = item["reference_number"]
#   print(ref_number)
  # If the reference number is not in the result, add it
  if ref_number not in result:
    result[ref_number] = {
      "reference_number": ref_number,
      "court": item.get("court"),
      "judgment_date": item.get("judgment_date"),
      "publication_date": item.get("publication_date"),
      "mother_income": item.get("mother_income"),
      "father_income": item.get("father_income"),
      "siblings": item.get("siblings"),
      "children": []
    }
    num_children = item["siblings"] + 1
    children = []
  
  # Add child information to the 'children' array
    for i in range(num_children):
        child = {
            "child_age": item.get('child_age' if i == 0 else f"child_age_{i}", None),
            "alimony_asked": item.get("alimony_asked" if i == 0 else f"alimony_asked_{i}", None),
            "alimony_granted": item.get("alimony_granted" if i == 0 else f"alimony_granted_{i}", None),
            "general_expenses_plaintiff": item.get("general_expenses_plaintiff" if i == 0 else f"general_expenses_plaintiff_{i}", None),
            "general_expenses_court": item.get("general_expenses_court" if i == 0 else f"general_expenses_court_{i}", None),
            "additional_costs": item.get("additional_costs" if i == 0 else f"general_expenses_court_{i}", None)
        }
  
        print(child)
        children.append(child)

    result[ref_number]["children"] = children

    for key in list(result[ref_number].keys()):
        if key.startswith("child_age") or key.startswith("alimony_asked") or key.startswith("alimony_granted") or key.startswith("general_expenses_court") or key.startswith("additional_costs"):
            del result[ref_number][key]

# Convert the result to JSON
with open('data.json', 'w') as f:
    json_result = json.dump(result, f, indent=4)


