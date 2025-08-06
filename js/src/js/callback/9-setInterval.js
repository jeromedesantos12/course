const interval = setInterval(() => console.log(Math.random()), 2000);
// menampilkan random angka setiap 2 detik

setTimeout(() => {
  clearInterval(interval); // buat menghentikan proses di detik ke 10
  console.log(`Tschuss!`);
}, 10000);
