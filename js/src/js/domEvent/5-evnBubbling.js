const button = document.querySelector(`#changeColor`);
const container = document.querySelector(`#container`);

button.addEventListener(`click`, (e) => {
  container.style.backgroundColor = generateRandomColor();
  // akan memberhentikan proses selanjutnya -> event si parent elemennya = container
  e.stopPropagation();
});

container.addEventListener(`click`, () => {
  container.style.color = generateRandomColor();
});

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};
