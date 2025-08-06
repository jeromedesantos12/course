const animes = [
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
    title: `Attack on Titan`,
    rating: 92,
    year: 2013,
  },
  {
    title: `Naruto`,
    rating: 84,
    year: 2002,
  },
];

const anime = animes.map(({ title }) => title.toUpperCase());
console.log(anime);
