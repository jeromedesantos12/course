-- Homework: insert value to ipk table
-- Condition:
-- 1. tiap orang punya 8 semester
-- 2. nim boleh duplikat
-- 3. semester ditulis S1, S2, S3, .., S8
-- 4. ipk berkisar dari 0 hingga 4

INSERT INTO halotech.ipk (nim, semester, ipk)
    VALUES 
        (1500, 'S4', 3.3),
        (1501, 'S5', 3.1),
        (1502, 'S6', 2.7),
        (1503, 'S7', 2.6),
        (1504, 'S8', 3.4),
        (1505, 'S9', 3.0);

SELECT * FROM halotech.ipk;