-- 1. AVG (average): mencari rata-rata dari kolom yang kita pilih
SELECT AVG (ipk) FROM halotech.ipk; -- 3.2..

-- 2. MEDIAN: nilai tengah dari data urut
-- ga ada fungsinya, jadi harus manual
SELECT PERCENTILE_CONT(0.5) WITHIN GROUP(ORDER BY ipk) FROM halotech.ipk;

-- 3. MOD: mencari sisa dari pembagian 2 bilangan bulat
SELECT MOD (10, 2); -- 0
SELECT MOD (10, 3); -- 1

-- penerapan di tabel kita
SELECT MOD (ipk, 2) FROM halotech.ipk; -- gagal, karena ipk adalah float (double precision)
SELECT MOD (nim, 2) FROM halotech.ipk; -- 0, 1, .., ..