# Panduan Penggunaan `FlatList` di React Native

Dokumen ini memberikan ringkasan tentang cara menggunakan komponen `FlatList` dengan berbagai jenis struktur data, yaitu array of objects dan array of primitives.

## Struktur Wajib `FlatList`

Setiap implementasi `FlatList` memerlukan tiga properti utama:

```javascript
<FlatList
  data={data}
  renderItem={renderItem}
  keyExtractor={keyExtractor}
/>
```

- `data`: Sumber data (array) yang akan ditampilkan.
- `renderItem`: Fungsi yang merender setiap item dalam data.
- `keyExtractor`: Fungsi yang menghasilkan kunci unik untuk setiap item.

---

## 1. `FlatList` dengan Array of Objects (Struktur Terbaik)

Ini adalah praktik terbaik dan paling umum digunakan karena struktur data yang jelas dan kunci yang andal.

**Contoh Data:**

```javascript
const data = [
  { id: "1", title: "Belajar" },
  { id: "2", title: "Ngoding" },
];
```

**Implementasi:**

```javascript
<FlatList
  data={data}
  renderItem={({ item }) => <Text>{item.title}</Text>}
  keyExtractor={(item) => item.id}
/>
```

**Catatan:**
- `item` di dalam `renderItem` adalah sebuah **objek**.
- `keyExtractor` mengambil `id` unik dari setiap objek.

---

## 2. `FlatList` dengan Array Primitif (String, Number)

Metode ini bisa digunakan jika data Anda adalah array sederhana yang berisi nilai-nilai primitif.

**Contoh Data:**

```javascript
const data = ["apel", "pisang", "jeruk"];
```

**Implementasi:**

```javascript
<FlatList
  data={data}
  renderItem={({ item }) => <Text>{item}</Text>}
  keyExtractor={(item) => item}
/>
```

**Catatan:**
- `item` di dalam `renderItem` adalah **nilai itu sendiri** (misalnya, "apel").
- `keyExtractor` menggunakan nilai item sebagai kunci.
- **Penting:** Pastikan setiap nilai dalam array adalah **unik**. Jika ada duplikat, pertimbangkan untuk menggabungkannya dengan `index` untuk membuat kunci yang unik (`(item, index) => item + index`).

---

## Solusi Jika Tidak Ada ID Unik

Terkadang, data yang Anda terima tidak memiliki `id` yang unik. Berikut adalah beberapa solusi berdasarkan kondisi data:

| Kondisi Data                      | Solusi `keyExtractor`                                  | Catatan                                      |
| --------------------------------- | ------------------------------------------------------ | -------------------------------------------- |
| **Bisa mengubah data**            | Tambahkan `id` unik pada setiap objek.                 | Solusi terbaik untuk konsistensi.            |
| **Nilai dalam data unik**         | Gunakan nilai itu sendiri (`(item) => item`).          | Cocok untuk array primitif.                  |
| **Data statis & tidak berubah**   | Gunakan `index` (`(item, index) => index.toString()`). | **Opsi terakhir**, hindari jika data dinamis. |

---

## ❌ Praktik yang HARUS Dihindari

Jangan pernah menggunakan fungsi yang menghasilkan nilai acak untuk `keyExtractor`.

**Contoh Buruk:**

```javascript
// JANGAN LAKUKAN INI
<FlatList
  ...
  keyExtractor={() => Math.random().toString()}
/>
```

**Alasan:**
- `key` akan berubah setiap kali komponen di-render ulang.
- React akan kesulitan mengidentifikasi item, menyebabkan **bug pada UI**.
- Performa akan menurun drastis karena React harus menghancurkan dan membuat ulang elemen DOM.

---

## 🎯 Cheat Sheet untuk `keyExtractor`

Gunakan panduan ini untuk menentukan `keyExtractor` yang tepat.

| Tipe Data Sumber               | Contoh `keyExtractor`                  |
| ------------------------------ | -------------------------------------- |
| Object dengan `id`             | `(item) => item.id`                    |
| Object tanpa `id`              | `(item) => item.field1 + item.field2`  |
| Array `string` (unik)          | `(item) => item`                       |
| Array `number` (unik)          | `(item) => item.toString()`            |
| Array dengan nilai duplikat    | `(item, index) => item + index`        |

> ## 🧠 **Ingat Kalimat Ini:**
>
> *"FlatList butuh key yang **UNIK** & **STABIL**, bukan cantik."*