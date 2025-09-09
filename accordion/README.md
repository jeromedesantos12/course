## Proses Kerja Kode Secara Sederhana

1. Komponen Utama: Accordion (Tirai Besar)

   - Komponen Accordion menerima sebuah array bernama faqs, yang berisi daftar pertanyaan dan jawaban.
   - Di dalam komponen ini, ada sebuah "pengingat" yang disebut isOpen. Pengingat ini berfungsi untuk mencatat nomor tirai mana (atau item) yang sedang terbuka. Awalnya, tidak ada yang terbuka, jadi nilainya null (tidak ada).
   - Komponen ini kemudian memanggil dan membuat tirai kecil satu per satu (AccordionItem) untuk setiap pertanyaan dalam daftar faqs.
   - Saat membuat setiap tirai kecil, ia memberikan beberapa informasi penting ke dalamnya:
     - getOpen: "Pengingat" isOpen dari tirai besar, jadi tirai kecil tahu nomor tirai mana yang sedang terbuka.
     - setOpen: Sebuah "tombol" khusus yang bisa digunakan oleh tirai kecil untuk mengubah status "pengingat" isOpen pada tirai besar.

2. Komponen Anak: AccordionItem (Tirai-tirai Kecil)
   - Setiap AccordionItem adalah satu tirai kecil yang mewakili satu pertanyaan dan jawaban.
   - Ia menerima nomornya sendiri (number) dan "pengingat" getOpen dari tirai besar.
   - Ia kemudian memeriksa: "Apakah nomor saya sama dengan nomor yang tercatat di pengingat getOpen?" Jika jawabannya true, artinya tirai ini sedang terbuka (isOpen).
   - Ada sebuah fungsi bernama handleToogle yang akan dijalankan ketika tirai ini diklik. Fungsi ini adalah bagian paling penting:
     - Jika tirai ini sedang terbuka (isOpen-nya true), ia akan memanggil "tombol" setOpen dengan nilai null. Ini seperti menutup tirai dan bilang ke tirai besar, "Hei, sekarang tidak ada lagi yang terbuka!"
     - Jika tirai ini tidak terbuka, ia akan memanggil "tombol" setOpen dengan nomornya sendiri (number). Ini seperti membuka tirai dan bilang ke tirai besar, "Hei, sekarang saya (nomor ini) yang sedang terbuka!"

## Alur Singkat Saat Pengguna Mengklik Sesuatu

1. Pengguna mengklik salah satu tirai kecil (AccordionItem).
2. Fungsi handleToogle di dalam tirai kecil itu berjalan.
3. Fungsi ini memanggil "tombol" setOpen milik tirai besar (Accordion), mengubah "pengingat" isOpen-nya.
4. Karena "pengingat" isOpen berubah, React akan memperbarui tampilan seluruh tirai, termasuk semua tirai kecil di dalamnya.
5. Setiap tirai kecil akan memeriksa kembali "pengingat" isOpen yang baru. Hanya satu tirai yang nomornya cocok dengan nilai isOpen yang akan menampilkan konten jawabannya. Tirai lainnya akan tetap tertutup.

Proses ini memungkinkan hanya satu item yang bisa terbuka pada satu waktu, persis seperti mekanisme tirai lipat yang efisien.
