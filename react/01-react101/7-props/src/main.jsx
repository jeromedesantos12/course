import React from "react";
import ReactDOM from "react-dom/client";
import Image from "./img";
import "./css/index.css";

// props (properties) = antar komponen dapat berbagi data, sama seperti parameter
// bagaimana data-data yang kita kirim dalam komponen food bisa dinamis

// props itu read-only!
// - immutable = tidak bisa di re-assign ulang
// - hanya bisa di update lewat parent components
// - one way data flow = parent -> child

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Warteg Mank Udin</h1>;
}

// parent component
// menu akan mengirimkan data (props) ke dalam komponen food
// "seperti menulis attribut dalam file html"
function Menu() {
  return (
    <div className="menu">
      <h2>Menu Kita</h2>
      <Food
        nama="Nasi Goreng"
        deskripsi="Nasi yang digoreng dengan bumbu rempah khas Indonesia."
        harga={25000}
        foto={Image.soto}
        stok={Math.random() >= 0.5 ? true : false}
      />
      <Food
        nama="Sate Ayam"
        deskripsi="Sate ayam yang ditusuk dan dibakar, disajikan dengan bumbu kacang."
        harga={15000}
        foto={Image.sate}
        stok={Math.random() >= 0.5 ? true : false}
      />
      <Food
        nama="Soto Betawi"
        deskripsi="Soto ayam yang disajikan dengan kuah bening dan ayam khas betawi."
        harga={15000}
        foto={Image.soto}
        stok={Math.random() >= 0.5 ? true : false}
      />
    </div>
  );
}

// child component
// perlu memberikan argument props
function Food(props) {
  return (
    <div className="food">
      <div>
        <img src={props.foto} alt={props.nama} width={100} height={70} />
        <h3>{props.nama}</h3>
        <p>{props.deskripsi}</p>
        <span>{props.harga}</span>
      </div>
    </div>
  );
}

function Footer() {
  // const hour = new Date().getHours();
  // const jamBuka = 10;
  // const jamTutup = 22;

  // if (hour < jamBuka || hour > jamTutup) {
  //   alert("Warteg Mang Udin Tutup");
  // } else {
  //   alert("Warteg Mang Udin Buka");
  // }

  return (
    <footer>
      {new Date().getFullYear()} Warung Mank Udin | jam buka {10} | jam tutup{" "}
      {22}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
