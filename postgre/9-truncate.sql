SELECT * FROM halotech.table;

-- DELETE 
-- + bisa pake kondisi 
-- + butuh scanning tiap baris di satu table

-- TRUNCATE 
-- + ga bisa pake kondisi
-- + ga butuh scanning, faster operation

TRUNCATE halotech.table;
TRUNCATE halotech.table WHERE user_id = 1; -- ini salah