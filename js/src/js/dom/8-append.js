const newImage = document.createElement(`img`); // menambahkan element img
newImage.src = `https://media.tenor.com/UW6vxndZpfMAAAAM/cat-meme.gif`; // menambahkan attribut src pada tag img

document.body.appendChild(newImage); // menambahkan element di bawah element lainnya (secara default)
newImage.classList.add(`rounded`); // menambahkan class rounded

// appendChild -> element html (innerHTML)
// append -> cuma text, element HTML dianggap text <span> ini elemen span </span> (innerText)

const paragraf = document.querySelector(`p`);
const span = document.createElement("span");
// paragraf.append(`<span> ini elemen span </span>`); // tag ga bisa dibaca
paragraf.append(`ini elemen span`, span); // bisa tapi tag taruh parameter belakang

// ------------------------------------

const h2 = document.createElement(`h2`); // menambahkan element h2
h2.append(`Ini element tambahan dari JavaScript`); // menambahkan text ke dalam element h2

const h1 = document.querySelector(`h1`); // mengambil element h1
h1.insertAdjacentElement(`afterend`, h2); // menambahkan element h2 setelah h1

console.log(h1);
console.log(h2);

// element.after(newElement); // di sebelah setelah
// element.before(newElement); // di sebelah sebelum
