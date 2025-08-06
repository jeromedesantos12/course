const orang = {
  nama: `Jeremy`,
  tanggal: 16,
  alamat: `Cirebon`,
};

const barang = {
  judul: `Sepatu`,
  harga: 200000,
  isReady: `true`,
  size: [38, 39, 40, 41, 42],
  location: {
    indonesia: 48,
    singopore: 50,
  },
};

// cara panggilnya
console.log(orang[`nama`]);
console.log(orang.nama); // cara ideal

// cara lain
console.log(barang[`is` + `Ready`]);

// memanggil object di dalam object
console.log(barang.location.indonesia);
console.log(barang.size[0]);
