const hex = (r, g, b) =>
  `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
const rgb = (r, g, b) => `rgb(${r}, ${g}, ${b})`;

console.log(hex(255, 0, 0)); // menampilkan nilai hex
console.log(rgb(255, 0, 0)); // menampilkan nilai rgb

// sejauh ini sudah benar namun, alangkah baiknya kita bisa langsung memanggil keduanya dalam 1 function
// contoh = color.hex() color.rgb()
