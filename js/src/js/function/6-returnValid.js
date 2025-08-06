function jumlahkan(a = 0, b = 0) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Error: Input harus berupa angka";
  } else {
    return a + b;
  }
}

// versi arrow function dan ternary operation
// const jumlahkan = (a = 0, b = 0) =>
//   typeof a !== "number" || typeof b !== "number" // condition
//     ? "Error: Input harus berupa angka" // true
//     : a + b; // false

console.log(jumlahkan(1 + 2));

// ternary operation
// kondisi ? nilaiJikaTrue : nilaiJikaFalse

// jika bercabang (if else)
// kondisi1 ? hasil1
//   : kondisi2 ? hasil2
//   : hasilDefault;
