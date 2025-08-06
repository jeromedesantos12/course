function teriak(msg) {
  try {
    console.log(msg.toUpperCase()); // mengubah string menjadi huruf besar
  } catch (error) {
    console.log(error); // pesan error dari sistem
    console.log(`Silahkan masukkan tipe string pada argument teriak()`); // pesan error custom
  }
}

teriak(123); // KESALAHAN
teriak(`Hallo! ich bin Jeremy`); // masih jalan

// kegunaan try catch:
// 1. agar proses setelah error masih bisa berjalan (ga di break dulu)
// 2. agar menghandle pesan error yang lebih informatif
