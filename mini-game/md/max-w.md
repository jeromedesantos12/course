# 🤔 `width` vs `max-width`: Kenapa Terasa Kebalik?

Ini adalah pertanyaan CSS level “sudah paham dasar, mulai memikirkan *edge case*”. Meskipun terasa terbalik, sebenarnya aturan yang berlaku tetap sama.

---

## 🧠 Aturan Emas CSS (Penting!)

> Ukuran final sebuah elemen akan mengikuti nilai `width`, **KECUALI** jika ia melanggar `max-width`.

`max-width` selalu menjadi pembatas absolut, tidak peduli apa pun unit yang digunakan (`px`, `%`, `vw`, dll).

---

## 📦 Studi Kasus

```css
.box {
  width: 300px;
  max-width: 80%;
}
```

Ini bisa dibaca sebagai:
- Elemen **ingin** lebarnya `300px`.
- Tapi, lebarnya **tidak boleh lebih** dari `80%` lebar elemen induknya (*parent*).

---

## 🔍 Skenario Penggunaan

### 🖥️ Skenario 1: Parent Lebar (contoh: `1000px`)
- `width` yang diinginkan: `300px`
- `max-width` (pagar): `80%` dari `1000px` = `800px`
- **Hasil:** `300px` yang akan dipakai.
  - *Alasan:* `300px` tidak melanggar batasan `800px`.

### 📱 Skenario 2: Parent Sempit (contoh: `320px`)
- `width` yang diinginkan: `300px`
- `max-width` (pagar): `80%` dari `320px` = `256px`
- **Hasil:** `256px` yang akan dipakai.
  - *Alasan:* `300px` melanggar batasan `256px`, jadi CSS akan "memaksa" ukurannya agar tidak melebihi `max-width`.

---

## 📊 Tabel Ringkasan

| Lebar Parent | `width` | `max-width` (80%) | Lebar Hasil Akhir |
| :----------- | :------ | :---------------- | :---------------- |
| `1000px`     | `300px` | `800px`           | `300px`           |
| `320px`      | `300px` | `256px`           | `256px`           |

---

## 🤯 Kesimpulan: Bukan Terbalik

Ini hanyalah aturan prioritas sederhana:
1.  **Default:** Gunakan nilai `width`.
2.  **Jaring Pengaman:** Jika `width` melebihi `max-width`, maka `max-width` yang akan digunakan.

## 🎯 Kapan Pola Ini Berguna?

Pola ini sangat umum digunakan untuk komponen yang ukurannya tetap di layar besar tapi harus responsif di layar kecil, seperti:
- Card UI
- Modal / Dialog Box
- Tooltip

**Contoh di dunia nyata:**
```css
.modal {
  width: 300px;
  max-width: 90%; /* Pastikan tidak pernah menempel ke ujung layar mobile */
}
```
- **Di Desktop:** Modal akan rapi dengan lebar `300px`.
- **Di Mobile:** Lebar modal akan menjadi `90%` dari lebar layar, mencegah *horizontal overflow*.

---

## 💡 Mental Model (Agar Mudah Diingat)

- `width` = **Target** ukuran ideal Anda.
- `max-width` = **Pagar** pengaman agar ukuran tidak berlebihan.

Elemen akan selalu mencoba mencapai **target**-nya, tapi ia tidak akan pernah bisa melompati **pagar**.