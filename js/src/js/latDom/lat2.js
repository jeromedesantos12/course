const button = document.querySelector(`button`);
const span = document.querySelector(`span`);
const pallete = document.querySelector(`.pallete`);

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

button.addEventListener(`click`, () => {
  const newColor = generateRandomColor();
  pallete.style.backgroundColor = newColor;
  pallete.style.transition = "all 0.5s ease-in";
  span.classList.add("visible");
  span.innerText = newColor;
  //   document.body.style.background = newColor;
});
