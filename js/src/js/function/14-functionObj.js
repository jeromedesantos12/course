// Method adalah: suatu function yang di definisikan ke dalam object
// Contoh: Math.random() -> object: Math, property: random, value: function

// function biasa
function myFun() {
  console.log(`Hi`);
  return `Hello`;
}

// object isi function = method
const myMath = {
  perkalian: function (x, y) {
    return x * y;
  },
};

// versi arrow function
// const myMath = { perkalian: (x, y) => x * y };

console.log(myMath.perkalian(2, 3));
