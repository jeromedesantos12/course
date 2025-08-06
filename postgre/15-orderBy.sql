-- ORDER BY: mengurutkan kolom dari terbesar ke terkecil atau sebaliknya

-- 1. kecil ke besar -> ASCENDING
SELECT * FROM halotech.mahasiswa ORDER BY nim; -- default ASC
SELECT * FROM halotech.mahasiswa ORDER BY nim ASC;

-- 2. besar ke kecil -> DESCENDING
SELECT * FROM halotech.mahasiswa ORDER BY nim DESC;