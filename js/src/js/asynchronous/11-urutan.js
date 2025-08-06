// 🔧 Fungsi yang mensimulasikan API dengan delay 2 detik
const fakeAPI = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("✅ Data diterima dari server palsu");
    }, 2000); // delay 2 detik
  });
};

// 🧠 Fungsi async pakai await → menunggu data dari API
const ambilData = async () => {
  const res = await fakeAPI(); // ini "pause" hanya di sini
  console.log(res); // setelah 2 detik, baru tampil
};

// 🔍 Kode lain yang tidak bergantung pada hasil API
console.log("🌟 Memulai program...");
ambilData(); // fungsi async dijalankan, tapi tidak nge-block

console.log("🎨 Menggambar elemen UI...");
console.log("📦 Menyiapkan komponen lainnya...");

// ⏳ Kode ini juga jalan duluan
setTimeout(() => {
  console.log("🕐 Proses loading selesai (1 detik)");
}, 1000);

// Ini contoh yang menunjukkan bagaimana await hanya menghentikan eksekusi dalam satu baris/fungsi,
// sementara kode lain (yang tidak bergantung pada hasil Promise itu) tetap bisa berjalan 🚦💡

// 🌟 Memulai program...
// 🎨 Menggambar elemen UI...
// 📦 Menyiapkan komponen lainnya...
// 🕐 Proses loading selesai (1 detik)
// ✅ Data diterima dari server palsu
