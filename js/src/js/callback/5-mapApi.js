const animes = [
  {
    title: `Attack on Titan`,
    rating: 90,
  },
  {
    title: `One Piece`,
    rating: 89,
  },
  {
    title: `Bleach`,
    rating: 82,
  },
  {
    title: `Hunter X Hunter`,
    rating: 90,
  },
  {
    title: `Naruto`,
    rating: 84,
  },
];

const anime = animes.map(function (anime) {
  return anime.title.toUpperCase();
});

// versi arrow function
// const anime = animes.map((anime) => anime.title.toUpperCase());

console.log(anime);
