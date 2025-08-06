const prompt = require("prompt-sync")();
const role = prompt("Masukkan role akun: ");

if (role !== "admin") alert("akses ditolak");
else console.log("boleh mengaksesnya");
