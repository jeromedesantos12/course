const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const nama = [`Remito`, `Rinki`, `Volksen`, `H5`, `Hou`, `Kimi`];

const spread = [...angka, ...nama];
const concat = angka.concat(angka, nama);

console.log(spread); // hasilnya sama
console.log(concat);
