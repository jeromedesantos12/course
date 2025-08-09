// Child
function Search({ onSearchChange, searchValue, searchCount }) {
  const handleChange = (e) => onSearchChange(e.target.value);
  // kirim e.target.value ke parent melalui callback onSearchChange

  return (
    <>
      <div>
        Cari Artikel: <input onChange={handleChange} />
      </div>
      <small>
        Ditemukan {searchCount} data dengan pencarian kata {searchValue}
      </small>
    </>
  );
}

export default Search;
