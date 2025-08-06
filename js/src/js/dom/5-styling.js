const heading = document.querySelector(`h1`);

console.log(heading.style); // versi camel case di js
console.log(heading.style.color); // isinya string kosong walau udh kita input di css kecuali input inline style di HTML (ada isinya)

// modifikasi css
const links = document.querySelectorAll(`a`);

links.forEach((link) => {
  link.style.color = `rgb(0, 108, 134)`;
  link.style.textDecorationColor = `magenta`;
  link.style.textDecorationStyle = `wavy`;
});
