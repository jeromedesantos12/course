function init(nama) {
  function tampilNama(nama) {
    console.log(nama);
  }
  tampilNama(nama); // dipanggil
} // function di dalam function

init(`Galih`);

// shorthand -> immediately invoke function
// const init = (
//   () => (nama) => console.log(nama)
// )();
// init(`Galih`);
// -> kondisi kalo si tampilNama(nama) di return
