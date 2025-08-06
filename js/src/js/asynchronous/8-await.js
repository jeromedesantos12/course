const delayedColorChange = (color, delay) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay)
  );

// console.log(
//   delayedColorChange(`red`, 1000)
//     .then(() => delayedColorChange(`yellow`, 1000))
//     .then(() => delayedColorChange(`green`, 1000))
//     .then(() => delayedColorChange(`blue`, 1000))
//     .then(() => delayedColorChange(`purple`, 1000))
//     .then(() => delayedColorChange(`orange`, 1000))
//     .then(() => delayedColorChange(`blue`, 1000))
// );

// chain method
const changeColor = async () => {
  await delayedColorChange(`red`, 1000); // await = bagian yellow ga akan bekerja sebelum red berhasil dijalankan
  await delayedColorChange(`yellow`, 1000); // karena balik lagi, masing-masing punya delay 1000 ms
  await delayedColorChange(`green`, 1000);
  await delayedColorChange(`blue`, 1000);
  await delayedColorChange(`purple`, 1000);
  await delayedColorChange(`orange`, 1000);
  await delayedColorChange(`black`, 1000);
  return `das Ende`;
};

// changeColor(), then((res) => alert(res));

// bisa chain method lagi
printRainbow = async () => {
  await changeColor(); // fungsi await = melakukan jeda sebelum proses selanjutnya berjalan
  console.log(`das Ende! von printRainbow`);
};

printRainbow();
