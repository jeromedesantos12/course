console.log(`Bakal muncul pertama`);

setTimeout(() => {
  console.log(
    `Ini udah masuk memori proses tapi dijalankan setelah 3 detik kedepan`
  );
}, 3000);
// js itu single thread (blocking) tapi c++ itu multi thread (non-blocking)
// jadi si app kita (js), nitip (setTimeout/api) ke browser (c++) yang bisa multi thread
// *memanfaatkan engine browser

console.log(`Bakal muncul kedua`);

// single thread = proses dijalankan secara berurutan
// multi thread = proses dijalankan secara bersamaan
