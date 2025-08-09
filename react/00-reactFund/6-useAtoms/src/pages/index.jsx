import Article from "../components/Article";
import Search from "../components/Search";
import { userAtom, queryAtom } from "../../atoms";
import { useAtom } from "jotai";
import { useState } from "react";

// Parent
function Homepage() {
  const [search, setSearch] = useState(""); // ambil value search
  const [user, setUser] = useAtom(userAtom); // ambil object dari global state
  const [{ data, isLoading, isError }] = useAtom(queryAtom); // ambil useQuery dari global state

  // kirim value search ke state lalu filter data yang sesuai
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
      <h1>Simple Blog {user.name}</h1>
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
