// const { penjumlahan, pengurangan, perkalian, pembagian } = require(`./rumus`);
// const rumus = require(`./rumus`); // bisa langsung destructing maupun tidak

// ES6 (async)
import { penjumlahan, pengurangan, perkalian, pembagian } from "./rumus.js";
// import rumus from "./rumus.js"; // -> harus export default

const a = 10;
const b = 2;

// console.log(rumus.penjumlahan(a, b));
console.log("Penjumlahan:", penjumlahan(a, b));
console.log("Pengurangan:", pengurangan(a, b));
console.log("Perkalian:", perkalian(a, b));
console.log("Pembagian:", pembagian(a, b));
