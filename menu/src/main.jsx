import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { foods } from "./foods.js";
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

  // karena jsx hanya boleh ada 1 elemen pembungkus tiap element, maka:
  // bungkus element pakai <React.Fragment> atau <> </>
  return (
    <div className="menu">
      <h2>Menu Kita</h2>
      {numFoods > 0 ? (
        <>
          <p>
            Aneka makanan Indonesia yang disajikan oleh warteg mang udin sebagai
            pemenuhan makanan kesehatan yang diperlukan dalam kehidupan
            sehari-hari.
          </p>
          <ul className="foods">
            {foods.map((food, index) => (
              // <Food foodObj={food} key={index} />
              // bisa juga destructing parameter = ({foto, nama, deskripsi, harga}, index) => {}
              <Food {...food} key={index} /> // atau kirim spread operator
            ))}
          </ul>
        </>
      ) : (
        <p>Kosong, gan! Besok dateng lagi..</p>
      )}
    </div>
  );
}

function Food({ foto, nama, deskripsi, harga, stok }) {
  return (
    <li className={`food ${!stok ? "sold-out" : ""}`}>
      <img src={foto} alt={nama} width={100} height={70} />
      <div>
        <h3>{nama}</h3>
        <p>{deskripsi}</p>
        <span>{stok ? harga : "Habis"}</span>
      </div>
    </li>
  );
}

// parent components
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
}

// children components (isOpen)
function FooterOpenHour({ jamBuka, jamTutup }) {
  // destructing props ada 2 cara
  // - lewat parameter = ({ jamBuka, jamTutup }) => {}
  // - lewat variabel = const { jamBuka, jamTutup } = props;
  return (
    <footer className="footer">
      <div className="order">
        <p>
          {new Date().getFullYear()} Warung Mank Udin | jam buka {jamBuka} | jam
          tutup {jamTutup}
        </p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

// children components (isClose)
function FooterCloseHour({ jamBuka, jamTutup }) {
  return (
    <footer className="footer">
      <div className="order">
        <p>
          Maaf gan masih tutup. Coba dateng lagi sekitar jam buka {jamBuka} |
          jam tutup {jamTutup}.
        </p>
      </div>
    </footer>
  );
}

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
