// Function bernilai balik function (Higher-Order Function)

function hasilnyaAdalahFunction() {
  const rand = Math.random();
  if (rand > 0.1) {
    return function () {
      console.log("Kamu menang!");
    };
  } else {
    return function () {
      console.log("Maaf kamu belum beruntung, silahkan coba lagi");
    };
  }
}

console.log(hasilnyaAdalahFunction()); // isinya function

// cara bukanya (menurut video) masukin ke variabel dulu
const hasil = hasilnyaAdalahFunction();
hasil(); // isinya "Kamu menang!" atau "Maaf kamu belum beruntung, silahkan coba lagi"

// padahal langsung bisa
hasilnyaAdalahFunction()(); // isinya "Kamu menang!" atau "Maaf kamu belum beruntung, silahkan coba lagi"
