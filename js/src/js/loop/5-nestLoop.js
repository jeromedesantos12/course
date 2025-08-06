// tugas yang harus dikerjakan!

// 1;
//     a
//     b
//     c
//     d
// 2;
//     a
//     b
//     c
//     d
// ..dst

// menggunakan nested loop!
const pilihan = `abcd`;

for (let i = 1; i <= 10; i++) {
  console.log(`${i}. Soal nomor ${i}:`); // 1. Soal nomor 1:
  for (let j = 0; j < pilihan.length; j++)
    console.log(`   ${pilihan[j]}. Pilihan jawaban`); // a. Pilihan jawaban
}

// let i = 1; initial -> loop dimulai dari angka 1
// i <= 10; condition -> loop masih lebih kecil dari(sama dengan) 10? kalo belum, maju terus ketemu angka 10
// i++; increment -> loop menambahkan 1 dari angka sebelumnya (i += 1)

// let j = 1; initial -> loop dimulai dari angka 0
// j < pilihan.length; condition -> loop masih lebih kecil dari 4? kalo belum, maju terus ketemu angka 3 (panjang array)
// j++; increment -> loop menambahkan 1 dari angka sebelumnya (j += 1)
