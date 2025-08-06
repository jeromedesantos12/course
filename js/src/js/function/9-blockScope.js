let tinggi = 8;

if (tinggi === 8) {
  var panjang = 10;
}
console.log(`panjang: `, panjang); // var bisa diakses

for (let index = 0; index < 10; index++) {
  panjang = 0;
}
console.log(`panjang: `, panjang); // var berubah

// ---------------------------> karena itu var tidak aman

if (tinggi > 5) {
  let lebar = 10;
}
console.log(`lebar: `, lebar); // let ga bisa diakses

for (let index = 0; index < 10; index++) {
  const indexNumber = index;
  panjang = 0;
}
console.log(`index: `, indexNumber); // const ga bisa diakses
