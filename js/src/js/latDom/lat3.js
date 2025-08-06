const p1Button = document.querySelector(`#p1-button`);
const p2Button = document.querySelector(`#p2-button`);
const resetButton = document.querySelector(`#reset`);
const p1Display = document.querySelector(`#p1-display`);
const p2Display = document.querySelector(`#p2-display`);
const winPointOption = document.querySelector(`#winpoint`);

let winPoint = 0;
let isGameOver = false;

// primitive vs reference di JavaScript!
// * primitive -> number, string, boolean = Salinan nilai (copy) -> ❌ Tidak bisa (tidak berdampak ke luar)
// * reference -> object, array, function = Referensi (alamat) -> ✅ Bisa diubah dari luar

const p1 = { score: 0, display: p1Display };
const p2 = { score: 0, display: p2Display };

// p1Score = 0 → primitif, jadi kalau dikirim lewat parameter, perubahannya tidak berpengaruh ke luar fungsi
// p1 = { score: 0 } → referensi objek, jadi bisa dimodifikasi dari dalam fungsi

const updateScore = (player) => {
  if (!isGameOver && winPoint > 0) {
    player.score += 1;
    if (player.score === winPoint) {
      isGameOver = true;
    }
    player.display.textContent = player.score;
  }
};

const reset = () => {
  isGameOver = false;
  p1.score = 0;
  p2.score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
};

// pake function biasa karena ada this
function point() {
  winPoint = parseInt(this.value);
  reset();
}

// Kenapa harus objek?
// -> Karena kamu memanggil fungsi dan mengirim data lewat parameter
p1Button.addEventListener(`click`, () => updateScore(p1));
p2Button.addEventListener(`click`, () => updateScore(p2));
resetButton.addEventListener(`click`, reset);
winPointOption.addEventListener(`change`, point);
