const angka = [1, 2, 3, 4, 5];

angka.forEach(function(element, index, array) {
  console.log('Element:', element); // Nilai elemen
  console.log('Index:', index);     // Posisi elemen
  console.log('Array:', array);     // Array aslinya
  console.log('---');
});
