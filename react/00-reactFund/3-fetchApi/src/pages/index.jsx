import Article from "../components/Article";
import Search from "../components/Search";
import { useState, useEffect } from "react";

// Parent
function Homepage() {
  const [search, setSearch] = useState(""); // ini masalah di kondisi -> kalo tipe data ganti
  const [posts, setPosts] = useState([]); // nanti kena timpa array -> null pun ga masalah
  const handleSearchChange = (value) => setSearch(value);

  // hasil api di filter dulu baru lempar ke props!
  const filteredPosts =
    search === ""
      ? []
      : posts.filter((post) =>
          post.title.toLowerCase().trim().includes(search.toLowerCase().trim())
        );

  // fetch api di useEffect simpan ke useState
  useEffect(() => {
    const loadApi = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!res.ok) throw new Error(`Data gagal di tarik 💀`);
        const data = await res.json(); // otomatis json.parse
        setPosts(data);
      } catch (err) {
        console.error(err);
      }
    };
    loadApi();

    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((res) => {
    //     if (!res.ok) throw Error("Data gagal di tarik 💀");
    //     return res.json();
    //   })
    //   .then((data) => console.log(data))
    //   .catch((err) => console.error(err));
  }, []);

  // jalanin console tiap kali ada update post (dari state search) tanpa harus render api ulang
  useEffect(() => console.log("ada post baru"), [posts]); // pantau state posts

  return (
    <>
      <h1>Simple Blog</h1>
      <Search
        onSearchChange={handleSearchChange} // e.target.value jadi props
        searchCount={filteredPosts.length} // banyak data yang ditemukan dari panjang array di useStateposts
        searchValue={search} // kata yang dicari dari string di useState search
      />
      <br />
      {filteredPosts.map((props, index) => (
        // hasilkan kembalian menggunakan map dari array di useState posts
        <Article {...props} key={index} />
      ))}
    </>
  );
}

export default Homepage;
