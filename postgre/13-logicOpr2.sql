-- 1. IN: operasi untuk membandingkan nilai dengan suatu grup atau kelompok
SELECT 1 IN (1, 2, 3); -- TRUE
SELECT * FROM halotech.mahasiswa WHERE kota_asal IN ('Jakarta', 'Bogor', 'Tangerang');
SELECT * FROM halotech.mahasiswa WHERE nim IN (10501, 10502, 10503); 

-- 2. BETWEEN: membandingkan nilai dengan rentang tertentu
SELECT 2 BETWEEN 1 AND 3; -- TRUE
SELECT * FROM halotech.mahasiswa WHERE kota_asal BETWEEN 'Jakarta' AND 'Bogor'; -- string: ga jalan, tapi query valid (dianggap angka oleh ASCII) 

-- 3. LIKE: untuk mencari kemiripan (string)
SELECT 'Jakarta' LIKE 'Jakarta' -- TRUE
SELECT 'Jakarta Selatan' LIKE 'Jakarta' -- FALSE

-- cari kata berakhiran kata Jakarta, awalan bebas
SELECT 'Jakarta Selatan' LIKE '%Jakarta' -- FALSE (karena Jakarta Selatan berakhiran Selatan bukan Jakarta)

-- cari awalan kata Jakarta, akhiran bebas
SELECT 'Jakarta Selatan' LIKE 'Jakarta%' -- TRUE (karena Jakarta Selatan berawalan Jakarta )

-- cari kata awalan bebas dan akhiran bebas, tapi di tengah harus ada kata Jakarta
SELECT 'Jakarta Selatan' LIKE '%Jakarta%' -- TRUE (karena awalan Jakarta kosong, akhiran Selatan juga kosong, tengahnya ada kata Jakarta)

-- cari kata yang tengahnya 'ka' awalan dan akhiran bebas
SELECT 'kakiku kaku gara-gara kakaku' LIKE '%ka%'; -- TRUE (kakiku, kaku, kakaku) (3)

-- cari prodi yang dimulai dengan kata awalan Teknik
SELECT * FROM halotech.mahasiswa WHERE prodi LIKE 'Teknik%';

-- semua perintah ini mirip filter
