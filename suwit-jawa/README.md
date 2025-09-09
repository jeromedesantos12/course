# Dokumentasi Kode Game Suwit Jawa (Gajah-Orang-Semut)

## Deskripsi
Game Suwit Jawa adalah permainan sederhana berbasis web yang menggunakan karakter Gajah, Orang, dan Semut. Pemain memilih salah satu karakter, komputer memilih secara acak, lalu hasil pertandingan ditampilkan sesuai aturan.

---

## Penjelasan Fungsi

### 1. `getPilihanComputer()`
Menghasilkan pilihan acak komputer antara 'gajah', 'orang', atau 'semut'.
- **Return:**
  - `'gajah'` jika angka acak < 0.34
  - `'orang'` jika angka acak >= 0.34 dan < 0.67
  - `'semut'` jika angka acak >= 0.67

### 2. `getHasil(comp, player)`
Menentukan hasil pertandingan antara pilihan komputer dan pemain.
- **Parameter:**
  - `comp` (string): Pilihan komputer ('gajah', 'orang', 'semut')
  - `player` (string): Pilihan pemain ('gajah', 'orang', 'semut')
- **Return:**
  - `'SERI!'` jika pilihan sama
  - `'MENANG!'` atau `'KALAH!'` sesuai aturan:
    - Gajah mengalahkan Orang
    - Orang mengalahkan Semut
    - Semut mengalahkan Gajah

### 3. `putar()`
Membuat animasi gambar komputer berganti-ganti selama 1 detik sebelum hasil akhir ditampilkan.
- Mengacak gambar dari array `['gajah', 'semut', 'orang']` setiap 100ms selama 1 detik

### 4. Event Listener pada Pilihan Pemain
- Mengambil semua elemen gambar dalam list (`li img`)
- Untuk setiap gambar, menambahkan event click:
  1. Mendapatkan pilihan komputer secara acak
  2. Mendapatkan pilihan pemain dari class gambar yang diklik
  3. Menentukan hasil pertandingan dengan `getHasil`
  4. Menjalankan animasi `putar()`
  5. Setelah 1 detik, menampilkan gambar pilihan komputer dan hasil pertandingan pada elemen `.info`

---

## Alur Kerja Singkat
1. Pemain klik salah satu gambar (gajah/orang/semut)
2. Komputer memilih secara acak
3. Animasi gambar komputer berjalan 1 detik
4. Setelah animasi, gambar komputer dan hasil pertandingan ditampilkan

---

## Catatan
- Pastikan elemen HTML memiliki class yang sesuai (`.img-komputer`, `.info`, dan gambar dengan class `gajah`, `orang`, `semut`)
- Gambar harus tersedia di folder `img/` dengan nama `gajah.png`, `orang.png`, `semut.png`
