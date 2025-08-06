let barbel = [20, 15, 10, 5];
console.log(barbel);
console.log("\n");

// Mnambah dan menghapus Array dari depan
const prompt = require("prompt-sync")();
const tambah = prompt("Unshift Array: ");
console.log(barbel.unshift(Number(tambah)));

const hapus = prompt("Shift Array? (y/n) ");
if (hapus.toLowerCase() === "y") barbel.shift() && console.log(barbel);
else console.log(barbel);
