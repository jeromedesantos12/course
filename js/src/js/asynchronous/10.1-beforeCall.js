const prompt = require("prompt-sync")();

function tampilkanPesan(callback) {
  const nama = prompt(`masukkan Nama: `);
  callback(nama);
} // ga return apa-apa cuma in console.log

tampilkanPesan(function halo(nama) {
  console.log(`Halo, ${nama}`);
}); // callback
