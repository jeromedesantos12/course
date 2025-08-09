# Perbedaan Variabel Lokal, useState, dan useRef di React

Panduan ini membahas perbedaan antara variabel lokal (let), useState, dan useRef dalam React, khususnya dalam konteks menyimpan nilai input. Disertai studi kasus, contoh kode, kelebihan, kekurangan, serta tips penggunaannya.

---

## 📌 Studi Kasus: Menyimpan Nilai Input

### ⛔ Cara yang Tidak Dianjurkan (Variabel Lokal)

```jsx
function Search({ onSearchChange }) {
  let search; // Ini variabel lokal, tidak reaktif

  return (
    <>
      <input onChange={(e) => (search = e.target.value)} />
      <button onClick={() => onSearchChange(search)}>Cari</button>
    </>
  );
}
```

**Masalah:**

- 🔁 Tidak reaktif (tidak memicu re-render)
- 🧠 Nilai bisa hilang saat komponen di-render ulang
- ⚠️ Rentan error saat user cepat mengetik lalu klik tombol

---

### ✅ Solusi yang Benar: Pakai useState

```jsx
import { useState } from "react";

function Search({ onSearchChange }) {
  const [search, setSearch] = useState("");

  return (
    <>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={() => onSearchChange(search)}>Cari</button>
    </>
  );
}
```

**Keuntungan:**

- Nilai reaktif
- Komponen tetap sinkron dengan UI
- Aman untuk validasi dan ditampilkan langsung di UI

---

### 🔧 Alternatif: Pakai useRef

```jsx
import { useRef } from "react";

function Search({ onSearchChange }) {
  const searchRef = useRef("");

  const handleClick = () => {
    onSearchChange(searchRef.current);
  };

  return (
    <>
      <input onChange={(e) => (searchRef.current = e.target.value)} />
      <button onClick={handleClick}>Cari</button>
    </>
  );
}
```

**Keuntungan:**

- Tidak memicu re-render
- Nilainya tetap persisten antar render
- Cocok untuk penggunaan non-UI (seperti logika form, fokus, dll.)

---

## 🧠 Perbandingan Singkat

| Cara Simpan Nilai | Reaktif (Render Ulang) | Persisten antar Render | Cocok Untuk              |
| ----------------- | :--------------------: | :--------------------: | ------------------------ |
| let (variabel)    |        ❌ Tidak        |        ❌ Tidak        | Sekali pakai, sementara  |
| useState          |         ✅ Ya          |         ✅ Ya          | UI binding, validasi     |
| useRef            |        ❌ Tidak        |         ✅ Ya          | Akses input tanpa render |

---

## 👀 Catatan

- Gunakan **useState** untuk data yang tampil di UI.
- Gunakan **useRef** untuk menyimpan data yang tidak perlu menyebabkan UI berubah.
- Hindari menggunakan **let** untuk menyimpan nilai antar render.

Semoga membantu dan selamat ngoding! 🚀

Butuh eksperimen gabungan useRef + useState? Tinggal bilang aja! 😎
