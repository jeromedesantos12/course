# Aplikasi Split Bill

Aplikasi ini adalah sebuah alat sederhana untuk mencatat dan membagi tagihan (split bill) dengan teman. Pengguna dapat menambahkan teman, memilih teman, dan memasukkan detail tagihan untuk menghitung siapa yang berhutang kepada siapa.

## Alur Kerja Aplikasi

1.  **Tampilan Awal**: Saat aplikasi dimuat, daftar teman akan ditampilkan di sisi kiri.
2.  **Menambah Teman**: Pengguna dapat mengklik tombol "Tambah Teman" untuk membuka form penambahan teman. Setelah nama dan gambar diisi, teman baru akan muncul di daftar.
3.  **Memilih Teman**: Dengan mengklik tombol "Pilih" pada salah satu teman, form untuk membagi tagihan akan muncul di sisi kanan.
4.  **Membagi Tagihan**: Di form ini, pengguna memasukkan:
    - Total tagihan.
    - Pengeluaran pengguna.
    - Siapa yang membayar tagihan (pengguna atau teman yang dipilih).
5.  **Hasil Kalkulasi**: Setelah form disubmit, aplikasi akan otomatis menghitung selisihnya. Tampilan pada daftar teman akan diperbarui untuk menunjukkan status hutang, misalnya:
    - "Kamu berhutang Rp 50.000 ke Budi"
    - "Siti berhutang Rp 25.000 ke kamu"

## Keterkaitan dengan Kode

Logika aplikasi ini terpusat pada komponen utama dan dipecah ke beberapa komponen yang lebih kecil.

- `src/App.jsx`: Ini adalah komponen induk yang memegang semua _state_ (data) utama, seperti daftar teman dan teman yang sedang dipilih. Semua fungsi logika penting (menambah teman, menghitung tagihan) ditulis di sini dan dioper ke komponen anak sebagai _props_.

- `src/data/friends.json`: Berisi data awal (dummy data) untuk daftar teman saat aplikasi pertama kali dijalankan.

- `src/components/molecules/FriendList.jsx`: Komponen ini bertugas untuk me-render daftar teman. Ia menerima data teman dari `App.jsx` lalu me-mapping setiap teman ke komponen `Friend.jsx`.

- `src/components/atoms/Friend.jsx`: Komponen ini merepresentasikan satu teman dalam daftar. Ia menampilkan nama, gambar, dan status hutang/piutang.

- `src/components/molecules/FormAddFriend.jsx`: Form untuk menambahkan teman baru. Ketika form ini disubmit, ia akan memanggil fungsi yang ada di `App.jsx` untuk memperbarui daftar teman.

- `src/components/molecules/FormSplitBill.jsx`: Form untuk memasukkan detail tagihan. Sama seperti form tambah teman, logika perhitungannya ada di `App.jsx` dan dipanggil saat form ini disubmit.
