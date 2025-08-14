import React from "react";
import ReactDOM from "react-dom/client";
import foods from "./foods.js"; // file data
import "./css/index.css";

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

function Menu() {
  return (
    <div className="menu">
      <h2>Menu Kita</h2>
      <ul className="foods">
        {/* pake map untuk dapat kembalian array,
        tidak bisa pakai forEach (jsx gagal)! */}
        {foods.map((food, index) => (
          <Food foodObj={food} key={index} />
        ))}
        {/* props dinamis diwakilkan dengan foodObj -> bisa pakai spread operator {...food} */}
        {/* harus pakai key yang unix, bisa dari index atau id */}
      </ul>
    </div>
  );
}

function Food(props) {
  return (
    <li className="food">
      <div>
        <img
          src={props.foodObj.foto}
          alt={props.foodObj.nama}
          width={100}
          height={70}
        />
        <h3>{props.foodObj.nama}</h3>
        <p>{props.foodObj.deskripsi}</p>
        <span>{props.foodObj.harga}</span>
      </div>
    </li>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="order">
        <p>
          {new Date().getFullYear()} Warung Mank Udin | jam buka {10} | jam
          tutup {22}
        </p>
      </div>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
