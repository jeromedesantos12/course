# Alur Kerja Aplikasi Go-Check

Aplikasi ini adalah sebuah daftar periksa (checklist) sederhana yang dibangun menggunakan React. Logika utamanya terpusat pada satu komponen utama yang mengatur semua data dan fungsi.

## Komponen Pusat: `src/App.jsx`

`App.jsx` adalah otak dari aplikasi ini. Di sinilah semua daftar item (`listItems`) disimpan dalam sebuah *state*. Komponen ini juga berisi semua fungsi untuk memanipulasi data tersebut:

1.  `handleAddItem`: Untuk **menambah** item baru ke dalam daftar.
2.  `handleDeleteItem`: Untuk **menghapus** sebuah item dari daftar.
3.  `handleToggleItem`: Untuk **mengubah status** item (dari `selesai` menjadi `belum selesai`, atau sebaliknya).
4.  `handleClearItems`: Untuk **menghapus semua** item di dalam daftar.

## Alur Interaksi Pengguna

Alur kerja aplikasi, dari sudut pandang pengguna dan kode, adalah sebagai berikut:

1.  **Menambah Item Baru**
    - Pengguna mengetik nama item di dalam komponen `Form.jsx`.
    - Saat form di-submit, `Form.jsx` akan memanggil fungsi `handleAddItem` yang ada di `App.jsx` untuk menambahkan item baru ke dalam *state* `listItems`.

2.  **Menampilkan Daftar Item**
    - `App.jsx` mengirimkan data `listItems` ke komponen `CheckList.jsx`.
    - `CheckList.jsx` kemudian menampilkan setiap item satu per satu. Untuk setiap item, ia menggunakan komponen `Item.jsx` (dari `src/components/atoms/Item.jsx`).

3.  **Berinteraksi dengan Item (Menandai & Menghapus)**
    - Setiap komponen `Item.jsx` memiliki tombol untuk menandai selesai (`checkbox`) dan menghapus.
    - Saat tombol `checkbox` ditekan, ia akan memanggil fungsi `handleToggleItem` dari `App.jsx`.
    - Saat tombol hapus ditekan, ia akan memanggil fungsi `handleDeleteItem` dari `App.jsx`.

4.  **Melihat Statistik**
    - `App.jsx` juga mengirimkan data `listItems` ke komponen `Stats.jsx`.
    - `Stats.jsx` akan menghitung jumlah total item, berapa yang sudah selesai, dan persentasenya, lalu menampilkannya kepada pengguna.

Secara singkat, `App.jsx` memegang data, sementara komponen lain hanya bertugas menampilkan data tersebut atau memberi tahu `App.jsx` kapan data itu harus diubah.
