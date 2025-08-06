-- Logika ada 2! 
-- TRUE dan FALSE

--  1. NOT: menegasikan nilai jadi lawannya
SELECT NOT (2 = 2); -- NOT TRUE -> FALSE
SELECT NOT (3 != 3); -- NOT FALSE -> TRUE

-- nilainya akan dibalikkan
SELECT * FROM halotech.mahasiswa WHERE nim != 10500;

--  2. AND: membandingkan 2 kondisi
-- -- contoh: gue mau pergi ke jogja kalo aji dan bayu ikut
SELECT (2 = 2) AND (3 = 3); -- TRUE && TRUE = TRUE
SELECT (2 = 2) AND (3 != 3); -- TRUE && FALSE = FALSE (atau sebaliknya)

-- tampilkan hanya ketika dua kondisi terpenuhi
SELECT * FROM halotech.mahasiswa WHERE (kota_asal = 'Jakarta') AND (prodi = 'Kedokteran');

--  3. OR: membandingkan 2 kondisi
-- -- contoh: gue mau pergi ke jogja kalo aji atau bayu ikut
SELECT (2 = 2) OR (3 = 3); -- TRUE && TRUE = TRUE
SELECT (2 = 2) OR (3 != 3); -- TRUE && FALSE = TRUE (atau sebaliknya)

-- tampilkan ketika salah satu kondisi terpenuhi
SELECT * FROM halotech.mahasiswa WHERE (kota_asal = 'Jakarta') OR (prodi = 'Kedokteran');