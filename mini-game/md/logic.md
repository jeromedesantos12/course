# Penjelasan Logika `FlatList` di GameScreen.js

Kode ini menggunakan komponen `FlatList` dari React Native untuk menampilkan daftar tebakan (guesses) yang telah dilakukan dalam permainan. Tujuannya adalah untuk menampilkan tebakan terbaru di bagian paling atas daftar.

Berikut adalah penjelasannya:

### 1. `<FlatList data={guessRounds} ... />`
-   **`data={guessRounds}`**: Properti ini memberitahu `FlatList` untuk menggunakan array bernama `guessRounds` sebagai sumber datanya. Setiap elemen dalam array ini adalah satu tebakan.

### 2. `renderItem={(itemData) => ...}`
-   Fungsi ini dieksekusi untuk setiap item dalam `guessRounds`.
-   `itemData` adalah sebuah objek yang berisi informasi tentang item yang sedang dirender, termasuk:
    -   `itemData.item`: Nilai dari item itu sendiri (yaitu angka tebakan).
    -   `itemData.index`: Posisi item dalam array (dimulai dari 0).

### 3. `roundNumber={guessRoundsListLength - itemData.index}`
-   Ini adalah inti dari logika perhitungan. Tujuannya adalah untuk **membalik urutan nomor ronde** agar ronde terbaru memiliki nomor ronde tertinggi.
-   `guessRoundsListLength`: Ini adalah variabel yang menyimpan jumlah total tebakan.
-   `itemData.index`: Ini adalah indeks dari tebakan saat ini dalam array.
-   **Contoh:** Misalkan `guessRounds` memiliki 3 tebakan: `[8, 5, 2]` dan `guessRoundsListLength` adalah 3.
    -   Untuk tebakan pertama (`8` di `index` 0): `roundNumber` akan menjadi `3 - 0 = 3`.
    -   Untuk tebakan kedua (`5` di `index` 1): `roundNumber` akan menjadi `3 - 1 = 2`.
    -   Untuk tebakan ketiga (`2` di `index` 2): `roundNumber` akan menjadi `3 - 2 = 1`.
-   Dengan logika ini, tebakan yang paling baru (yang berada di awal array) akan ditampilkan sebagai ronde #3, dan tebakan paling lama akan ditampilkan sebagai ronde #1.

### 4. `guess={itemData.item}`
-   Properti ini meneruskan nilai tebakan itu sendiri (misalnya, angka `8`) ke komponen `GuessLogItem` untuk ditampilkan.

### 5. `keyExtractor={(item) => item}`
-   Ini adalah cara `FlatList` memberikan "kunci" unik pada setiap item di daftar untuk mengoptimalkan rendering. Di sini, nilai tebakan itu sendiri digunakan sebagai kunci.

## Kesimpulan

Logika `guessRoundsListLength - itemData.index` adalah trik sederhana untuk menampilkan nomor ronde dalam urutan menurun (misalnya, 3, 2, 1). Ini menciptakan pengalaman pengguna yang umum di mana item terbaru dalam sebuah log/daftar ditampilkan di paling atas.
