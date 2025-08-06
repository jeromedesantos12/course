const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const angkaGanjil = angka.filter((n) => n % 2 === 1); // ambil angka yang setelah dibagi 2 sisa 1
const angkaGenap = angka.filter((n) => n % 2 === 0); // ambil angka yang setelah dibagi 2 sisa 0

console.log("Angka ganjil:", angkaGanjil);
console.log("Angka genap:", angkaGenap);

// filter memberikan nilai balikan berupa array
// yang sudah dimodifikasi sesuai kondisi yang kita kasih
// jadi ga perlu pake if else lagi di looping
