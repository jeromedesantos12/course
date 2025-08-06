const array1 = ["c", "e", "c"];
const array2 = ["a", "d", "b"];
const array3 = array1.concat(array2);

console.log(array3); // [ 'c', 'e', 'c', 'a', 'd', 'b' ]
console.log(array3.sort()); // [ 'a', 'b', 'c', 'c', 'd', 'e' ]
console.log(array3.reverse()); // [ 'e', 'd', 'c', 'c', 'b', 'a' ]
console.log("\n");

// "C" itu di array3 index ke berapa?
console.log(array3.indexOf("c")); // 2
console.log(array3.indexOf("c", 2)); // 2
console.log(array3.indexOf("z")); // -1
console.log("\n");

// Apakah ada data "C" di dalam array3?
console.log(array3.includes("c")); // true
console.log(array3.includes("z")); // false
console.log("\n");

// Ubah array ke string dengan di beri pemisah (default non parameter = ",")
console.log(array3.join()); // c,e,c,a,d,b
console.log(array3.join("-")); // c-e-c-a-d-b
