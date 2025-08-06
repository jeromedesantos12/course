const klick = document.querySelector(`button`);
const typ = document.querySelector(`input`);

klick.addEventListener(`click`, (e) => {
  console.log(e);
});
typ.addEventListener(`keydown`, (e) => {
  //   console.log(e.key);
  console.log(e.code);
  // switch (e.code) {
  //   case `ArrowUp`:
  //     console.log(`Tombol Arah Atas`);
  //     break;
  //   case `ArrowLeft`:
  //     console.log(`Tombol Arah Kiri`);
  //     break;
  //   case `ArrowRight`:
  //     console.log(`Tombol Arah Kanan`);
  //     break;
  //   case `ArrowDown`:
  //     console.log(`Tombol Arah Bawah`);
  //     break;
  //   default:
  //     console.log(`NEIN!!`);
  // }
});
