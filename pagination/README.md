# Alur Kerja Aplikasi Pagination Sederhana

Aplikasi ini adalah komponen pagination sederhana yang dibuat dengan React. Tujuan utamanya adalah untuk menampilkan konten langkah-demi-langkah (step-by-step) yang dapat dinavigasi menggunakan tombol "Next" dan "Prev".

## Logika dan Keterkaitan Kode

Logika utama aplikasi ini terbagi menjadi beberapa bagian yang saling terhubung:

### 1. State Management (`src/App.jsx`)

- Komponen `App.jsx` adalah induk yang memegang _state_ utama.
- `const [step, setStep] = useState(1);` digunakan untuk melacak langkah (halaman) aktif saat ini.
- `handlePrev()` dan `handleNext()` adalah fungsi untuk mengubah nilai `step`. Logikanya memastikan `step` tidak kurang dari 1 atau lebih dari 3.
- State dan fungsi ini kemudian di-passing sebagai _props_ ke komponen `Component.jsx`.

### 2. Komponen Tampilan (`src/components/Component.jsx`)

- Komponen ini bertanggung jawab untuk menampilkan antarmuka (UI) berdasarkan _props_ yang diterima dari `App.jsx`.
- **Indikator Angka**: Menampilkan angka 1, 2, dan 3. Kelas `active` akan ditambahkan pada angka sesuai dengan nilai `step` saat ini, sehingga memberikan indikasi visual halaman mana yang aktif.
- **Pesan Dinamis**: Menampilkan pesan yang sesuai dengan langkah saat ini. Pesan ini diambil dari file `stepItems.json`.
  ```jsx
  <p className="message">
    Step {step}: {stepItems[step - 1]}
  </p>
  ```
- **Tombol Navigasi**: Tombol "Prev" dan "Next" memanggil fungsi `handlePrev()` dan `handleNext()` yang ada di `App.jsx` untuk mengubah _state_ `step`.

### 3. Data Konten (`src/data/stepItems.json`)

- File ini berisi array JSON yang menyimpan teks untuk setiap langkah.
- Contoh: `["Dream", "Believe", "Achieve"]`
- Memisahkan data dari logika komponen membuatnya lebih mudah untuk diubah atau dikelola di kemudian hari.

Secara singkat, `App.jsx` mengelola logika dan status, `Component.jsx` menangani tampilan, dan `stepItems.json` menyediakan datanya.
