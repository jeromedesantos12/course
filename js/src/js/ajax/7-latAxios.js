const form = document.querySelector(`#search-form`);

form.addEventListener(`submit`, async (e) => {
  e.preventDefault(); // mencegah perilaku form

  const img = document.querySelectorAll(`img`);
  img.forEach((img) => img.remove()); // menghapus semua gambar di dalam body

  const keyword = form.elements.query.value;
  const config = {
    params: { q: keyword }, // Axios akan secara internal mengubahnya menjadi:
    // http://api.tvmaze.com/search/shows?q=keyword
  };
  const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
  getImages(res.data);
  form.elements.query.value = ``;
});

// Kalau kamu pakai fetch() biasa, kamu memang harus membangun string-nya sendiri:
// const keyword = "batman";
// fetch(`http://api.tvmaze.com/search/shows?q=${keyword}`);

const getImages = (shows) => {
  // looping  untuk menampilkan gambar dari api
  shows.forEach((result) => {
    if (result.show.image) {
      const img = document.createElement(`img`); // membuat element html img
      img.src = result.show.image.medium; // nambahin link src img isinya respond dari api
      document.body.append(img); // tambahkan element ke dalam body
    }
  });
};
