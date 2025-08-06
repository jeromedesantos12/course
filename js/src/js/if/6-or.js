const prompt = require("prompt-sync")();
const role = prompt("Masukkan role akun: ");

if (role === "admin" || role === "spv") alert("boleh mengaksesnya");
else alert("akses ditolak");
