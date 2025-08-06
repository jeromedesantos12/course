const shoppingCart = [
  {
    product: `vue.js`,
    price: 1.22,
    qty: 1,
  },
  {
    product: `react.js`,
    price: 2.32,
    qty: 1,
  },
  {
    product: `angular.js`,
    price: 3.32,
    qty: 2,
  },
];

// memanggil object di dalam array
console.log(shoppingCart[0]); // cari indexnya dulu
console.log(shoppingCart[0].product); // lalu panggil keynya
