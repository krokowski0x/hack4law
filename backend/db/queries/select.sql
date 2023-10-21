-- Give me cases from last 3 years where there were more than 1 child in the family and father's income was between 2000 and 5000 PLN per month.
SELECT DISTINCT c.* FROM Cases c
INNER JOIN Children ch ON c.reference_number = ch.reference_number
WHERE ch.child_age < 18 
AND c.father_income BETWEEN 2000 AND 5000
AND c.siblings > 0
AND c.judgement_date BETWEEN '2020-01-01' AND '2023-01-01';


-- Give me cases where mother does not have an income and the child is over the age of 2. 
SELECT DISTINCT c.* FROM Cases c
INNER JOIN Children ch ON c.reference_number = ch.reference_number
WHERE ch.child_age > 2
AND c.mother_income IS NULL
AND strftime('%Y', c.judgement_date) > 2019;