function tampilNama(nama) {
  console.log(nama);
} // callback dipisah

function init(callback) {
  // callback(`Galih`); //
  callback; // *kalo dia di (hof) argumen hilang, otomatis argumen masuk ke callback
  // bahkan dihapus juga ga ngaruh!
} // -> lihat file 17.0-closure.js

// init(tampilNama); // tampilNama/callback dipisah jadi function lepas
init(tampilNama(`Galih`)); // *muncul disini~
