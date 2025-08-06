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

const isAnimeNew = animes.some((anime) => anime.year > 2010); // kalo salah satunya ada yang terbaru? (lebih dari 2010) true
console.log(isAnimeNew); // true
