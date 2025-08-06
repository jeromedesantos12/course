const animes = [
  {
    title: `Attack on Titan`,
    rating: 90,
    year: 2013,
  },
  {
    title: `One Piece`,
    rating: 89,
    year: 1999,
  },
  {
    title: `Bleach`,
    rating: 82,
    year: 2004,
  },
  {
    title: `Hunter X Hunter`,
    rating: 90,
    year: 2011,
  },
  {
    title: `Naruto`,
    rating: 84,
    year: 2002,
  },
];

const animeBagus = animes.filter((anime) => anime.rating >= 85); // ambil anime yang ratingnya lebih besar atau sama dengan 85
const animeCukupBagus = animes.filter((anime) => anime.rating < 85); // ambil anime yang ratingnya kurang dari 85
const animeBaru = animes.filter((anime) => anime.year > 2010); // ambil anime yang tahunnya lebih besar dari 2010

// setelah filter, di map buat ambil judulnya saja
console.log(`
- Anime Bagus: ${animeBagus.map((anime) => anime.title).join(", ")}
- Anime Cukup Bagus: ${animeCukupBagus.map((anime) => anime.title).join(", ")}
- Anime Baru: ${animeBaru.map((anime) => anime.title).join(", ")}
    `);
