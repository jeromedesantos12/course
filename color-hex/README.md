# Aplikasi Color HEX

Aplikasi ini adalah alat bantu sederhana untuk memilih warna, mengatur tingkat kejelasannya (opacity), dan secara otomatis mendapatkan kode warna dalam format HEX, RGB, serta properti CSS-nya.

## Alur Kerja Aplikasi & Kode

Semua logika utama aplikasi ini terletak di dalam file `src/App.jsx` dan bekerja sebagai berikut:

1.  **State Management**: Aplikasi menggunakan *hook* `useState` dari React untuk menyimpan dua nilai penting:
    *   `color`: Menyimpan kode warna HEX yang dipilih (contoh: `#000000`).
    *   `opacity`: Menyimpan nilai kejelasan dari 0 (transparan) hingga 1 (solid).

2.  **Input Pengguna**:
    *   **Pemilih Warna**: Saat Anda memilih warna dari `<input type="color">`, fungsi `handleColorChange` dipanggil untuk memperbarui *state* `color`.
    *   **Slider Opacity**: Saat Anda menggeser `<input type="range">`, fungsi `handleOpacityChange` dipanggil untuk memperbarui *state* `opacity`.

3.  **Tampilan Output**:
    *   **Live Preview**: Sebuah `div` dengan `className="color-box"` menggunakan *inline style* untuk menampilkan warna dan opacity dari *state* secara langsung.
    *   **Informasi Kode**:
        *   **HEX**: Nilai *state* `color` ditampilkan langsung.
        *   **RGB**: Fungsi `getRGB()` dipanggil untuk mengonversi nilai HEX dari *state* `color` ke dalam format `rgb(...)`.
        *   **Opacity**: Fungsi `getOpacityPercentage()` mengubah nilai *state* `opacity` menjadi format persentase yang mudah dibaca.
        *   **CSS**: Fungsi `getCSSCode()` menggabungkan *state* `color` dan `opacity` menjadi baris kode CSS yang siap untuk disalin.

Singkatnya, aplikasi ini secara reaktif merespons input pengguna, memperbarui *state*-nya, dan menggunakan fungsi-fungsi kecil untuk menampilkan data yang sama dalam format yang berbeda.
