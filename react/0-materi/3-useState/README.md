# Perbedaan Variabel Biasa dan State di React

## 1. Variabel Biasa vs State

### Variabel Biasa

```js
let search = "";
const changeSearch = (event) => {
  search = event.target.value;
};
```

- Perubahan nilai variabel biasa **tidak** menyebabkan komponen React melakukan re-render.
- React tidak memantau perubahan pada variabel biasa.
- UI tidak akan otomatis diperbarui jika hanya variabel biasa yang berubah.

### State (useState)

```js
import { useState } from "react";
const [search, setSearch] = useState("");
const changeSearch = (event) => {
  setSearch(event.target.value);
};
```

- Perubahan nilai state **akan** menyebabkan komponen React melakukan re-render.
- React memantau perubahan pada state dan props.
- UI akan selalu sinkron dengan nilai state.

## 2. Kenapa React Tidak Memantau Variabel Biasa?

- React hanya memantau **state** dan **props** untuk efisiensi dan prediktabilitas.
- Jika React memantau semua variabel, performa akan turun dan kode jadi sulit dikontrol.
- Dengan hanya memantau state/props, React tahu kapan harus memperbarui UI.

## 3. Contoh Kasus

### Salah (Tidak Akan Update UI)

```js
let search = "";
<input value={search} onChange={changeSearch} />;
```

- Nilai input berubah di DOM, tapi React tidak tahu dan UI tidak sinkron dengan data.

### Benar (UI Selalu Sinkron)

```js
const [search, setSearch] = useState("");
<input value={search} onChange={changeSearch} />;
```

- Setiap perubahan input akan update state dan memicu re-render, sehingga UI selalu sesuai dengan data.

## 4. Kesimpulan

- **Gunakan state** (useState) untuk data yang mempengaruhi tampilan atau logika komponen.
- **Jangan** mengandalkan variabel biasa untuk data yang ingin kamu tampilkan atau proses di React.
- React hanya akan re-render jika ada perubahan pada state atau props.

---

Penjelasan ini penting untuk dipahami agar aplikasi React kamu selalu konsisten dan mudah dipelihara.
