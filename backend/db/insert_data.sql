CREATE TABLE Cases (
    reference_number VARCHAR(255),
    case_website VARCHAR(255),
    court VARCHAR(255),
    judgement_date DATE,
    publication_date DATE,
    mother_income DECIMAL(10,2),
    father_income DECIMAL(10,2),
    siblings INT,
    PRIMARY KEY (reference_number)
);

CREATE TABLE Children (
    reference_number VARCHAR(255),
    child_age DECIMAL(3,1),
    alimony_asked DECIMAL(10,2),
    alimony_granted DECIMAL(10,2),
    general_expenses_plaintiff DECIMAL(10,2),
    general_expenses_court DECIMAL(10, 2)
    additional_costs DECIMAL(10,2),
    PRIMARY KEY (reference_number),
    FOREIGN KEY (reference_number) REFERENCES Cases(reference_number)
);

INSERT INTO Cases ()
VALUES 
()

