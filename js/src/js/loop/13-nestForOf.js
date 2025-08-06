const studentRow = [
  [`Olivia`, `Liam`, `Emma`, `Noah`],
  [`Amelia`, `Oliver`, `Ava`, `Elijah`],
  [`Sophia`, `Mateo`, `Isabella`, `Lucas`],
];

// for (let i = 0; i < studentRow.length; i++) {
//   console.log(`Seat Row #${i + 1}:`); // Seat Row #1
//   for (let j = 0; j < studentRow[i].length; j++)
//     console.log(`\t${studentRow[i][j]}`); // Olivia, Liam, Emma, Noah
// }

for (const [rowIndex, row] of studentRow.entries()) {
  // pecah index (rowIndex) dan value (row) dari studentRow.entries()
  console.log(`Seat Row #${rowIndex + 1}`); // ambil index + 1
  for (const [index, value] of row.entries()) // pecah index dan value dari row.entries()
    console.log(`\t${index + 1}, ${value}`); // ambil index + 1 dan value
}
console.log(`\n`);
// for in: idealnya utk object, tapi kalo array multidimensi sebenarnya kena juga
for (students in studentRow) {
  // ambil index (students) dari studentRow
  console.log(`Seat Row #${Number(students) + 1}`); // tampilkan index + 1
  for (student in studentRow[students]) // ambil index dari studentRow[students]
    console.log(`\t${Number(student) + 1} ${studentRow[students][student]}`); // tampilkan index + 1 dan value dari studentRow[students][student]
}

// studentRow[students][student] ->
//
// studentRow [
//   students [student, student, student, student],
//   students [student, student, student, student],
//   students [student, student, student, student],
// ];
