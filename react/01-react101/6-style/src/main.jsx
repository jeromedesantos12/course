import React from "react";
import ReactDOM from "react-dom/client";
import sotoImg from "./img/soto.png";
// import "./css/index.css";

// karena css kita import secara global, maka classNamenya bisa digunakan untuk komponen lain

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// STYLING DI KOMPONEN
// - inline style = di dalam jsx
// - internal style = di dalam fungsinya
// - external style = di dalam file css sendiri

function Header() {
  return (
    <h1
      // inline style!
      // - dianggap objek
      // - format camelCase
      style={{
        color: "red",
        fontSize: "50px",
        textTransform: "uppercase",
      }}
    >
      Warteg Mank Udin
    </h1>
  );
}

function Menu() {
  // internal style
  // - tarik style ke fungsi
  // - lalu di jsx ganti jadi variabel
  const style = {
    color: "red",
    fontSize: "50px",
    textTransform: "uppercase",
  }; // kalo udah banyak stylingnya, cara ini juga tidak disarankan!
  // solusi? pakai css external, import file css di atas!

  return (
    <div>
      <h2 style={style}>Menu Kita</h2>
      <Food />
      <Food />
      <Food />
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const jamBuka = 10;
  const jamTutup = 22;

  if (hour < jamBuka || hour > jamTutup) {
    alert("Warteg Mang Udin Tutup");
  } else {
    alert("Warteg Mang Udin Buka");
  }

  return (
    <footer>
      {new Date().getFullYear()}
      Warung Mank Udin( | jam buka {10} | jam tutup {22})
    </footer>
  );
}

function Food() {
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
