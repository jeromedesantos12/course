# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Alur Kerja Aplikasi Accordion

Aplikasi ini adalah implementasi sederhana dari komponen accordion di React. Tujuan utamanya adalah untuk menampilkan daftar pertanyaan dan jawaban di mana hanya satu item yang bisa terbuka pada satu waktu.

### Struktur Komponen

- **`App.jsx`**: Komponen utama yang menjadi titik masuk aplikasi.
- **`Accordion.jsx`**: Komponen induk yang mengatur logika state untuk membuka dan menutup item accordion.
- **`AccordionItem.jsx`**: Komponen anak yang menampilkan satu pertanyaan dan jawaban.
- **`faqs.json`**: File data yang berisi daftar pertanyaan dan jawaban dalam format JSON.

### Logika dan Alur Data

1.  **Inisialisasi**:
    - Komponen `Accordion` mengambil data `faqs` sebagai *props*.
    - Di dalam `Accordion`, sebuah *state* bernama `isOpen` diinisialisasi dengan nilai `null`. *State* ini berfungsi untuk melacak item mana yang sedang terbuka.

2.  **Render Item**:
    - `Accordion` melakukan *mapping* (perulangan) pada data `faqs`.
    - Untuk setiap item dalam `faqs`, komponen `AccordionItem` dirender.
    - Setiap `AccordionItem` menerima beberapa *props* penting:
        - `number`: Nomor indeks item, untuk identifikasi.
        - `getOpen`: Nilai dari *state* `isOpen` di `Accordion`.
        - `setOpen`: Fungsi untuk memperbarui *state* `isOpen` di `Accordion`.

3.  **Interaksi Pengguna**:
    - Di dalam `AccordionItem`, ada fungsi `handleToggle` yang dijalankan saat pengguna mengklik sebuah pertanyaan.
    - Fungsi ini memeriksa apakah item yang diklik saat ini sudah terbuka (yaitu, jika `getOpen === number`).
        - **Jika sudah terbuka**: `handleToggle` akan memanggil `setOpen(null)`, yang memberitahu `Accordion` untuk menutup semua item.
        - **Jika tertutup**: `handleToggle` akan memanggil `setOpen(number)`, yang memberitahu `Accordion` untuk membuka item dengan nomor tersebut.

4.  **Pembaruan Tampilan**:
    - Ketika `setOpen` dipanggil, *state* `isOpen` di komponen `Accordion` diperbarui.
    - Perubahan *state* ini memicu React untuk me-*render* ulang komponen `Accordion` dan semua `AccordionItem` di dalamnya.
    - Setiap `AccordionItem` kembali memeriksa nilai `getOpen`. Hanya item yang nomornya cocok dengan `getOpen` yang akan menampilkan jawabannya, sementara yang lain akan tetap tersembunyi.

Dengan alur ini, `Accordion` bertindak sebagai "pemegang kendali" tunggal (*single source of truth*) untuk status terbuka/tertutup, memastikan hanya satu item yang bisa aktif pada satu waktu.