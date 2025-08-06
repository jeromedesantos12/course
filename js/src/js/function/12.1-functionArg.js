// versi singkat

const duaKali = (func) => {
  func();
  func();
};

const lemparDadu = () => console.log(Math.floor(Math.random() * 6) + 1);

duaKali(lemparDadu);
