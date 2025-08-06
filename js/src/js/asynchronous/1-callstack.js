const perkalian = (x, y) => x * y; // 3. -> x , y = 3, 3 = 9
const akar = (x) => perkalian(x, x); // 2. -> x = 3
const pythagoras = (a, b, c) => {
  return akar(a) + akar(b) === akar(c);
}; // 1. ->  a, b, c = 3, 4, 6

phytagoras(3, 4, 5);

// pendaftaran fungsi-fungsi!
// perkalian
// akar
// pythagoras

// langkah 1
// a, b, c = 3, 4, 6
// x = 3
// x , y = 3, 3 = 9

// langkah 2
// a, b, c = 3, 4, 6
// x = 4
// x , y = 3, 3 = 16

// langkah 3
// a, b, c = 3, 4, 6
// x = 6
// x , y = 3, 3 = 25

// hasil === true
