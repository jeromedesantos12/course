const examScore = [80, 85, 70, 90, 93, 77];

// apakah semua nilai dalam array lebih besar dari 70? jika salah satunya kurang dari 70, maka false
const isGraduate = examScore.every((score) => score > 70);

// apakah semua nilai dalam array lebih besar dari 70? jika salah satunya kurang dari 70, maka masih true (lebih fleksibel)
const isGraduate2 = examScore.some((score) => score > 70);

console.log(isGraduate); // false
console.log(isGraduate2); // true
