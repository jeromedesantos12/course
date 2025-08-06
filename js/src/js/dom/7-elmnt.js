const textBold = document.querySelector(`b`);
const paragraf = document.querySelector(`p`);
const logo = document.querySelector(`.logo`);

// parentElement
console.log(textBold.parentElement); // <p>...</p>
console.log(textBold.parentElement.parentElement); // <section>...</section>

// children
console.log(paragraf.children); // [b, a, span]
console.log(paragraf.children[2]); // <span>internet</span>

// elementSibling
console.log(logo.previousSibling); // #text (\n atau \t) -> format apa yang ditulis di sebelumnya
console.log(logo.nextSibling); // #text (\n atau \t) -> format apa yang ditulis di setelahnya
console.log(logo.previousElementSibling); // null -> ngambil elementnya aja di sebelumnya
console.log(logo.nextElementSibling); // <img src="https://images..." alt="Logo CSS" class="logo"> -> ngambil elementnya aja di setelahnya
