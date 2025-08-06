function jumlahkan(a = 0, b = 0) {
  const total = a + b;
  return total; // mengembalikan nilai total dari a + b
  console.log(`Selesai`); // setelah return proses ga dijalankan
}

// versi arrow function
// note: arrow function sudah mengembailkan nilai tanpa harus ditulis returnya terlebih dahulu

// const jumlahkan = (a = 0, b = 0) => a + b;

const jumlah = jumlahkan(1 + 2); // -> punya simpan nilai kembalian 3
console.log(jumlah);
