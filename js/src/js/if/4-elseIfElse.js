const prompt = require("prompt-sync")();
const password = prompt("buat password: ");

// ada 2 kondisi
// if (password.length >= 6) console.log("password valid");
// else console.log("Password minimal 6 karakter");

// if (password.indexOf(" ") === -1) console.log("Password tidak ada spasi");
// else console.log("Password tidak boleh ada spasi");

// digabung jadi bersarang
if (password.length >= 6)
  if (password.indexOf(" ") === -1) console.log("password valid");
  else console.log("Password tidak boleh ada spasi");
else console.log("Password minimal 6 karakter");
