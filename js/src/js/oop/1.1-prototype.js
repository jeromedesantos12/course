const arr = [0, 1, 2, 3];
const arr2 = [`miko`, `udin`, `muller`, `li`];
console.log(arr.pop(), arr);
console.log(arr2.pop(), arr2);
console.log(`\n`);

// object prototype = mekanisme untuk menurunkan fitur yang dimiliki oleh suatu objek ke dalam turunannya
// overwrite fungsi pop() dalam di dalam Array.prototype
Array.prototype.pop = () => `POP dinonaktifkan!`;
console.log(arr.pop(), arr);

// arr2 juga kena karena Array.prototype letak di parent
console.log(arr2.pop(), arr2);
