// 🧭 Import package dari node_modules
import notifier from "node-notifier"; // untuk notifikasi desktop
import moment from "moment"; // untuk manipulasi dan format waktu

// 🛠️ Ambil durasi kerja & istirahat dari argumen terminal
const argTime = process.argv.slice(2); // abaikan 2 argumen awal: "node", "filename"
const POMODORO_DURATION = argTime[0]; // argumen ke-1 → menit kerja
const BREAK_DURATION = argTime[1]; // argumen ke-2 → menit istirahat

// 💡 Variabel status global
let isWorking = false; // status saat ini: sedang kerja atau istirahat
let remainingTime = 0; // sisa waktu dalam detik

// ⏱️ Fungsi konversi detik → format "HH:mm:ss"
function formattingTime(totalSecond) {
  const duration = moment.duration(totalSecond, "seconds");

  // ubah durasi ke string 2 digit, misalnya 5 → "05"
  const hours = duration.hours().toString().padStart(2, "0");
  const minutes = duration.minutes().toString().padStart(2, "0");
  const seconds = duration.seconds().toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`; // contoh: "00:25:00"
}

// 🔄 Fungsi utama timer: memulai sesi kerja atau istirahat
function startTimer(duration) {
  // toggle status sesi: true ↔ false (kerja ↔ istirahat)
  isWorking = !isWorking;

  // konversi menit ke detik
  remainingTime = duration * 60;

  // mulai countdown per detik
  const timer = setInterval(() => {
    remainingTime--;

    const formattedTime = formattingTime(remainingTime);

    // tampilkan status dan waktu: "Work : 00:24:59" atau "Break : 00:04:30"
    console.log(`${isWorking ? "💼 Work" : "🍵 Break"} : ${formattedTime}`);

    // jika waktu habis → kirim notifikasi & panggil sesi berikutnya
    if (remainingTime === 0) {
      clearInterval(timer);

      // status saat ini tetap pakai isWorking yang sudah di-toggle sebelumnya
      // "MASIH KERJA? ISTIRAHAT SANA!" (begitu juga sebaliknya 😄)
      notifier.notify({
        title: isWorking ? "🍵 Break Time!" : "👏 Good Work!",
        message: isWorking ? "Time to relax ☕" : "Nice focus 🔥",
        sound: true,
        wait: true,
      });

      // panggil kembali fungsi timer dengan durasi lawan dari sesi sekarang
      // "WAKTUNYA ISTIRAHAT!!" (begitu juga sebaliknya 😄)
      startTimer(isWorking ? BREAK_DURATION : POMODORO_DURATION);
    }
  }, 1000); // interval 1 detik
}

// 🟢 Inisialisasi timer pertama: mulai dari sesi kerja
startTimer(POMODORO_DURATION);
