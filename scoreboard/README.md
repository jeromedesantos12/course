# Scoreboard JS DOM

Aplikasi Scoreboard sederhana berbasis JavaScript DOM untuk mencatat skor dua pemain. Aplikasi ini memungkinkan Anda menambah skor untuk masing-masing pemain, mengatur skor kemenangan, dan mereset permainan.

## Fitur
- Menambah skor untuk Player 1 dan Player 2
- Mengatur skor kemenangan (win point)
- Reset skor ke 0
- Otomatis menghentikan permainan saat salah satu pemain mencapai skor kemenangan

## Konsep JavaScript: Primitive vs Reference
- **Primitive**: Tipe data seperti number, string, boolean. Jika dikirim lewat parameter, perubahannya tidak berdampak ke luar fungsi (salinan nilai).
- **Reference**: Object, array, function. Jika dikirim lewat parameter, perubahannya berdampak ke luar fungsi (referensi alamat).
- Pada aplikasi ini, skor pemain disimpan dalam objek agar bisa dimodifikasi dari dalam fungsi.

## Cara Menggunakan
1. Buka file `index.html` di browser.
2. Pilih skor kemenangan (win point) pada dropdown.
3. Tekan tombol Player 1 atau Player 2 untuk menambah skor masing-masing.
4. Permainan akan berhenti otomatis jika salah satu pemain mencapai skor kemenangan.
5. Tekan tombol Reset untuk memulai permainan baru.

## Struktur Kode
- Menggunakan event listener untuk tombol dan dropdown.
- Skor pemain disimpan dalam objek (`p1` dan `p2`) agar bisa dimodifikasi melalui fungsi.
- Fungsi utama:
  - `updateScore(player)`: Menambah skor pemain dan mengecek kemenangan.
  - `reset()`: Mengatur ulang skor dan status permainan.
  - `point()`: Mengatur skor kemenangan berdasarkan pilihan user.

---

Aplikasi ini cocok untuk belajar manipulasi DOM dan konsep dasar JavaScript tentang primitive vs reference.