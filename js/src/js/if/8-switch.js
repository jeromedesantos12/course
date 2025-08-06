const prompt = require("prompt-sync")();
const balonku = prompt("Warna balon? ");

switch (balonku) {
  case "merah":
    console.log("warna merah");
    break;
  case "hijau":
    console.log("doooor");
    break;
  default:
    console.log("bukan balon saya");
}
