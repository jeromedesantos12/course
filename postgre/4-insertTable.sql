INSERT INTO halotech.mahasiswa
    VALUES (10500, 'Bimantara', 'Hanumpraja', 'Jakarta', 'Teknik Fisika');

-- menggunakan kolom
INSERT INTO halotech.mahasiswa (nim, nama_depan, nama_belakang, kota_asal, jurusan)
    VALUES (10501, 'Maudy', 'Ayunda', 'Jakarta', 'School of Business');

-- menggunakan kolom ketika kita mau memasukkan data secara eksplisit
-- misal: kita bisa bolak balik kolom, asal urutan valuenya juga sama
INSERT INTO halotech.mahasiswa (nama_belakang,  kota_asal, nama_depan, jurusan, nim)
    VALUES ('Bambang', 'Jakarta', 'Pak', 'Teknik Geologi', 10502 );

-- null di nama belakang
INSERT INTO halotech.mahasiswa (nim, nama_depan, kota_asal, jurusan)
    VALUES (10503, 'Freya', 'Jakarta', 'Kedokteran');

-- null di jurusan
INSERT INTO halotech.mahasiswa
    VALUES(10504, 'Christy', 'Bandung', 'Stasistika');

-- lihat isi tabel
-- SELECT nim, nama_depan, kota_asal, jurusan FROM halotech.mahasiswa;
SELECT * FROM halotech.mahasiswa;