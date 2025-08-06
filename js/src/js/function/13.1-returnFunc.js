// versi singkat

const hasilnyaAdalahFunction = () =>
  Math.random() > 0.1
    ? () => console.log("Kamu menang!")
    : () => console.log("Maaf kamu belum beruntung, silahkan coba lagi");

console.log(hasilnyaAdalahFunction()); // isinya function
hasilnyaAdalahFunction()(); // harus buka 2x biar tampil
