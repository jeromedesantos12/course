function lamarKerja() {
  const jabatan = `Programmer`;

  function orangDalam() {
    let kenalan = `Orang dalam bisa memasukkan ${jabatan}`;
    console.log(kenalan);
  }
  orangDalam();
}

// // versi arrow function
// const lamarKerja = () => {
//   const jabatan = `Programmer`;
//   const orangDalam = () =>
//     console.log(`Orang dalam bisa memasukkan ${jabatan}`);

//   orangDalam();
// };

lamarKerja();

// intinya variabel di dalam function ga bisa diakses
// kecuali function dapat akses variabel di luar function
