let programming = `JavaScript`;

function typeSafe() {
  let programming = `TypeScript`;
  return programming;
}

// versi arrow function
// const typeSafe = () => `TypeScript`;
console.log(typeSafe()); // TypeScript (variabel di dalam function, hanya bisa diakses melalui argument)
console.log(programming); // JavaScript (variabel di luar function)

// intinya variabel programming di dalam function ga bisa diakses meskipun namanya variabelnya sama!

// function typeSafe() {
//   var programming = `TypeScript`;
//   return programming;
// }

// typeSafe();

// note: kalo narik var dari dalam function ga bisa, beda dari if
// var tidak punya block scope (hanya function scope).
