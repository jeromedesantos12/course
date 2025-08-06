-- table: mahasiswa
-- + nim INTEGER PRIMARY KEY
-- + nama_depan VARCHAR(50)
-- + nama_belakang VARCHAR(50)
-- + kota_asal TEXT
-- + jurusan TEXT

-- table: ipk
-- + nim INTEGER
-- + semester VARCHAR(3)
-- + ipk FLOAT 

-- mahasiswa
CREATE TABLE halotech.mahasiswa (
    nim INTEGER PRIMARY KEY,
    nama_depan VARCHAR(50),
    nama_belakang VARCHAR(50),
    kota_asal TEXT,
    jurusan TEXT
);

-- ipk
CREATE TABLE halotech.ipk (
    nim INTEGER,
    semester VARCHAR(3),
    ipk FLOAT
);