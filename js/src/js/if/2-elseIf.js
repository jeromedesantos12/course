const prompt = require("prompt-sync")();
const nilai = Number(prompt("Berapa nilai? "));

if (nilai <= 50) console.log("E");
else if (nilai < 60) console.log("D");
else if (nilai < 70) console.log("C");
else if (nilai < 80) console.log("B");
else if (nilai < 100) console.log("A");
