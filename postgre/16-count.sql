-- 1. COUNT: menghitung jumlah baris dalam suatu tabel
SELECT COUNT (*) FROM halotech.mahasiswa; -- 5
SELECT COUNT (nim) FROM halotech.mahasiswa; -- 5

-- COUNT hanya menghitung data yang ada, bukan null
SELECT COUNT (nama_belakang) FROM halotech.mahasiswa; -- 3 (yang 2 null)

-- lanjutan 11-limit.sql
-- DISTINCT hanya mencari nilai unik atau kembar
SELECT COUNT (DISTINCT kota_asal) FROM halotech.mahasiswa; -- 2 (Jakarta dan Bandung)

-- 2. MAX: mendapatkan nilai terbesarnya
SELECT MAX (ipk) FROM halotech.ipk; -- 4
SELECT MIN (ipk) FROM halotech.ipk; -- 0.7

-- pembuktian!
SELECT * FROM halotech.ipk ORDER BY ipk DESC; -- 4, ..., ...
SELECT * FROM halotech.ipk ORDER BY ipk ASC; -- ..., ..., 0.7

-- apakah MAX MIN bisa untuk tipe data string?
-- bisa, dinilai berdasarkan ASCII code (representasi angka untuk string)
SELECT MAX (prodi) FROM halotech.mahasiswa; -- teknik geologi
SELECT MIN (prodi) FROM halotech.mahasiswa; -- kedokteran