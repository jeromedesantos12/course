const axios = require("axios").default; // CommonJS

axios
  .get(`https://swapi.info/api/people/1`)
  .then((res) => {
    console.log(res.data);
    // ga perlu "return res.json()" -> langsung data
  })
  .catch((err) => {
    console.log(`Error: `, err.message);
  });
