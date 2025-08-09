import Article from "../components/Article";
import Search from "../components/Search";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";

// Parent
function Homepage() {
  const [search, setSearch] = useState("");
  const { data, isLoading, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      try {
        return await axios("https://jsonplaceholder.typicode.com/todos");
      } catch (err) {
        console.error("Gagal ambil data dari API");
        throw err; // custom error handling (optional)
      }
    },
  }); // inisiasi react query
  // misal: re-render tiap kali search berubah -> ["todos", search]

  const handleSearchChange = (value) => setSearch(value);
  const filteredPosts =
    search === ""
      ? []
      : data.data.filter((todo) =>
          todo.title.toLowerCase().trim().includes(search.toLowerCase().trim())
        );

  // handling error disini, termaksud loading
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading todos</p>;

  return (
    <>
      <h1>Simple Blog</h1>
      <Search
        onSearchChange={handleSearchChange} // kirim ke state
        searchCount={filteredPosts.length} // panjang data filter
        searchValue={search} // isi state
      />
      <div style={{ marginTop: "1rem" }}>
        {filteredPosts.map((props) => (
          <Article {...props} key={props.id} /> // pakai data hasil filter dari json
        ))}
      </div>
    </>
  );
}

export default Homepage;
