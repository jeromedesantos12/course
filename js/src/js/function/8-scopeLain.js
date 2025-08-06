let programming = `JavaScript`;

function typeSafe() {
  programming = `TypeScript`;
  return programming;
}

// versi arrow function
// const typeSafe = () => (programming = `TypeScript`);

console.log(typeSafe()); // TypeScript (variabel di dalam function, hanya bisa diakses melalui argument)
console.log(programming); // TypeScript (variabel di luar function, tapi udah diubah dari dalam function)

// intinya variabel programming di dalam function ga bisa diakses meskipun namanya variabelnya sama!
// kecuali memang variabelnya diubah di dalam function
// contoh: programming = `TypeScript`, dia ubah variabel yang sebelumnya (tanpa mendeskripsikan let/const)
