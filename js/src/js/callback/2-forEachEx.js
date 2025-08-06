const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

angka.forEach(function (el) {
  if (el % 2 == 0) {
    // modulus: angka 1-9 yang cuma bisa dibagi habis dengan 2
    console.log(el);
  }
});

// versi arrow function + ternary operator
// angka.forEach((el) => (el % 2 == 0 ? console.log(el) : null));
