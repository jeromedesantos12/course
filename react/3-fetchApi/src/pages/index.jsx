import postsData from "../posts";
import Article from "../components/Article";
import Search from "../components/Search";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

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

export default Homepage;
