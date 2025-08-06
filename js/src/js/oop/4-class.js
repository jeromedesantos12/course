class Color {
  // constructor = fungsi yg pertama kali dijalankan saat ada keyword new
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    // (this) property obj color : dapat dari parameter
  }
  // method = fungsi berada dalam suatu object
  rgb() {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  }
  rgba(a = 1.0) {
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
  hex() {
    const { r, g, b } = this;
    return `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  // di dalam class method sudah otomatis di masuk ke prototype
}

const warna = new Color(11, 199, 4);

console.log(warna.rgb()); // rgb(11, 199, 4)
console.log(warna.rgba(0.5)); // rgb(11, 199, 4)
console.log(warna.hex()); // #0bc704
