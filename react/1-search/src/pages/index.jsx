import postsData from "../posts";
import Article from "../components/Article";
import Search from "../components/Search";
import { useState } from "react";

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

export default Homepage;
