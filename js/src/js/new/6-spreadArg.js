const nama = [`Alex`, `Bimo`, `Cici`, `Delila`, `Felix`];

const pemenang = (gold, silver, bronze, ...sisa) => {
  console.log(`Medali emas: ${gold}`); // Alex
  console.log(`Medali perak: ${silver}`); // Bimo
  console.log(`Medali perunggu: ${bronze}`); // Cici
  console.log(sisa); // [`Delila`, `Felix`]
};

pemenang(...nama); // spread operator dari isi array
