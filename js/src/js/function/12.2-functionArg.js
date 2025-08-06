// versi penjumlahan dengan parameter

const duaKali = (func, ...args) => {
  func(...args);
  func(...args);
};

const tambah = (a, b) => console.log(a + b);

duaKali(tambah, 7, 4); // Output: 11\n11
