const nama = [`Alex`, `Bimo`, `Cici`, `Delila`, `Felix`];
const [gold, silver, bronze, ...sisa] = nama;

console.log(sisa); // [ 'Delila', 'Felix' ]
