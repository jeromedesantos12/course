const prompt = require(`prompt-sync`)();
let input = prompt(`Eh, ngomong dong~ `);

while (true)
  if (input.toLowerCase() !== `stop`)
    input = prompt(`(♡ˊ͈ ꒳ ˋ͈) masih belum kedengerann! `);
  else break;

console.log(`OK!`);
