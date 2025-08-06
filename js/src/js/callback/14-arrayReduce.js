const examScore = [80, 85, 70, 90, 93, 77];

// let total = 0;
// for (let score of examScore) total += score;

const total = examScore.reduce((total, score) => total + score);
// Iterasi 1: total = 80, score = 85 → 80 + 85 = 165
// Iterasi 2: total = 165, score = 70 → 165 + 70 = 235
// Iterasi 3: total = 235, score = 90 → 235 + 90 = 325
// Iterasi 4: total = 325, score = 93 → 325 + 93 = 418
// Iterasi 5: total = 418, score = 77 → 418 + 77 = 495

console.log(total); // 495
// array reduce = looping array yang membandingkan nilai pertama dengan nilai kedua
