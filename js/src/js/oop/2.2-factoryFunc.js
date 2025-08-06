function Color(r, g, b) {
  // parameter + function masuk ke objek
  return {
    r,
    g,
    b,
    rgb: function () {
      const { r, g, b } = this;
      return `rgb(${r}, ${g}, ${b})`;
    },
    rgba: function (a = 1.0) {
      const { r, g, b } = this;
      return `rgba(${r}, ${g}, ${b}, ${a})`;
    },
    hex: function () {
      const { r, g, b } = this;
      return `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    },
  };
}

// Contoh penggunaan
const warna = Color(11, 199, 4);
const warna2 = Color(11, 199, 4);

console.log(warna.rgb === warna2.rgb); // false, karena setiap kali kamu panggil, objek rgb baru dibuat di memori.
// meskipun nilainya sama, referensinya beda! (hasilnya: false)

console.log(warna.rgb()); // rgb(11, 199, 4)
console.log(warna.rgba(0.5)); // rgb(11, 199, 4)
console.log(warna.hex()); // #0bc704
