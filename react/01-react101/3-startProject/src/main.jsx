// mirip seperti import cdn di tag script
import React from "react";
import ReactDOM from "react-dom/client";

// karena react berbasis komponen, komponen kita buat sebagai function
// App -> komponen utama di react
function App() {
  // karena kita masih dalam tahap development ada baiknya kita menerapkan strict mode
  // untuk mengecek ada bug atau ada error message lebih rapi dengan format debugging
  // efek samping -> kita akan render 2x tiap komponen (2x pengecekan)
  return <h1>Hello, React</h1>;
}

// bagaimana cara komponen ini muncul dalam browser? kita harus melemparnya ke dalam file index.html
// kita perlu mencari lokasinya (kasus disini id root) menggunakan react-dom
const root = ReactDOM.createRoot(document.getElementById("root"));
// supaya komponennya muncul di dalam html tersebut -> panggil render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); // letakan seperti tag html/xml

// untuk buka di dalam browser ketik perintah
// "npm start" atau "yarn dev"
