let angka = [1, 2, 3, 4, 5];

// Filter angka yang lebih besar dari 2
let hasilFilter = angka.filter((num) => num > 2);
console.log(hasilFilter); // [3, 4, 5]

// Map untuk mengalikan setiap angka dengan 2
let hasilMap = angka.map((num) => num * 2);
console.log(hasilMap); // [2, 4, 6, 8, 10]

console.log(`\n`);

// fungsi filter mengharapkan callback yang mengembalikan nilai boolean (true/false)
// untuk menentukan apakah elemen tersebut dimasukkan ke array hasil.
let saring = angka.filter((num) => num * 0);
console.log(saring); // [] semua 0 alias false
