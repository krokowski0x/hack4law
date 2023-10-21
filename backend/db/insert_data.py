import json

f = open("backend/db/data.json")
data = json.load(f)
db_file = open("backend/db/insert_data2.sql", "w")
db_file.write(
    "INSERT INTO Cases (reference_number, website, court, judgement_date, publication_date, mother_income, father_income, siblings, description) VALUES\n"
)

for item in data:
    single_insert = f"('{item.get('reference_number')}', '{item.get('website')}', '{item.get('court')}', '{item.get('judgement_date')}', '{item.get('publication_date')}', {item.get('mother_income')}, {item.get('father_income')}, {item.get('siblings')}, '{item.get('description')}'),\n"
    db_file.write(single_insert)
    

db_file.write(
    "INSERT INTO Children (reference_number, child_age, alimony_asked, alimony_granted, general_expenses_plaintiff, general_expenses_court, additional_costs) VALUES\n"
)

for item in data:
    children  = item['children']
    for child in children:
        insert_child = f"('{item.get('reference_number')}', {child.get('child_age')}, {child.get('alimony_asked')}, {child.get('alimony_granted')}, {child.get('general_expenses_plaintiff')}, {child.get('general_expenses_court')}, {child.get('additional_costs')}),\n"
        db_file.write(insert_child)