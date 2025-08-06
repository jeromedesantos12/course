-- lanjutan 7-select.sql

-- NULL = nilai tak terdefinisi (jadi gagal)
SELECT * FROM halotech.mahasiswa WHERE nama_belakang = NULL;
SELECT * FROM halotech.mahasiswa WHERE nama_belakang != NULL;

-- solusi pakai keyword khusus
SELECT * FROM halotech.mahasiswa WHERE nama_belakang IS NULL;
SELECT * FROM halotech.mahasiswa WHERE nama_belakang IS NOT NULL;

