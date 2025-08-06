const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// setiap kali dipanggil, parameter element akan berisi nilai elemen saat itu.
function print(element) {
  console.log(element); // isi array
}
// print(1) // element = 1
// print(2) // element = 2
// print(3) // element = 3

// metode forEach pada array angka
angka.forEach(print);

// biasa ditulis jadi callback
// angka.forEach((element) => console.log(element));
