const prompt = require(`prompt-sync`)();
let guess = prompt(`Masukkan password: `);

// guess akan terus berjalan sampai pembandingnya (`Pass123`) bernilai true
while (guess !== `Pass123`) guess = prompt("Masukkan password: ");
console.log(`Selamat datang! ⸜(｡˃ ᵕ ˂ )⸝♡`);

// const prompt = require('prompt-sync')();
// for (let guess = prompt('Masukkan password: '); guess !== 'Pass123'; guess = prompt('Masukkan password: '));
// console.log('Selamat datang! ⸜(｡˃ ᵕ ˂ )⸝♡');
