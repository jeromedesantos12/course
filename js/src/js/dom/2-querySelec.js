// querySelector = bebas ambil apapun
const gambar = document.querySelector(`img`); // cuma ambil elemen pertama
const gambarAll = document.querySelectorAll(`img`); // semua elemen

// begitu juga utk id = #id
// begitu juga utk class = .class

// bisa juga turunan = p a
// ancor di ddalam paragraf

// bisa di loop juga
for (let img of gambarAll)
  img.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/250px-HTML5_logo_and_wordmark.svg.png`;

// cari pake attribut
const alt = document.querySelector(`img[alt="Logo HTML"]`);

console.log(alt);
