# Logika Pembaruan State (Update Logic)

Dokumen ini menjelaskan cara kerja logika untuk memperbarui sebuah item dalam _state management_ aplikasi, yang umum digunakan pada pattern seperti Redux atau React Context.

## Kode

Berikut adalah potongan kode yang bertanggung jawab untuk proses pembaruan:

```javascript
case "UPDATE":
  // 1. Mencari index dari item yang akan diubah berdasarkan ID.
  const updatableExpenseIndex = state.findIndex(
    (expense) => expense.id === action.payload.id
  );

  // 2. Mengambil data lengkap dari item yang akan diubah.
  const updatableExpense = state[updatableExpenseIndex];

  // 3. Membuat item baru dengan menggabungkan data lama dan data baru.
  const updateItem = { ...updatableExpense, ...action.payload.data };

  // 4. Membuat salinan dari state agar tidak mengubah state asli.
  const updatedExpenses = [...state];

  // 5. Mengganti item lama dengan item baru di dalam salinan state.
  updatedExpenses[updatableExpenseIndex] = updateItem;

  // 6. Mengembalikan state yang sudah diperbarui.
  return updatedExpenses;
```

## Penjelasan Cara Kerja

Kode ini berjalan ketika ada perintah (`action`) dengan tipe `"UPDATE"`. Tujuannya adalah untuk memperbarui satu item di dalam sebuah daftar (`state`) tanpa mengubah data aslinya secara langsung (prinsip imutabilitas).

Prosesnya adalah sebagai berikut:
1.  **Mencari Index**: Mencari posisi (index) dari item yang akan diubah di dalam `state` berdasarkan `id` yang dikirim melalui `action.payload.id`.
2.  **Mengambil Item Lama**: Mengambil data lengkap dari item yang akan diubah menggunakan index yang sudah ditemukan.
3.  **Membuat Item Baru**: Membuat sebuah item baru (`updateItem`) dengan cara menggabungkan seluruh properti dari item lama dengan data baru dari `action.payload.data`.
4.  **Menyalin State**: Membuat salinan dari seluruh `state` awal untuk memastikan `state` yang asli tidak termodifikasi.
5.  **Mengganti Item**: Mengganti item pada index yang spesifik di dalam *salinan state* dengan `updateItem` yang baru.
6.  **Mengembalikan State Baru**: Mengembalikan salinan `state` yang sudah diperbarui sebagai `state` yang baru.

## Contoh Penggunaan

Berikut adalah contoh data untuk mengilustrasikan prosesnya.

### Data Awal (`state`)
Ini adalah daftar pengeluaran kita sebelum ada perubahan.
```javascript
const state = [
  { id: 'e1', description: 'Sepatu Lari', amount: 850000 },
  { id: 'e2', description: 'Kopi Susu', amount: 22000 },
  { id: 'e3', description: 'Bensin', amount: 150000 }
];
```

### Perintah/Action (`action`)
Ini adalah "perintah" untuk mengubah data item dengan `id: 'e2'`.
```javascript
const action = {
  type: 'UPDATE',
  payload: {
    id: 'e2',
    data: {
      description: 'Kopi Susu Gula Aren', // Nilai baru
      amount: 25000                     // Nilai baru
    }
  }
};
```

### Hasil Akhir
Setelah kode dieksekusi dengan `state` dan `action` di atas, `state` yang baru akan menjadi:
```javascript
[
  { id: 'e1', description: 'Sepatu Lari', amount: 850000 },
  { id: 'e2', description: 'Kopi Susu Gula Aren', amount: 25000 }, // <- Data diperbarui
  { id: 'e3', description: 'Bensin', amount: 150000 }
]
```
