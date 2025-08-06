const studentRow = [
  [`Olivia`, `Liam`, `Emma`, `Noah`],
  [`Amelia`, `Oliver`, `Ava`, `Elijah`],
  [`Sophia`, `Mateo`, `Isabella`, `Lucas`],
];

for (let i = 0; i < studentRow.length; i++) {
  console.log(`Seat Row #${i + 1}:`); // Seat Row #1
  for (let j = 0; j < studentRow[i].length; j++)
    console.log(`\t${studentRow[i][j]}`); // Olivia, Liam, Emma, Noah
}

// let i = 0; initial -> loop dimulai dari angka 0
// i < studentRow.length; condition -> loop masih lebih kecil dari 3? kalo belum, maju terus ketemu angka 2 (panjang array)
// i++; increment -> loop menambahkan 1 dari angka sebelumnya (i += 1)

// let j = 0; initial -> loop dimulai dari angka 0
// j < studentRow[i].length; condition -> loop masih lebih kecil dari 4? kalo belum, maju terus ketemu angka 3 (panjang array di dalam array)
// j++; increment -> loop menambahkan 1 dari angka sebelumnya (j += 1)

// studentRow[i]
// [`Olivia`, `Liam`, `Emma`, `Noah`]

//studentRow[i][j] -> bongkar kotak di dalam kotak!
// Olivia
// Liam
// Emma
// Noah
