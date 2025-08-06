import express from "express";
import { Pool } from "pg";

// inisiasi pg
const db = new Pool({
  user: `jeremy`,
  password: `123`,
  host: `localhost`,
  port: 5432,
  database: `postgres`,
  max: 20,
});

// inisialisasi express
const app = express();
const port = 3000;

// inisialisasi hbs
app.set("view engine", "hbs"); // Pakai Handlebars engine
app.set("views", "./src/views"); // Lokasi folder views
app.use("/assets", express.static("./src/assets")); // Path untuk file statis
app.use(express.urlencoded({ extended: false })); // Baca data dari form POST

// buat routes
app.get(`/`, home);
app.get(`/portfolio/:id`, portfolioDetail);
app.get(`/contact`, contact); // render

app.post(`/contact`, handleContact); // handle submit data

// jalanin server
app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);

// variable global
let data = [
  {
    id: 1,
    title: "project 1",
  },
  {
    id: 2,
    title: "project 2",
  },
  {
    id: 3,
    title: "project 3",
  },
]; // object untuk render ke get home

// get home
function home(req, res) {
  res.render(`index`, { data }); // kirim nilai ke halaman dalam bentuk objek
}

// get contact
async function contact(req, res) {
  const { rows } = await db.query(`SELECT * FROM public.contact`); // nunggu proses berjalan
  res.render(`contact`, { rows });
}

// post contact (async)
async function handleContact(req, res) {
  const { name, password, action } = req.body;
  const query = await db.query(
    `INSERT INTO public.contact (name, password) VALUES ('${name}', '${password}')`
  ); // nunggu proses berjalan

  // // kondisi kita punya 2 tombol
  // switch (true) {
  //   case action === `submit`:
  //     accounts.push({ name, password }); // simpan input ke dalam accounts
  //     break;
  //   case action === `delete`:
  //     accounts.pop(); // buang data dari belakang
  //     break;
  // }

  // refresh halaman
  res.redirect(`/contact`);
}

function portfolioDetail(req, res) {
  let { id } = req.params;
  const result = data.find((element) => element.id == id); // cari data berdasarkan id
  res.render(`portfolio`, { result });

  // res.render(`portfolio`, { data: data[id - 1] });
  // - Ini akan berhasil hanya jika urutan array persis seperti id
  // - ini salah, karena data bisa aja berubah atau dihapus
}
