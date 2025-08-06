const prompt = require("prompt-sync")();

function halo(nama) {
  console.log(`Halo, ${nama}`);
} // callback dipisah

function tampilkanPesan(callback) {
  const nama = prompt(`masukkan Nama: `);
  callback(nama); // argumen nama dapat dari prompt
} // ga return apa-apa cuma in console.log

tampilkanPesan(halo);
// halo itu manggil fungsi halo(nama)
// yang seharusnya di dalam argumen tampilkanPesan;
// (callback)

// tampilkanPesan(function halo(nama) {
//   console.log(`Halo, ${nama}`);
// });
