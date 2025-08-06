const paragraf = document.querySelector(`p`);
console.log(paragraf);
console.log(paragraf.innerText); // teks biasa
console.log(paragraf.textContent); // format menyesuaikan html (\n, \t. \r (spasi) kita ambil)
console.log(paragraf.innerHTML); // murni dari html (spasi dan tag html (semua) kita ambil)
console.log(`\n`);

// mengubah isi paragrafnya
paragraf.innerText = `ini kita ubah paragrafnya`; // re-assign di objeknya
paragraf.innerHTML = `ini kita <b>ubah</b> paragrafnya`; // bisa nambah tag

// --------------------------------------

const links = document.querySelectorAll(`a`);

// mengubah semua isi ancor
links.forEach((link) => (link.innerText = `Saya adalah Link`));
