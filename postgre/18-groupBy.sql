-- GROUP BY : menghitung jumlah kemunculan

-- Cara 1: manual dengan pengkondisian
SELECT COUNT (kota_asal) FROM halotech.mahasiswa WHERE kota_asal = 'Jakarta'; -- 4
SELECT COUNT (kota_asal) FROM halotech.mahasiswa WHERE kota_asal = 'Bandung'; -- 1

-- Cara 2: menggunakan GROUP BY
-- kolom yang di group harus sama dengan kolom yang di select
SELECT kota_asal, COUNT(*) jumlah_kemunculan FROM halotech.mahasiswa GROUP BY kota_asal;
-- Jakarta: 4
-- Bandung: 1

SELECT nim, kota_asal, COUNT(*) jumlah_kemunculan FROM halotech.mahasiswa GROUP BY kota_asal; -- gagal, karena kolom tidak sama
SELECT nim, kota_asal, COUNT(*) jumlah_kemunculan FROM halotech.mahasiswa GROUP BY nim, kota_asal; -- hasilnya muncul semua karena data unik semua

-- lebih dari 1 fungsi
-- per semester maksimum dan minimum ipknya berapa sih?
SELECT semester, COUNT(*), MAX(ipk), MIN(ipk) FROM halotech.ipk GROUP BY semester;