import React from "react";
import ReactDOM from "react-dom/client";

// komponen adalah sebuah function
// nama function harus uppercase di huruf pertama
function App() {
  // perlu buat container dulu!
  // - parent div punya child food
  // - food bisa digunakan berulang kali
  return (
    <div>
      <Food />
      <Food />
      <Food />
    </div>
  );
}

// root me-render melalui komponen app
// sehingga komponen food harus numpang di dalam app
function Food() {
  return (
    <div>
      <h1>Soto Betawi</h1>
      <p>Soto Betawi dari Jakarta</p>
    </div>
  );
}

// komponen!
// - bisa dibuat 1 komponen 1 file
// - bisa juga buat banyak komponen dalam 1 file
// - bisa komponen di dalam komponen

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
