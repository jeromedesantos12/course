let add = function () {
  let counter = 0; // private variable
  return function () {
    return ++counter;
  };
};

let counter = 11; // tidak hoisting

let a = add();
console.log(a()); // 1
console.log(a()); // 2
console.log(a()); // 3

// shorthand -> immediately invoke function

// let add = (() => {
//   let counter = 0;
//   return () => ++counter;
// })();

console.log(add());
console.log(add());
console.log(add());
