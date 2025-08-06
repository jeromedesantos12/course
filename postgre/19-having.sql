-- HAVING : memfilter data dari hasil query kita

-- 1. WHERE: memfilter datanya dulu, sebelum melakukan agregasi function
-- + kekurangan: table 10jt baris difilter dulu (makan memori) 
SELECT
    semester,
    AVG(ipk) rerata_ipk
FROM halotech.ipk
    WHERE semester = 'S1' -- ditulis sebelum group by
    GROUP BY semester;

-- 2. HAVING: melakukan agregasi function dulu, baru difilter 
-- + keuntungan: tabel udah di agregasi dulu sisa jadi 500k baris (performa lebih cepat)
-- + kekurangan: harus agregasi dulu (apakah sejalan dengan logic bisnis kita?)

-- filter by kolom atau by group
SELECT
    semester,
    AVG(ipk) rerata_ipk
FROM halotech.ipk
    GROUP BY semester
    HAVING semester = 'S1';

-- having bisa filter berdasarkan fungsi agregasi juga
-- where tidak bisa!
SELECT
    semester,
    AVG(ipk) rerata_ipk
FROM halotech.ipk
    GROUP BY semester
    HAVING rerata_ipk > 3.5; -- gagal (kolom ga ada) 
    -- karena, kolom rerata_ipk datang setelah query selesai