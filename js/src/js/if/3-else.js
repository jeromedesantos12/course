const prompt = require("prompt-sync")();
const iniHari = prompt("Isikan hari! ").toLowerCase();

if (iniHari === "Senin") console.log("Selamat bekerja kawan!");
else if (iniHari === "Sabtu") console.log("Semoga jangan cepat berlalu!");
else console.log("Yah biasa saja");
