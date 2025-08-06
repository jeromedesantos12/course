const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const angkaDouble = angka.map(function (num) {
  return num * 2;
});
// hasilnya array juga tapi yang sudah di modifikasi
// lebih ringkas daripada pakai for (biasa) harus push satu-satu lagi ke dalam array

// versi arrow function
// const angkaDouble = angka.map((num) => num * 2);

console.log(angkaDouble); // [2, 4, 6, 8, 10, 12, 14, 16, 18]
