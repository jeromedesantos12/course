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

// parent components
// kita pecah kondisinya jadi komponen sendiri biar ga kepanjangan
function Footer() {
  const jam = new Date().getHours();
  const jamBuka = 12;
  const jamTutup = 22;
  const isOpen = jam >= jamBuka && jam <= jamTutup;

  if (isOpen) {
    return <FooterOpenHour jamBuka={jamBuka} jamTutup={jamTutup} />;
  } else {
    return <FooterCloseHour jamBuka={jamBuka} jamTutup={jamTutup} />;
  }

  // return isOpen ? (
  //   <FooterOpenHour jamBuka={jamBuka} jamTutup={jamTutup} />
  // ) : (
  //   <FooterCloseHour jamBuka={jamBuka} jamTutup={jamTutup} />
  // );
}

// children components (isOpen)
function FooterOpenHour(props) {
  return (
    <footer className="footer">
      <div className="order">
        <p>
          {new Date().getFullYear()} Warung Mank Udin | jam buka {props.jamBuka}{" "}
          | jam tutup {props.jamTutup}
        </p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

// children components (isClose)
function FooterCloseHour(props) {
  return (
    <footer className="footer">
      <div className="order">
        <p>
          Maaf gan masih tutup. Coba dateng lagi sekitar jam buka{" "}
          {props.jamBuka} | jam tutup {props.jamTutup}.
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
