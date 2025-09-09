// NAMPILIN GAMBAR POKEMON!
const container = document.querySelector(`#container`);
const baseImgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;

// buat looping dari 1-500
for (let i = 1; i <= 500; i++) {
  const pokeBall = document.createElement(`div`); // buat element "div" baru
  const imgPokemon = document.createElement(`img`); // buat element "img" baru
  const label = document.createElement(`span`); // buat element "span" baru

  pokeBall.classList.add(`pokemon`); // menambahkan class pokemon ke dalam "div" -> <div class="pokeBall"></div>
  imgPokemon.src = `${baseImgUrl}${i}.png`; // mengisi src dengan url ke dalam "img" -> <img src="https://raw.github.../1.png" />

  label.innerText = `#${i}`; // mengisi text dengan nilai index ke dalam "span" -> <span>#1</span>
  // label.append(`#${i}`); // sama

  container.appendChild(pokeBall); // menambahkan "div.pokeBall" ke dalam "container"
  pokeBall.appendChild(imgPokemon); // menambahkan "imgPokemon" jadi ke dalam "div.pokeBall"
  pokeBall.appendChild(label); // menambahkan "label" ke dalam "div.pokeBall"

  // GAMBAR POKEMON INTERAKTIF!
  imgPokemon.classList.add(`round`); // tambahin lingkaran + border transparan

  const cekHasil = () => {
    const allImg = document.querySelectorAll(`.pokemon img`); // ambil semua elemen "round"
    const allClicked = Array.from(allImg).every((img) =>
      img.classList.contains(`roundClick`)
    ); // jika semua elemen "round" sudah di klik, tampilkan alert
    if (allClicked)
      alert(`ദ്ദി ( ᵔ ᗜ ᵔ ) SELAMAT!!\nKamu berhasil menangkap semua pokemon!`);
  };

  pokeBall.addEventListener(`click`, () => {
    imgPokemon.classList.toggle(`roundClick`); // tambahin toggle lingkaran + border
    cekHasil(); // cek hasil
  });
}

// hasil!
// --------------------
// <container>
//    <div class="pokeBall">
//       <img src="https://raw.github.../1.png" />
//       <span>#1</span>
//    </div> ...500x
// <container>

// + interaktif
// --------------------
// <container>
//    <div class="pokeBall">
//       <img src="https://raw.github.../1.png" class ="round roundClick"/>
//       <span>#1</span>
//    </div> ...500x
// <container>
