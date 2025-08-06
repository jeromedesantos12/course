const delayedColorChange = (color, delay) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay)
  );

console.log(
  delayedColorChange(`red`, 1000)
    .then(() => delayedColorChange(`yellow`, 1000))
    .then(() => delayedColorChange(`green`, 1000))
    .then(() => delayedColorChange(`blue`, 1000))
    .then(() => delayedColorChange(`purple`, 1000))
    .then(() => delayedColorChange(`orange`, 1000))
    .then(() => delayedColorChange(`blue`, 1000))
);
