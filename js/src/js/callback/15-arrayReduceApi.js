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

const bestAnime = animes.reduce((first, second) =>
  second.rating > first.rating ? second : first
);
// One Piece (89) vs Bleach (82) → One Piece
// One Piece (89) vs Hunter X Hunter (90) → Hunter X Hunter
// Hunter X Hunter (90) vs Attack on Titan (92) → Attack on Titan
// Attack on Titan (92) vs Naruto (84) → Attack on Titan

console.log(bestAnime); // { title: 'Attack on Titan', rating: 92, year: 2013 }
