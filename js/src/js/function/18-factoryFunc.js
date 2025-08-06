// FACTORY FUNCTION
// function sesuai dengan function lain

function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Selamat ${waktu}, ${nama}!`);
  };
}

// let selamatPagi = ucapkanSalam(`Pagi`);
// let selamatSiang = ucapkanSalam(`Siang`);
// let selamatMalam = ucapkanSalam(`Malam`);

// selamatPagi(`Sandhika`);

ucapkanSalam(`pagi`)(`Sandhika`); // Output: Selamat pagi, Sandhika!
