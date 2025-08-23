var prompt = require("prompt-sync")();
var selesai = false;

while (!selesai) {
  // menangkap pilihan player

  var p = prompt("pilih: gajah, semut, orang ");
  //   if (p !== "gajah" || p !== "semut" || p !== "orang") {
  //     console.log("Input tidak valid!");
  //     break;
  //   }
  if (!["gajah", "semut", "orang"].includes(p)) {
    console.log("Input tidak valid!");
    break;
  }

  // menangkap pilihan computer
  // membangkitkan bilangan random
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  // menentukan rules
  var hasil = "";

  if (p == comp) {
    hasil = "SERI!";
  } else if (p == "gajah") {
    // if (comp == 'orang') {
    // 	hasil = 'MENANG!';
    // } else {
    // 	hasil = 'KALAH!';
    // }

    // operator ternary
    hasil = comp == "orang" ? "MENANG!" : "KALAH!";
  } else if (p == "orang") {
    hasil = comp == "gajah" ? "KALAH!" : "MENANG!";
  } else if (p == "semut") {
    hasil = comp == "orang" ? "KALAH!" : "MENANG!";
  } else {
    hasil = "Memasukkan pilihan yang salah!!";
  }

  // tampilkan hasilnya
  console.log(
    "Kamu memilih : " +
      p +
      " dan komputer memilih : " +
      comp +
      "\nMaka hasilnya : Kamu " +
      hasil
  );

  while (true) {
    let lagi = prompt("Lagi? (y/n): ").toLowerCase().trim();
    if (lagi === "y") {
      break;
    }
    if (lagi === "n") {
      selesai = true;
      break;
    }
    console.log("Input hanya boleh 'y' untuk lanjut atau 'n' untuk selesai.");
  }
}

console.log("terimakasih sudah bermain.");
