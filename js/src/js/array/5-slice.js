const member = ["remito", "hima", "kimi", "nana", "keiko"];
console.log(member);
console.log("\n");

const prompt = require("prompt-sync")();
const awal = prompt("Masukkan indeks awal: ");
const akhir = prompt("Masukkan indeks akhir: ");

console.log(member.slice(awal, akhir));
// console.log(member); // array member aslinya tdk mengalami perubahan

// illustrasi splice & slice
// [0, 1, 2, 3, 4, 5] -->  [0, 1, .., .., .., 5] : splice(2,3, " "); --> indeks, jumlah (arah ke kanan), isi
// [0, 1, 2, 3, 4, 5] -->  [.., .., 2, 3, 4., ..] : slice(2,4); --> indeks awal, indeks akhir (yg ga mau dibuang)
