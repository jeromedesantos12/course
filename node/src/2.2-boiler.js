// Tulis teks biasa
fs.writeFileSync("hello.txt", "Halo dunia!");

// Tulis JSON
const user = { name: "Remito", level: "pro" };
fs.writeFileSync("user.json", JSON.stringify(user, null, 2));

// Tulis buffer
const buf = Buffer.from("Binary content");
fs.writeFileSync("binary.dat", buf);

// Tulis angka ASCII (A, B, C)
const arr = new Uint8Array([65, 66, 67]);
fs.writeFileSync("ascii.txt", arr);

// String kosong ("") di akhir writeFileSync() itu bukan sekadar hiasan
// dia punya fungsi penting tergantung konteksnya!

// - 📁 Membuat file kosong jika belum ada.
// - 🧹 Mengosongkan isi file jika sudah ada—karena default flag-nya adalah 'w' (write & truncate).
