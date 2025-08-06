// Function sebagai argumen function lain (Callback Function)

function duaKali(func) {
  func(); // jalakan fungsi 1x
  func(); // jalakan fungsi 2x
}

function lemparDadu() {
  const hasil = Math.floor(Math.random() * 6) + 1;
  console.log(hasil);
}

duaKali(lemparDadu); //  duaKali akan menerima function lemparDadu

// duaKali(lemparDadu());
// ga bisa dikasih () karena itu berarti langsung menjalankan function tersebut,
// dan hasil return-nya dak mengembalikan apa-apa (undefined)
