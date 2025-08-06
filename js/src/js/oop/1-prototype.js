const arr = [0, 1, 2, 3];
const arr2 = [`miko`, `udin`, `muller`, `li`];

// menambah function baru ke objek arr
arr.hallo = () => `Hallo.. Kaffe und Zucker, bitte!`;

try {
  console.log(arr.hallo());
  console.log(arr2.hallo());
} catch {
  console.error(
    `Error! arr2 ga kena, karena function yang ditambah hanya di arr (childnya saja)`
  );
}
