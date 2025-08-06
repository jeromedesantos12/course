# Penjelasan `useEffect` di React.js

`useEffect` adalah sebuah _Hook_ di React yang memungkinkan Anda untuk menjalankan "efek samping" (_side effects_) dari sebuah _functional component_. Efek samping ini adalah operasi apa pun yang memengaruhi sesuatu di luar lingkup fungsi itu sendiri, seperti:

- Pengambilan data dari API (_data fetching_).
- Pengaturan _subscriptions_ (contoh: `setInterval`).
- Memanipulasi DOM secara manual.

`useEffect` menggabungkan fungsionalitas dari beberapa metode siklus hidup (_lifecycle methods_) yang ada di _class components_, yaitu `componentDidMount`, `componentDidUpdate`, dan `componentDidUnmount`.

## Analogi dengan Lifecycle Methods

Berdasarkan komentar di dalam kode, kita bisa memetakan `useEffect` ke dalam 3 siklus hidup utama:

### 1. `componentDidMount` (Setelah Render Pertama Kali)

Untuk menjalankan efek hanya **sekali** setelah komponen pertama kali di-render ke DOM, kita bisa menyediakan _dependency array_ (argumen kedua `useEffect`) yang kosong.

```javascript
useEffect(() => {
  // Kode ini hanya akan berjalan sekali setelah komponen di-render
  console.log("Komponen berhasil di-mount!");
}, []); // <-- Array dependensi kosong
```
