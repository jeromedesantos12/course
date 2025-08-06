// fetch = promise chaining
fetch(`https://swapi.info/api/people/1`) // default = otomatis menggunakan GET
  .then((res) => {
    if (!res.ok) throw Error(`Could not fetch the data for that resource`);
    return res.json();
  })
  .then((data) => {
    console.log(`json`, data); // .then((data)) = hasil dari res json()
  })
  .catch((err) => {
    console.error(`Error: `, err);
  });

// then -> kalo skenario berhasil
// catch -> kalo skenario gagal

// fetch
// - cara baru melakukan request via js
// - mendukung promise
// - tidak support ie
