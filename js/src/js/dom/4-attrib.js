const gambar = document.querySelector(`img`);

// console.log(gambar);
// console.log(gambar.attributes); // buat cek isi attrib

// ambil nilai attrib
// console.log(gambar.src);
// console.log(gambar.alt);

// ubah attribut
gambar.src = `https://img.icons8.com/ios_filled/512/github.png`;
gambar.alt = `Gambar baru`;

// nambah attribut
gambar.class = `isian class`; // ga bisa nambahin dengan cara objek
gambar.setAttribute(`class`, `isian class`);

console.log(gambar.getAttribute(`class`)); // ambil nilai attribut

// hasil tampilannya sama
console.log(gambar.alt);
console.log(gambar.getAttribute(`alt`));

// hasil tampilannya sama tapi pake pengaturan dikit
const gambar = document.querySelector(`img`);
console.log(gambar.className); // ga bisa pake class, karena class itu properti milik js (biar ga kembar)
console.log(gambar.getAttribute(`class`));
