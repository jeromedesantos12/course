// generator utk membuat folder project berserta isinya -> fs
import { mkdir, mkdirSync } from "node:fs"; // es6
// const {mkdir} = require(`fs`)

// async
mkdir(`project`, { recursive: true }, (err) => {
  if (err) throw err;
});

// sync
mkdirSync(`project`);
