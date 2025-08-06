const array = [];

// perulangan increment
for (let i = 1; i <= 10; i++) array.push(i);
console.log(`perulangan increment: ${array.join(`-`)}`);
array.splice(0, array.length); // reset array

// peulangan genap
for (let i = 2; i <= 10; i += 2) array.push(i);
console.log(`perulangan genap: ${array.join(`-`)}`);
array.splice(0, array.length); // reset array

// perulangan ganjil
for (let i = 1; i <= 10; i += 2) array.push(i);
console.log(`perulangan ganjil: ${array.join(`-`)}`);
array.splice(0, array.length); // reset array

// perulangan decrement
for (let i = 10; i >= 1; i--) array.push(i);
console.log(`perulangan decrement: ${array.join(`-`)}`);
array.splice(0, array.length); // reset array
