function Color(r, g, b) {
  // object baru belum memiliki nama hingga new dipanggil,
  this.r = r; // this, adalah cara merujuk ke object "kosong" tersebut
  this.g = g;
  this.b = b;
} // constructor = fungsi yg pertama kali dijalankan saat ada keyword new

Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

Color.prototype.hex = function () {
  const { r, g, b } = this;
  return `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

// Contoh penggunaan
const warna = new Color(11, 199, 4);
const warna2 = new Color(11, 199, 4);

console.log(warna.rgb === warna2.rgb); //  true, karena mereka mewarisi referensi yang sama dari Warna.prototype.rgb
// berbeda dengan factory function, setiap kali kamu panggil, objek rgb baru dibuat di memori.
// meskipun nilainya sama, referensinya beda! (hasilnya: false)

console.log(warna.rgb()); // rgb(11, 199, 4)
console.log(warna.rgba(0.5)); // rgb(11, 199, 4)
console.log(warna.hex()); // #0bc704

// mengatasi kelemahan factory Function yang ..
// - setiap objek baru akan membawa salinan fungsi .rgb() dan .hex(),
// - yang bisa lebih boros memori kalau buat banyak objek.
