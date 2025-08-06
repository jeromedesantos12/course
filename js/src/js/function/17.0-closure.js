function init(callback, nama) {
  // function tampilNama(nama) {
  //   console.log(nama);
  // } // -> parameter callback dihapus

  // tampilNama(nama);
  callback(nama); // aslinya argumen dari fungsi di dalam fungsi (method)
} // -> lihat file 17-closure.js

init(function tampilNama(nama) {
  console.log(nama);
}, `Galih`); // callback

// function di dalam argumen
