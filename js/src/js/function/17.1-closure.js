function tampilNama(nama) {
  console.log(nama);
} // callback dipisah

function init(callback, nama) {
  callback(nama);
} // -> lihat file 17.0-closure.js

init(tampilNama, `Galih`); // tampilNama/callback dipisah jadi function lepas
