-- tabel A
CREATE TABLE halotech.tableA {
    user_id INTEGER PRIMARY KEY,
    kota TEXT,
    jabatan TEXT
};

-- tabel B
CREATE TABLE halotech.tableB {
    user_id INTEGER PRIMARY KEY,
    gaji TEXT,
    hewan_peliharaan TEXT
};

-- isi tabel A
INSERT INTO halotech.tableA (user_id, kota, jabatan)
    VALUES
        (1, 'Jakarta', 'Data Engineer'),
        (2, 'Bandung', 'Data Analyst'),
        (7, 'Yogyakarta', 'Data Scientist'),
        (8, 'Bogor', 'Product Manager'),
        (9, 'Jakarta', 'Payment Analyst');

-- isi tabel B
INSERT INTO halotech.tableB (user_id, gaji, hewan_peliharaan)
    VALUES
        (1, 1000, 'Kucing'),
        (2, 1500, 'Bebek'),
        (3, 7500, 'Lele'),
        (4, 10000, 'Anjing'),
        (5, 800, 'Dinosaurus');

-- tampilkan isi tabel ke layar
SELECT * INTO halotech.tableA;
SELECT * INTO halotech.tableB;

-- TUGAS:
-- + tampilkan user_id, kota, jabatan
-- + di query yang sama, tampilkan gaji dan hewan peliharaan tiap user_id
-- + asumsikan table rujukan adalah table A

-- 1. LEFT JOIN: patokannya tabel A (sebelah kiri)
-- -- dan hanya menampilkan tabel B yang beririsian dengan tabel A (tabel pelengkap)
SELECT
    A.user_id,
    A.kota,
    A.jabatan,
    B.gaji,
    B.hewan_peliharaan
FROM halotech.tableA A 
    LEFT JOIN halotech.tableB B 
    ON A.user_id = B.user_id; 
    -- ON: kolom mana yang beririsan (user_id)

-- 2. RIGHT JOIN: patokannya tabel B (sebelah kanan)
-- -- dan hanya menampilkan tabel A yang beririsian dengan tabel B (tabel pelengkap)
SELECT
    A.user_id,
    A.kota,
    A.jabatan,
    B.gaji,
    B.hewan_peliharaan
FROM halotech.tableA A 
    RIGHT JOIN halotech.tableB B 
    ON A.user_id = B.user_id;

-- 2. INNER JOIN: hanya menampilkan yang beririsan
-- -- Sebelah kiri (tabel A) hanya menampilkan yang datanya juga ada di sebelah kanan (table B)
-- -- begitu juga sebaliknya!
SELECT
    A.user_id,
    A.kota,
    A.jabatan,
    B.gaji,
    B.hewan_peliharaan
FROM halotech.tableA A 
    INNER JOIN halotech.tableB B 
    ON A.user_id = B.user_id;

-- 4. MULTIPLE LEFT JOIN
-- -- tabel kirinya A, tabel kanan C
SELECT
    A.user_id,
    A.kota,
    A.jabatan,
    B.gaji,
    B.hewan_peliharaan
    C.kota kota_c,
    C.jabatan jabatan_c,
FROM halotech.tableA A 
    LEFT JOIN halotech.tableB B 
    ON A.user_id = B.user_id;
    LEFT JOIN halotech.tableA 'C' 
    ON A.user_id = 'C'.user_id; -- lihat urutan di ON