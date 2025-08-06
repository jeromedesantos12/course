const sumAll = (...nums) => nums.reduce((total, el) => total + el, 0);

console.log("Total:", sumAll(1, 2, 3, 4));
