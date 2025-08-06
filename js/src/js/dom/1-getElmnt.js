// ambil id = sort 1 elemen aja
const id = document.getElementById("ID");
// console.log(id);

// ambil tag = ambil 1 html collection
const gambar = document.getElementsByTagName("img");
// console.log(tag);

// const imgArray = tag; // aslinya bukan array
const imgArray = Array.from(tag); // harus konversi dulu
const srcList = imgArray.map((img) => img.src);
console.log(srcList);

// console.log(tag[0]);
// console.log(tag[0].src); // ambil link img

// mengubah semua gambar jadi gambar pertama
// for (let img of gambar) // meskipun masih bisa di iterasi
//   img.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/250px-HTML5_logo_and_wordmark.svg.png`;

// ambil class = ambil 1 html collection
// const kelas = document.getElementsByClassName("CLASS");
