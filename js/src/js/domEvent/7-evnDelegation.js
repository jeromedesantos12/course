const form = document.querySelector(`#form`);
const input = document.querySelector(`input`);
const list = document.querySelector(`#notes`);

// nambah li
form.addEventListener(`submit`, (e) => {
  e.preventDefault();
  const noteValue = input.value;
  const newList = document.createElement(`li`);
  newList.innerText = noteValue;
  list.classList.add(`container`);
  list.appendChild(newList);
  input.value = ``;
});

// hapus li
// const lists = document.querySelectorAll(`li`);

// bagian li dari js ga bisa dihapus?
// karena kita hanya memilih element yang sudah ready

// lists.forEach((li) => {
//   li.addEventListener(`click`, () => {
//     li.remove();
//   });
// });

// cara mengatasinya?
// menggunakan element parentnya! list (#notes)
list.addEventListener(`click`, (e) => {
  // caranya adalah: kita langsung hapus targetnya
  // e.target.remove();

  // tapi masalahnya element lain juga ikut bakalan hilang,
  // misal ada p juga ikutan hilang

  // solusi-> hapus yang nodeNamenya LI aja
  e.target.nodeName === `LI` && e.target.remove(); // -> mirip ternary tanpa else
});
