const animals = [`cat`, `deer`, `hog`, `koala`, `zebra`];

// for (let i = 0; i < animals.length; i++) console.log(i, animals[i]);
for (animal of animals) console.log(animal); // hanya bisa kasih value
console.log(`\n`);

// untuk mendapatkan pasangan [index, value]
for (const [index, value] of animals.entries()) console.log(index + 1, value);

// note: for of khusus untuk array
