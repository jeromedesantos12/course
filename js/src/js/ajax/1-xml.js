// XMLHttpRequest
const req = new XMLHttpRequest();

// kalau berhasil
req.onload = function () {
  const data = JSON.parse(this.responseText);
  console.log(data);
};

// kalau gagal
req.onerror = function () {
  console.log(`Error: `, this);
};

// memasukkan api endpoint + method
req.open(`GET`, `https://swapi.info/api/people/1`, true);
req.send(); // -> proses melakukan request

// XMLHttpRequest
// - cara "original" utk mengirim request via js
// - tdk mendukung promise
// - nama susah diketik
