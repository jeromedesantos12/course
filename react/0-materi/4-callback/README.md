# Perbandingan React Props vs Vanilla JavaScript Callback

Dokumen ini membandingkan dua pendekatan umum dalam pengiriman dan pemanggilan fungsi: menggunakan **Props di React** dan **Callback di Vanilla JavaScript**.

---

## 💡 Contoh Kode

### ✅ React

```jsx
// Komponen Induk
function Homepage() {
  const handleSearchChange = (term) => console.log(term);
  return <Search onSearchChange={handleSearchChange} />;
}

// Komponen Anak
function Search({ onSearchChange }) {
  return <input type="text" onChange={(e) => onSearchChange(e.target.value)} />;
}
```

---

### ✅ Vanilla JavaScript

```js
// Fungsi dengan parameter callback
function doSearch(callback) {
  const term = prompt("Ketik kata pencarian:");
  callback(term);
}

// Pemanggilan
doSearch((value) => {
  console.log("User mencari:", value);
});
```

---

### Bagaimana Callback Bekerja?

- Saat doSearch dipanggil, callback diisi dengan fungsi yang kita kirimkan (misal value => console.log(value)).
- Di dalam doSearch, baris callback(term) memanggil fungsi itu sambil memberikan term sebagai argumennya.
- Fungsi callback lalu menerima term sebagai parameter lokalnya dan bisa melakukan apa pun dengan nilai itu

---

## 📝 Penjelasan

- **React Props**: props adalah cara untuk mengoper data dan fungsi ke komponen anak. Mereka bersifat read-only dan biasanya digunakan bersama JSX serta event handler seperti `onChange`, `onClick`, dll.
- **Vanilla Callback**: callback adalah fungsi yang dikirim sebagai argumen ke fungsi lain, lalu dipanggil secara manual dengan data tertentu. Umumnya digunakan dalam logika sinkron/asinkron.
- **Persamaan**: Keduanya memakai pola _"terima fungsi, lalu panggil dengan data"._
- **Perbedaan**: React lebih deklaratif dan terikat pada lifecycle component, sedangkan callback di JS murni prosedural.

---

> Dibuat oleh: ✨ [Nama Kamu] ✨ – Untuk belajar dan dokumentasi pribadi.
