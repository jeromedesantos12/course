import { useRef } from "react";

function Search({ onSearchChange, searchCount, searchValue }) {
  const searchRef = useRef("");

  const handleClick = (e) => onSearchChange(searchRef.current);
  const handleKey = (e) =>
    e.key === "Enter" && onSearchChange(searchRef.current);

  return (
    <>
      <div>
        Cari Artikel:{" "}
        <input
          onChange={(e) => (searchRef.current = e.target.value)}
          onKeyDown={handleKey}
        />
        <button onClick={handleClick}>Cari</button>
      </div>
      <small>
        Ditemukan {searchCount} data dengan pencarian kata {searchValue}
      </small>
    </>
  );
}

export default Search;
