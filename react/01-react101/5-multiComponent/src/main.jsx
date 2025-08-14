import React from "react";
import ReactDOM from "react-dom/client";
import sotoImg from "./img/soto.png";

function App() {
  // bisa pakai tag pembuka <> dan penutup </> atau langsung saja <Header />
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// component bisa dibuat arrow function, tapi bisa makan memori karena membuat variabel baru
function Header() {
  return <h1>Warteg Mank Udin</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Menu Kita</h2>
      <Food />
      <Food />
      <Food />
    </div>
  );
}

function Footer() {
  // kita bisa menulis sintax js di komponen
  const hour = new Date().getHours();
  const jamBuka = 10;
  const jamTutup = 22;

  // memungkinkan juga menulis logic di komponen
  if (hour < jamBuka || hour > jamTutup) {
    alert("Warteg Mang Udin Tutup");
  } else {
    alert("Warteg Mang Udin Buka");
  }

  // kita harus menulis sintax js dalam kurung kurawal jika di dalam jsx
  return (
    <footer>
      {new Date().getFullYear()}
      Warung Mank Udin( | jam buka {10} | jam tutup {22})
    </footer>
  );
}

function Food() {
  // ada baiknya (biar dinamis) isi attribut jsx kasih kurung kurawal:
  // - kalo data int
  // - kalo import gambar
  return (
    <div>
      <img src={sotoImg} alt="" width={100} height={70} />
      <h2>Soto Betawi</h2>
      <p>Soto Betawi dari Jakarta</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
