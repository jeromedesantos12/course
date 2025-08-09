import Article from "../components/Article";
import Search from "../components/Search";
import { useState, useEffect } from "react";

// hanya berlaku di bundler modern (Vite, Webpack, dsb).
import postsData from "../posts";

// Saat kamu import file .json, bundler akan:
// - Baca isi file JSON.
// - Jalankan JSON.parse() secara otomatis.
// - Ekspor hasilnya sebagai objek JavaScript.

// Parent
function Homepage() {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (value) => {
    setSearch(value); // kirim e.target.value dari callback ke useState search

    if (value === "") return setPosts([]); // jika e.target.value kosong maka useState posts kosong

    // filter posts berdasarkan perbandingan (apakah isi dari postData (json) ada di e.target.value?)
    const filteredPosts = postsData.filter((post) =>
      post.title.toLowerCase().includes(value.toLowerCase())
    );

    setPosts(filteredPosts); // kirim filteredPosts ke useState posts
  };

  // website pertama kali dibuka men-trigger sesuatu menggunakan useEffect

  // 3 LIFE CYCLE!!(class component)
  // - componentDidMount : ketika komponen di render
  // - componentDidUpdate : ketika ada state yang berubah, harus ngapain?
  // - componentDidUnmount : ketika komponen akan dibuang atau dihancurkan

  // REACT HOOK (jalankan 3 fungsi di atas)
  // - dirender 2x karena ada <React.StrictMode>
  // - array, ingin memantau state apa? (array kosong cuma buat load awal)
  // - contoh, setInterval harus di remove dari clearInterval di return

  useEffect(() => {
    console.log("render"); // componentDidMount
    return () => {
      console.log("cleanUp"); // componentDidUnmount
    };
  }, [posts]); // componentDidUpdate

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
