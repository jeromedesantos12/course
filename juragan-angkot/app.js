var prompt = require("prompt-sync")();

var tambahPenumpang = function (namaPenumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    // kembalikan isi array & keluar dari function
    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // jika ada kursi kosong
      if (penumpang[i] == undefined) {
        // tambah penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
      // jika sudah ada nama yang sama
      else if (penumpang[i] == namaPenumpang) {
        // tampilkan pesan kesalahannya
        console.log(namaPenumpang + " sudah ada di dalam angkot.");
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
      // jika seluruh kursi terisi
      else if (i == penumpang.length - 1) {
        // tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
    }
  }
};
var hapusPenumpang = function (namaPenumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    //tampilkan pesan bahwa angkot kosong, dan tidak mungkin ada penumpang turun
    console.log("Angkot masih kosong.");
    // kembalikan isi array & keluar dari function
    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // jika nama penimpang sesuai
      if (penumpang[i] == namaPenumpang) {
        // hapus penumpang dengan mengubah namanya, menjadi undefined
        penumpang[i] = undefined;
        // kembalikan isi array & keluar dari function
        return penumpang;
        //jika tidak ada nama yang sesuai
      } else if (i == penumpang.length - 1) {
        // tampilkan pesan kesalahannya
        console.log(namaPenumpang + "tidak ada di dalam Angkot.");
        // kembailkan isi array & keluar dari function
        return penumpang;
      }
    }
  }
};

var penumpang = ["pomni", "jax", "natasya", "gingle"];
var selesai = false;

console.log(penumpang, "\n");
var pilihanUser = prompt("Tambah atau Hapus penumpang? (tambah/hapus): ")
  .toLowerCase()
  .trim();

if (pilihanUser == "tambah") {
  while (!selesai) {
    var namaPenumpang = prompt("Masukkan nama penumpang: ")
      .toLowerCase()
      .trim();
    tambahPenumpang(namaPenumpang, penumpang);

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
}
if (pilihanUser == "hapus") {
  while (!selesai) {
    var namaPenumpang = prompt("Masukkan nama penumpang: ")
      .toLowerCase()
      .trim();
    hapusPenumpang(namaPenumpang, penumpang);

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
}
if (pilihanUser != "tambah" && pilihanUser != "hapus") {
  console.log("Input tidak valid!");
  return;
}

console.log("\n", penumpang);
