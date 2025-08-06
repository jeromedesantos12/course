-- DELETE, TRUNCATE: menghapus baris, tabelnya masih ada
-- DROP TABLE: menghapus tabel mau berapapun jumlah barisnya

TRUNCATE halotech.table; -- tabel masih ada
DROP TABLE halotech.table; -- tabel "hilang"

-- note:
-- + kalo datanya banyak? 
--   daripada delete, lebih baik langsung truncate -> lalu input ulang
-- + kalo kolomnya banyak? daripada alter table, 
--   lebih baik langsung drop table -> lalu input ulang