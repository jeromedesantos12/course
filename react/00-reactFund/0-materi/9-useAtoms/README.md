# Perbandingan `useContext` vs `useAtom`

README ini membahas perbedaan antara `useContext` (React) dan `useAtom` (Jotai) dalam pengelolaan state global di aplikasi React. Cocok untuk developer yang ingin memilih pendekatan state management yang ringan dan efisien.

---

## 🔧 Instalasi

### `useContext`
Sudah tersedia secara bawaan di React, tidak perlu instalasi tambahan.

```bash
npm install react
```

### `useAtom` (Jotai)
Perlu instalasi pustaka Jotai.

```bash
npm install jotai
```

---

## ⚙️ Cara Penggunaan

### `useContext`

```jsx
// Context.js
import { createContext, useContext, useState } from 'react';
const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [value, setValue] = useState(0);
  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

// Component.js
import { useContext } from 'react';
import { MyContext } from './Context';

const Component = () => {
  const { value, setValue } = useContext(MyContext);
  return <button onClick={() => setValue(value + 1)}>{value}</button>;
};
```

### `useAtom`

```jsx
// atoms.js
import { atom } from 'jotai';
export const countAtom = atom(0);

// Component.js
import { useAtom } from 'jotai';
import { countAtom } from './atoms';

const Component = () => {
  const [count, setCount] = useAtom(countAtom);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};
```

---

## ✅ Kelebihan & ❌ Kekurangan

| Aspek           | `useContext`                | `useAtom` (Jotai)                |
|-----------------|----------------------------|----------------------------------|
| ✅ Built-in     | Ya, bagian dari React       | Tidak, perlu instalasi Jotai      |
| ✅ Simpel       | Cocok untuk state global kecil | Sangat simpel dan modular     |
| ❌ Re-render    | Semua komponen dalam Provider bisa re-render | Hanya komponen yang pakai atom terkait |
| ❌ Skalabilitas | Sulit jika banyak context   | Mudah dikelola dengan atom terpisah |
| ✅ Kompatibilitas | Native React              | Perlu tambahan jika pakai SSR atau DevTools |
| ✅ Dokumentasi  | Sangat lengkap              | Dokumentasi cukup jelas dan aktif |

---

## 📌 Kapan Gunakan?

- **Gunakan `useContext` jika:**
  - State globalnya sedikit dan tidak sering berubah.
  - Tidak ingin menambah dependensi.

- **Gunakan `useAtom` jika:**
  - Butuh state global modular dan efisien.
  - Ingin menghindari re-render berlebihan.
  - Aplikasi berskala menengah hingga besar.

---

## 🧠 Catatan Tambahan

- `useContext` bisa digabung dengan `useReducer` untuk manajemen state yang lebih kompleks.
- Jotai mendukung derived state, async atoms, dan devtools, cocok untuk aplikasi modern.

---

Kalau kamu mau versi yang lebih playful atau pakai analogi (misalnya RPG-style atau pakai karakter Shiro 😏), tinggal bilang aja!
