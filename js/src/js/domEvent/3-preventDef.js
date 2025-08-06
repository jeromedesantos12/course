const form = document.querySelector(`#form`);
const input = document.querySelector(`input`);
const list = document.querySelector(`#notes`);

const tambahHashtag = (e) => {
  e.preventDefault();
  const noteValue = `#${input.value}`;
  const newList = document.createElement(`li`);
  newList.innerText = noteValue;
  list.classList.add(`container`);
  list.appendChild(newList);
  input.value = ``;
};

form.addEventListener(`submit`, tambahHashtag);
