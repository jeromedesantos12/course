import express from "express";

// inisialisasi express
const app = express();
const port = 8080;

// kalo app digunakan -> tampilkan console.log
// app.use(() => console.log(`We got request`));

// respond akan di render sesuai format yang ditulis
// app.use((req, res) => res.send(`<h1>We got request</h1>`));
app.use((req, res) =>
  res.send({
    nama: "hima",
    role: "saintis",
    senjata: "alat temuannya",
  })
);

// jalanin server
app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
