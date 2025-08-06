const orang = {
  nama: `Jeremy`,
  tanggal: 16,
  alamat: `Cirebon`,
};

// merubah data object
orang[`nama`] = `John`;
orang.tanggal = 2; // cara ideal

// menambah data ke dalam object
orang[`gender`] = `Pria`;
orang.hobi = `Koding`; // cara ideal

//eksekusi
console.log(orang); // { nama: 'John', tanggal: 2, alamat: 'Cirebon', gender: 'Pria', hobi: 'Koding' }
