import express from "express";

// inisialisasi express
const app = express();
const port = 8080;

// buat routing -> utk mengirim string
app.get(`/`, (req, res) => res.send(`This is homepage`)); // localhost:8080/
app.get(`/cats`, (req, res) => res.send(`This is cats page`)); // localhost:8080/cats

// routing buat parameter dinamis
app.get(`/blog/:judul`, (req, res) => {
  const { judul } = req.params; // localhost:8080/blog/:judul
  res.send(`Kita sedang melihat postingan dengan judul: ${judul}`);
});
app.get(`/search`, (req, res) => {
  const { q } = req.query; // localhost:8080/search?q=keyword
  q
    ? res.send(`<h1>Search keyword: ${q}</h1>`) // true
    : res.send(`<h1>Tidak ada data yang dicari</h1>`); // false
});

// routing buat 404
app.get(`/{*any}`, (req, res) => res.send(`Page not found`)); // path -> /about, /foo/bar
// app.get(`*catchall`, (req, res) => res.send(`Page not found`)); // path -> about, foo/bar

// ga akan bentrok karena methodnya beda (post)
app.post(`/cats`, (req, res) => res.send(`This is cats page from post`)); // (testing pakai thunder client)

// jalanin server
app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
