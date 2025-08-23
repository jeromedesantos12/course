# ⏰ CLI Pomodoro Timer

Pomodoro Timer sederhana berbasis Node.js yang berjalan di terminal. Cocok untuk meningkatkan fokus dan produktivitas dengan metode kerja 25 menit dan istirahat 5 menit.

---

## 📦 Fitur

- ⏱️ Timer kerja dan istirahat otomatis
- 🔔 Notifikasi desktop via `node-notifier`
- 🧠 Format waktu `HH:mm:ss` dengan `moment.js`
- 🔁 Loop otomatis antara sesi kerja dan istirahat

---

## 🧠 Alur Eksekusi

1. **Import Modul**

   - `moment` untuk manipulasi waktu
   - `node-notifier` untuk notifikasi desktop

2. **Ambil Argumen Terminal**
   ```bash
   node timer.js 25 5
   ```



- 25 → durasi kerja (menit)
- 5 → durasi istirahat (menit)
- Inisialisasi Status
- isWorking = false → status awal
- remainingTime = 0 → waktu sisa
- Fungsi formattingTime(totalSecond)
- Konversi detik → format "HH:mm:ss" menggunakan moment.duration()
- Tambahkan padStart() agar tampil dua digit
- Fungsi startTimer(duration)
- Toggle status kerja ↔ istirahat
- Konversi menit ke detik
- Jalankan setInterval() tiap detik:
- Kurangi waktu
- Cetak status dan waktu ke terminal
- Jika habis:
- Kirim notifikasi
- Panggil startTimer() lagi dengan durasi lawan
- Start Pertama
- Di akhir script:
  startTimer(POMODORO_DURATION);

📦 Instalasi
npm install moment node-notifier

🧪 Contoh Output
Work : 00:25:00
Work : 00:24:59
...
Break : 00:05:00
Break : 00:04:59
...

🧠 Catatan

- Pastikan kamu menjalankan script dari terminal dengan dua argumen: durasi kerja dan istirahat.
- Timer akan terus berulang otomatis antara kerja dan istirahat.

💡 Credits
Dibuat oleh Jeremy dengan ❤️
Didukung oleh Moment.js dan Node Notifier
