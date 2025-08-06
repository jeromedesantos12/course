const args = process.argv.slice(2);

// looping berdasarkan argumen yang kamu kirim
for (let arg of args) console.log(`Selamat datang, ${arg}`);

// misal: node app.js hello world
// [
//   '/path/to/node',
//   '/path/to/app.js',
//   'hello',
//   'world'
// ]

// - Index ke-0 → path ke executable node
// - Index ke-1 → path ke file JS (app.js)
// - Index ke-2 dan seterusnya → argumen yang kamu kirim (hello, world)
