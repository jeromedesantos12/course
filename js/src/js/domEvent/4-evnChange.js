const input = document.querySelector(`input`);

input.addEventListener(`change`, (e) => {
  console.log(`Nilai Berubah`);
}); // cahnge -> tiap kali nilai berubah di dalam value input
// enter, shift, ctrl dll ga dibaca!

input.addEventListener(`input`, (e) => {
  console.log(`Nilai berhasi diinput`);
}); // masak (ada 5 karakter)
// enter, shift, ctrl dll ga dibaca!

// tujuan:
// utk menghindari saat kita tidak mengetik dari keyboard
// * copy-paste -> ga dibaca
// * atas-bawah (history input) -> ga dibaca

// kebalikan dari keyUp-keyDown
// semua inputan dibaca
