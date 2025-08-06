-- DQL: Data Query Language
SELECT * FROM halotech.mahasiswa;
SELECT nim, nama_depan FROM halotech.mahasiswa;

-- CONDITION
-- 1. keyword: WHERE
-- 2. operator: =, !=, <, >, <=, >=
SELECT * FROM halotech.mahasiswa WHERE kota_asal = 'Bandung';
SELECT * FROM halotech.mahasiswa WHERE nim <= 10500;

-- kode ASCII: A -> 65, B ->
-- kata jakarta lebih besar dari kata bandung
SELECT * FROM halotech.mahasiswa WHERE kota_asal <= 'Bandung';

-- NULL = nilai tak terdefinisi (jadi gagal)
SELECT * FROM halotech.mahasiswa WHERE nama_belakang != NULL;