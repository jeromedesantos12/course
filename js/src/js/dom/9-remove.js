const firstList = document.querySelector(`li`);

firstList.parentElement.removeChild(firstList); // harus ke parent elementnya dulu baru hapus childnya

const image = document.querySelector(`img`);
image.remove(); // bisa langsung

console.log(firstList);
