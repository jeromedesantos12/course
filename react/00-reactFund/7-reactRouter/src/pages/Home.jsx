import Article from "../components/Article";
import Search from "../components/Search";
import { useState, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { GlobalContext } from "../context";

// Parent
function Home() {
  const [search, setSearch] = useState("");
  const { name } = useContext(GlobalContext); // ambil nama Jeremy
  // tidak perlu useEffect api -> karena sudah ditangani oleh fetch api di react router
  const posts = useLoaderData();
  const handleSearchChange = (value) => setSearch(value);

  // hasil api di filter dulu baru lempar ke props!
  const filteredPosts =
    search === ""
      ? []
      : posts.filter((post) =>
          post.title.toLowerCase().trim().includes(search.toLowerCase().trim())
        );

  return (
    <>
      <h1>Simple Blog {name}</h1>
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

export default Home;
