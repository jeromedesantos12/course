# Alur Kerja Aplikasi Kartu Nama Digital

Aplikasi ini adalah sebuah kartu nama digital sederhana yang dibangun menggunakan React. Tujuannya adalah untuk menampilkan profil singkat secara dinamis dari data yang sudah disiapkan.

## Logika dan Kaitan dengan Kode

Struktur aplikasi ini dirancang agar mudah dikelola dengan memisahkan antara data, tampilan (komponen), dan styling.

### 1. Titik Awal Aplikasi

- **File:** `src/main.jsx`
- **Logika:** Ini adalah file pertama yang dieksekusi. Tugasnya hanya satu: me-render komponen utama yaitu `App.jsx` ke dalam `index.html`.

### 2. Komponen Utama (Kontainer)

- **File:** `src/App.jsx`
- **Logika:** Berfungsi sebagai "wadah" utama yang menyusun semua bagian besar dari kartu nama, seperti `Header`, `Identity`, `Highlight`, dan `Biodata`. Komponen ini mengatur tata letak halaman.

### 3. Struktur Komponen (`Atoms` & `Molecules`)

Struktur komponen dipecah berdasarkan metodologi *Atomic Design* untuk mempermudah penggunaan ulang:

- **`src/components/atoms`**:
  - **File Contoh:** `Badge.jsx`, `SocialButton.jsx`
  - **Logika:** Ini adalah komponen terkecil yang tidak bisa dipecah lagi. `SocialButton` hanya untuk menampilkan satu tombol media sosial, dan `Badge` hanya untuk menampilkan satu label/badge.

- **`src/components/molecules`**:
  - **File Contoh:** `Identity.jsx`, `Biodata.jsx`
  - **Logika:** Ini adalah gabungan dari beberapa *atom*. Misalnya, `Identity.jsx` menggabungkan gambar profil, nama, dan beberapa komponen `Badge.jsx` untuk menampilkan status.

### 4. Pengelolaan Data Dinamis

- **Folder:** `src/data/`
- **File Contoh:** `socialMedia.json`, `badgeText.json`
- **Logika:** Semua data seperti daftar media sosial, teks untuk badge, atau biodata **tidak ditulis langsung di dalam komponen**. Sebaliknya, data tersebut disimpan dalam file `.json`. Komponen akan membaca file-file ini dan menampilkannya secara dinamis.
- **Contoh Alur:**
  1. Komponen `Header.jsx` membutuhkan daftar media sosial.
  2. Ia meng-import data dari `socialMedia.json`.
  3. Data tersebut di-looping untuk me-render beberapa komponen `SocialButton.jsx` sesuai jumlah data yang ada.

### 5. Styling

- **File:** `src/css/style.css`
- **Logika:** File ini berisi semua styling untuk mempercantik tampilan komponen.

Secara singkat, alur kerjanya adalah: **`main.jsx` -> `App.jsx` (menyusun layout) -> komponen `molecules` (menampilkan bagian) -> komponen `atoms` (elemen terkecil) -> data dari `src/data` (mengisi konten) -> `style.css` (mempercantik).**
