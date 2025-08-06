const button = document.querySelector(`#klick`);
const eventbtn = document.querySelector(`#klick2`);

// harus dimasukkin ke dalam function biar ga jalan duluan
button.onclick = () => console.log(`Glücklich!`);
button.onmouseover = () => console.log(`NEIN!`);

// onclick mengoverwrite nilai lama (variable/wadah) jadi solusi pake eventlistener
eventbtn.addEventListener(`click`, () => alert(`Glücklich!`));
eventbtn.addEventListener(`click`, () => alert(`Der Führer!`));
