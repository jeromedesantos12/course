function convertColor(r, g, b) {
  const color = {}; // object sudah ada, sehingga kode dapat bekerja
  color.r = r; // tidak perlu pakai this (tidak ada new juga)
  color.g = g;
  color.b = b;

  color.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  };

  color.hex = function () {
    const { r, g, b } = this;
    return `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  return color;
}

const color = convertColor(255, 0, 0);
console.log(color.hex());
// penulisan dari tutorial, hiraukan (karena kurang clean)
