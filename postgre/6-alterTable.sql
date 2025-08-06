SELECT * FROM halotech.mahasiswa;

-- menambah kolom
ALTER TABLE halotech.mahasiswa ADD COLUMN fakultas TEXT;

-- mengubah nama kolom
ALTER TABLE halotech.mahasiswa RENAME COLUMN jurusan TO prodi;

-- mengubah tipe data kolom
ALTER TABLE halotech.mahasiswa ALTER COLUMN kota_asal SET DATA TYPE VARCHAR(20);

-- menghapus kolom
ALTER TABLE halotech.mahasiswa DROP COLUMN fakultas;

-- mengubah nilai

-- 1. untuk satu kolom
UPDATE halotech.mahasiswa SET nama_belakang = null WHERE nim = 10504;

-- 2. untuk lebih dari satu kolom
UPDATE halotech.mahasiswa SET kota_asal = 'Bandung', prodi = 'Statistika' WHERE nim = 10504;