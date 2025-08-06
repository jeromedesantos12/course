let barbel = [];
console.log(barbel);
console.log("\n");

// Mnambah dan menghapus Array dari belakang
const prompt = require("prompt-sync")();
const tambah = prompt("Push Array: ");
console.log(barbel.push(Number(tambah)));

const hapus = prompt("Pop Array? (y/n) ");
if (hapus.toLowerCase() === "y") barbel.pop() && console.log(barbel);
else console.log(barbel);
