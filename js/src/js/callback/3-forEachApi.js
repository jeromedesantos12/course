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

animes.forEach((anime) => console.log(`${anime.title} - ${anime.rating}/100`));

// // --- Versi for biasa ---
// for (let i = 0; i < animes.length; i++)
//   console.log(`${animes[i].title} - ${animes[i].rating}/100`);

// // --- Versi for...of ---
// for (const anime of animes) console.log(`${anime.title} - ${anime.rating}/100`);

// // --- Versi for...in ---
// for (const anime in animes)
//   console.log(`${animes[anime].title} - ${animes[anime].rating}/100`); // harus dibuka dulu indexnya
