# Aplikasi Catatan Sederhana

Ini adalah aplikasi web sederhana untuk membuat dan menghapus catatan, dibangun menggunakan React dan Vite.

## Alur Kerja & Kaitan Kode

Logika utama aplikasi ini berada di dalam file `src/App.jsx`.

1.  **Penyimpanan Data**: Semua catatan disimpan dalam sebuah _state_ React bernama `notes` yang merupakan sebuah array.

    ```javascript
    const [notes, setNotes] = useState([]);
    ```

2.  **Menambah Catatan**:

    - Pengguna mengetik catatan baru di kolom input. Setiap ketikan akan disimpan dalam _state_ `inputNote` melalui fungsi `handleInputChange`.
    - Saat tombol "Add" ditekan, fungsi `handleSubmit` akan dipanggil.
    - Fungsi ini menambahkan catatan baru sebagai sebuah objek ke dalam array `notes` dan mengosongkan kembali kolom input.

3.  **Menghapus Catatan**:

    - Di samping setiap catatan, ada tombol "Delete".
    - Saat tombol ini ditekan, fungsi `handleDeleteNote` akan dijalankan.
    - Fungsi ini akan mencari catatan mana yang akan dihapus berdasarkan `id`-nya, lalu membuat ulang array `notes` tanpa catatan tersebut.

4.  **Tampilan Antarmuka (UI)**:
    - Tampilan daftar catatan akan selalu diperbarui secara otomatis setiap kali ada perubahan pada _state_ `notes` (baik saat menambah atau menghapus).
    - Proses ini dilakukan dengan metode `.map()` pada array `notes` untuk me-render setiap item catatan ke dalam list di layar.

## Menjalankan Aplikasi

1.  **Install dependensi:**
    ```bash
    npm install
    # atau
    yarn install
    ```
2.  **Jalankan mode development:**
    ```bash
    npm run dev
    # atau
    yarn dev
    ```
