import React from "react";
import ReactDOM from "react-dom/client";
import foods from "./foods.js";
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
  // const foods = [];
  const numFoods = foods.length;

  // ternary
  // beda dengan calibrate, dia ada kondisi elsenya (pembanding)
  // true : false

  return (
    <div className="menu">
      <h2>Menu Kita</h2>
      {numFoods > 0 ? (
        <ul className="foods">
          {foods.map((food, index) => (
            <Food foodObj={food} key={index} />
          ))}
        </ul>
      ) : (
        <p>Kosong, gan! Besok dateng lagi..</p>
      )}
    </div>
  );

  // kalo if else bisa, tapi if elsenya masing-masing akan return jsx
  // biasa masalah kalo ada if else if
  // solusi = a ? b : b ? c : d;
}

function Food(props) {
  return (
    <li className="food">
      <img
        src={props.foodObj.foto}
        alt={props.foodObj.nama}
        width={100}
        height={70}
      />
      <div>
        <h3>{props.foodObj.nama}</h3>
        <p>{props.foodObj.deskripsi}</p>
        <span>{props.foodObj.harga}</span>
      </div>
    </li>
  );
}

function Footer() {
  const jam = new Date().getHours();
  const jamBuka = 12;
  const jamTutup = 22;
  const isOpen = jam >= jamBuka && jam <= jamTutup;

  // if (jam >= jamBuka && jam <= jamTutup) {
  //   alert("Warteg Mang Udin Buka");
  // }

  // ganti if dengan calibrate (&&)
  // hanya menjalankan jika bernilai true
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            {new Date().getFullYear()} Warung Mank Udin | jam buka {jamBuka} |
            jam tutup {jamTutup}
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
