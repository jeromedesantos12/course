const studentScore = {
  Olivia: 20,
  Liam: 13,
  Emma: 40,
  Noah: 18,
  Amelia: 32,
  Oliver: 10,
  Ava: 11,
  Elijah: 21,
  Sophia: 14,
  Mateo: 22,
};

let total = 0;
let scores = Object.values(studentScore);

for (let score of scores) total += score;
// Iterasi 1: total = 0 + 10 → total = 10
// Iterasi 2: total = 10 + 20 → total = 30
// Iterasi 3: total = 30 + 30 → total = 60

console.log(total / scores.length);

// pakai array reduce
// let total = Object.values(studentScore).reduce((sum, score) => sum + score, 0);
