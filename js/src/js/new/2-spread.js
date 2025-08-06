const angka = [1, 2, 3, 4];
console.log(Math.max(angka)); //NaN
console.log(Math.max(...angka)); //4
// isinya sama seperti
// Math.max(1,2,3,4);

// spread operator = mengubah tipe data array menjadi deret value
console.log(...angka); // 1 2 3 4 (otomatis jadi argument dgn (,))
