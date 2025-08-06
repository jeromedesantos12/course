const h1 = document.querySelector(`h1`);

h1.getAttribute(`class`);
// h1.setAttribute(`class`, `border-danger`);
// h1.setAttribute(`class`, `bg-info`); // menimpa

// solusi langsung tambahkan kedua class (pake spasi)
h1.setAttribute(`class`, `border-danger bg-info`);

// solusi lain
console.log(h1.classList); // [`border-danger`, `bg-info`];
h1.classList.add(`text-white`); // bukan array, jangan di push!
h1.classList.remove(`bg-info`);
h1.classList.contains(`border-danger`); // true
