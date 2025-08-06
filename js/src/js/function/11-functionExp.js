// function perpangkatan(nilai) {
//   return nilai * nilai;
// }
// // kadang kita mau menyimpan fungsi ke dalam variabel
// const hasil = perpangkatan(5);

// bisa disingkat dengan function expressions
const hasil = function (nilai) {
  return nilai * nilai;
};

// versi arrow function
// const hasil = (nilai) => nilai * nilai;

console.log(hasil(2));

// Alasan utama kenapa function expression disimpan ke variabel:
// 1. Agar fungsi tersebut bisa dipanggil menggunakan nama variabelnya.
// 2. Memungkinkan fungsi digunakan sebagai nilai (value), misal dikirim sebagai argumen ke fungsi lain (callback), disimpan dalam array/objek, atau dikembalikan dari fungsi lain.
// 3. Mendukung konsep "first-class function" di JavaScript, di mana fungsi diperlakukan seperti data.
