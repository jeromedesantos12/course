const contohPromise = () => {
  return new Promise((resolve, reject) => {
    resolve(() => {
      return `Funktionieren!`; // ga harus masuk ke dalam fungsi
    });
    reject(() => {
      return `Versagen!`;
    });
  });
};

console.log(contohPromise()); // manggilnya harus pakai argumen + .then() => {})
