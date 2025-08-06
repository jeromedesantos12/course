// const lemparDadu = (sisi = 6) => Math.floor(Math.random() * sisi) + 1;

// contoh kesalahan
const sapa = (msg = `Selamat bekerja`, name) => console.log(`${name} ${msg}`);
sapa(`Jeremy`); // `Jeremy` dibaca punya argument si msg
// hasil: undefined Jeremy
