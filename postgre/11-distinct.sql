-- DISTICT: ada berapa anggota yang gak duplikat?
SELECT DISTINCT * FROM halotech.ipk;
SELECT DISTINCT semester FROM halotech.ipk;

-- LIMIT: membatasi jumlah ditampilkan
SELECT DISTINCT semester FROM halotech.ipk LIMIT 3;

-- Kenapa hasilnya bisa acak?

-- analogi ada 10 data!
-- + hdd 1: S1, S2, S3
-- + hdd 2: S4, S5, S6
-- + hdd 3: S7, S8, S9

-- selesai duluan query?
-- + hdd 2
-- + hdd 1
-- + hdd 3

-- LIMIT 3
-- [S4, S5, S6], S1, S2, S3, S7, S8
-- limit bukan 3 teratas, tapi random

-- solusi? ORDER BY
SELECT DISTINCT semester FROM halotech.ipk ORDER BY semester LIMIT 3;