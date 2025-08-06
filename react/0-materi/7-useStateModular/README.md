## Dengan useState(posts):

```jsx
// Parent
function Homepage() {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (value) => {
    setSearch(value); // kirim e.target.value dari callback ke useState search
    if (value.trim() === "") return setPosts([]); // jika e.target.value kosong maka useState posts kosong

    // filter posts berdasarkan perbandingan (apakah isi dari postData (json) ada di e.target.value?)
    const filteredPosts = postsData.filter((post) =>
      post.title.toLowerCase().includes(value.toLowerCase())
    );

    setPosts(filteredPosts); // kirim filteredPosts ke useState posts
  };

  return (
    <>
      <h1>Simple Blog</h1>
      <Search
        onSearchChange={handleSearchChange} // e.target.value jadi props
        searchCount={posts.length} // banyak data yang ditemukan dari panjang array di useStateposts
        searchValue={search} // kata yang dicari dari string di useState search
      />
      {posts.map((props, index) => (
        // hasilkan kembalian menggunakan map dari array di useState posts
        <Article {...props} key={index} />
      ))}
    </>
  );
}
```

## Alternatif tanpa useState(posts) (lebih ringan):

Kalau postsData tidak besar dan kamu tidak butuh persist data pencarian, bisa langsung render hasil filter dari postsData:

```jsx
// Parent
function Homepage() {
  const [search, setSearch] = useState("");
  const handleSearchChange = (value) => setSearch(value);

  // hasil json di filter dulu baru lempar ke props!
  const filteredPosts =
    search === ""
      ? []
      : postsData.filter((post) =>
          post.title.toLowerCase().trim().includes(search.toLowerCase().trim())
        );

  return (
    <>
      <h1>Simple Blog</h1>
      <Search
        onSearchChange={handleSearchChange} // kirim ke state
        searchCount={filteredPosts.length} // panjang data filter
        searchValue={search} // isi state
      />
      {filteredPosts.map((props, index) => (
        <Article {...props} key={index} /> // pakai data hasil filter dari json
      ))}
    </>
  );
}
```



### 🚀 Keuntungan versi ini:

- Lebih efisien karena hanya pakai satu useState
- Tidak perlu menyimpan duplikat data di posts
- Logika filter langsung dijalankan saat render

### 🎯 Kesimpulan:

Kalau kamu tidak perlu memanipulasi posts secara terpisah (misal: sort manual, pagination, delete, dsb), maka useState(posts) bisa dihapus untuk menyederhanakan komponen. Tapi kalau kamu rencana memodifikasi hasil pencarian, maka lebih baik tetap pakai useState(posts).
