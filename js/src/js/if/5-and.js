const prompt = require("prompt-sync")();
const password = prompt("buat password: ");

// ditambah kondisinya
// if (password.length >= 6)
//   if (password.indexOf(" ") === -1)
//     if (/[!@#$%^&*]/.test(password)) console.log("Password valid");
//     else console.log("Password harus mengandung karakter khusus");
//   else console.log("Password tidak boleh ada spasi");
// else console.log("Password minimal 6 karakter");

// di konversi ke logika and
if (
  password.length >= 6 &&
  password.indexOf(" ") === -1 &&
  /[!@#$%^&*]/.test(password)
)
  console.log("Password valid");
else console.log("Password tidak valid");

// atau kalo mau output lengkap
// if (
//   password.length >= 6 &&
//   !password.includes(" ") &&
//   /[!@#$%^&*]/.test(password)
// )
//   console.log("Password valid");
// else if (password.length < 6) console.log("Password minimal 6 karakter");
// else if (password.includes(" ")) console.log("Password tidak boleh ada spasi");
// else console.log("Password harus mengandung karakter khusus");
