const member = ["remito", "hima", "kimi", "nana", "keiko"];
console.log(member);
console.log("\n");

const prompt = require("prompt-sync")();
const indeks = prompt("Masukkan indeks array: ");
const jumlah = prompt("Masukkan jumlah elemen yang ingin diganti: ");
const isi = prompt("Masukkan isi elemen yang ingin diganti: ");

member.splice(indeks, jumlah, isi) && console.log(member);

// misal:
// indeks: 1, jumlah: 2, isi: "hello"
// array splice: ["hima", "kimi"];
// array asli: ["remito", "hello", "nana", "keiko"];

// illustrasi splice & slice
// [0, 1, 2, 3, 4, 5] -->  [0, 1, .., .., .., 5] : splice(2,3, " "); --> indeks, jumlah (arah ke kanan), isi
// [0, 1, 2, 3, 4, 5] -->  [.., .., 2, 3, 4., ..] : slice(2,4); --> indeks awal, indeks akhir (yg ga mau dibuang)
