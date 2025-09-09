# Warteg Mank Udin

Aplikasi ini adalah sebuah tampilan menu sederhana untuk sebuah warung makan fiktif bernama "Warteg Mank Udin". Aplikasi ini dibuat menggunakan React.

## Alur Kerja Aplikasi

Alur kerja aplikasi ini cukup sederhana dan berpusat pada beberapa komponen utama:

1.  **`src/main.jsx`**: Ini adalah file utama yang menjadi titik masuk aplikasi. Di sinilah komponen `App` utama di-render ke dalam DOM. File ini juga mengimpor data makanan dari `src/foods.js` dan file CSS.

2.  **`src/foods.js`**: File ini berisi sebuah array (daftar) dari objek-objek makanan. Setiap objek merepresentasikan satu item menu dan memiliki properti seperti `nama`, `deskripsi`, `harga`, `foto`, dan `stok`. Status `stok` diatur secara acak untuk mensimulasikan ketersediaan item.

3.  **Komponen `App` (`src/main.jsx`)**: Komponen ini adalah komponen induk yang menyusun tata letak dasar halaman, yang terdiri dari tiga bagian: `Header`, `Menu`, and `Footer`.

4.  **Komponen `Menu` (`src/main.jsx`)**: Komponen ini bertanggung jawab untuk menampilkan daftar menu makanan.

    - Ia mengimpor data `foods` dari `src/foods.js`.
    - Kemudian, ia melakukan iterasi (looping) pada setiap item di dalam data `foods` dan me-render komponen `Food` untuk setiap item tersebut.
    - Jika tidak ada makanan dalam data (array `foods` kosong), ia akan menampilkan pesan bahwa menu kosong.

5.  **Komponen `Food` (`src/main.jsx`)**: Komponen ini menampilkan detail dari satu item makanan, termasuk gambar, nama, deskripsi, dan harga.

    - Tampilannya akan beradaptasi berdasarkan status `stok`. Jika `stok` bernilai `false` (atau habis), item tersebut akan diberi gaya visual yang berbeda (kelas `sold-out`) dan label harga akan diganti dengan tulisan "Habis".

6.  **Komponen `Footer` (`src/main.jsx`)**: Komponen ini menampilkan informasi jam buka dan tutup warung.
    - Ia memeriksa jam saat ini untuk menentukan apakah warung sedang buka atau tutup.
    - Tampilan `Footer` akan berubah tergantung pada status buka/tutup tersebut, dengan menampilkan pesan yang sesuai.

Secara singkat, aplikasi ini mengambil data menu dari sebuah file JavaScript, menampilkannya dalam bentuk daftar, dan secara dinamis menyesuaikan tampilan berdasarkan ketersediaan stok dan jam operasional.
