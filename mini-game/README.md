# Analisis Logika Game Tebak Angka

Dokumen ini menganalisis masalah umum yang terjadi pada aplikasi game tebak angka di React Native, di mana logika game gagal saat menggunakan batas dinamis untuk menghasilkan angka acak.

## Konteks Masalah

- Sebuah fungsi `generateRandomBetween(min, max, exclude)` digunakan untuk menghasilkan tebakan lawan.
- Tebakan awal, yang dihasilkan dengan rentang _hardcoded_ `generateRandomBetween(1, 100, userNumber)`, berfungsi dengan benar.
- Game gagal masuk ke status "game over" saat angka acak dihasilkan menggunakan variabel global untuk rentang (`generateRandomBetween(minBoundary, maxBoundary, userNumber)`).

## Penyebab Umum dan Solusinya

### 1. Batas (`minBoundary`/`maxBoundary`) Tetap Ada di Seluruh Game

**Masalah:**
Saat `minBoundary` dan `maxBoundary` dideklarasikan dalam lingkup modul (di luar komponen), nilainya diperbarui saat pengguna memberikan petunjuk ("LOWER" atau "GREATER"). Jika nilai-nilai ini tidak di-reset saat game baru dimulai (yaitu, saat komponen `GameScreen` dipasang kembali), nilai-nilai tersebut mempertahankan statusnya dari game sebelumnya. Hal ini dapat menyebabkan `initialGuess` berada di luar rentang yang valid (1-100) atau logika tebakan yang tidak akan pernah bisa bertemu dengan `userNumber`.

**Solusi:**
Reset `minBoundary` dan `maxBoundary` di awal setiap game baru. Cara yang baik untuk melakukan ini adalah di dalam hook `useEffect` yang terpicu saat komponen dipasang atau `userNumber` berubah.

```javascript
useEffect(() => {
  minBoundary = 1;
  maxBoundary = 100;
}, [userNumber]);
```

Untuk solusi yang lebih kuat dan menghindari render ulang yang tidak perlu, simpan batasan dalam `useRef`.

### 2. Menggunakan Variabel Standar vs. State/Refs React

**Masalah:**
Menggunakan `let minBoundary` global menciptakan variabel yang nilainya dibagikan di semua render dan instance komponen. Hal ini dapat dengan mudah menyebabkan masalah sinkronisasi dengan siklus hidup komponen React, terutama saat fitur seperti Fast Refresh aktif.

**Solusi:**
Praktik yang lebih aman adalah mengelola batasan menggunakan `useRef`. Hook ini memastikan bahwa nilainya terikat pada instance komponen dan tetap ada di seluruh render tanpa menyebabkannya.

```javascript
const minRef = useRef(1);
const maxRef = useRef(100);
```

Di awal game baru, reset nilainya:
`minRef.current = 1;`
`maxRef.current = 100;`

Kemudian, gunakan ref ini untuk menghasilkan angka acak:
`generateRandomBetween(minRef.current, maxRef.current, userNumber)`

### 3. Parameter `exclude` Menyebabkan Perulangan Tanpa Batas

**Masalah:**
Jika pengguna memberikan petunjuk yang salah, rentang (`minBoundary`, `maxBoundary`) mungkin menyusut secara tidak benar, hanya menyisakan satu angka yang mungkin—angka yang ditentukan dalam parameter `exclude`. Hal ini akan menyebabkan `generateRandomBetween` berulang tanpa batas, sehingga game tidak dapat dilanjutkan.

**Solusi:**
Validasi petunjuk pengguna. Sebelum memperbarui batasan, periksa apakah petunjuk tersebut logis.

- Jika `currentGuess` kurang dari `userNumber`, tetapi pengguna menekan "LOWER", tampilkan peringatan dan jangan perbarui batasnya.
- Jika `currentGuess` lebih besar dari `userNumber`, tetapi pengguna menekan "GREATER", lakukan hal yang sama.

### 4. Urutan Operasi yang Salah untuk Tebakan Awal

**Masalah:**
Jika `initialGuess` dihitung _sebelum_ batasan di-reset, maka `initialGuess` akan dihasilkan menggunakan nilai batasan yang kedaluwarsa (usang) dari game sebelumnya.

**Solusi:**
Pastikan urutan operasinya benar:

1.  Reset batasan.
2.  Hasilkan `initialGuess` menggunakan batasan yang baru di-reset.

## Daftar Periksa untuk Implementasi yang Stabil

- Simpan batasan dalam hook `useRef`, bukan variabel global.
- Reset batasan pada saat pemasangan komponen atau saat `userNumber` berubah (misalnya, dalam `useEffect` dengan dependensi `[userNumber]`).
- Validasi petunjuk pengguna untuk mencegah rentang tebakan menyusut secara tidak benar.
- Saat menghasilkan tebakan berikutnya, perbarui batasan dengan benar:
  - Jika `direction === 'lower'`: `maxRef.current = currentGuess`
  - Jika `direction === 'greater'`: `minRef.current = currentGuess + 1`
- Panggil event handler `onGameOver` hanya sekali, saat `currentGuess === userNumber`.

## Mengapa Hardcoding `1` dan `100` Berhasil?

Menggunakan nilai _hardcoded_ (`1` dan `100`) untuk pembuatan tebakan awal berhasil karena memberikan status bersih untuk setiap game baru, yang secara efektif melewati bug reset batasan. Saat Anda menggunakan variabel global yang dapat berubah tanpa mekanisme reset yang tepat, status lama akan terbawa, sehingga logika game tidak dapat dieksekusi dengan benar dan mencapai kondisi "game over".

## Ringkasan

Tidak apa-apa menggunakan variabel dinamis untuk `minBoundary` dan `maxBoundary`, asalkan Anda:

- Menyimpannya di `useRef` untuk membatasinya ke instance komponen.
- Meresetnya di awal setiap game baru.
- Memvalidasi petunjuk pengguna untuk menjaga konsistensi logis.
- Memastikan `initialGuess` dihasilkan _setelah_ batasan di-reset.

_Hardcoding_ rentang bukanlah solusi struktural; itu hanya menutupi masalah manajemen status yang mendasarinya.
