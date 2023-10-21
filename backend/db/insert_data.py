import json
f = open('backend/db/data.json')
data = json.load(f)
print(data.keys())
db_file = open("backend/db/insert_data2.sql", "w")
db_file.write('INSERT INTO Cases (reference_number, case_website, court, judgement_date, publication_date, mother_income, father_income, siblings) VALUES')

for key in data.keys():
    item = data['key']
    single_insert = f"({item['reference_number'], item['']})"
    