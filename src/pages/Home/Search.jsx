import { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState();


  return (
    <>
      <input
        type="text"
        placeholder="I am looking for..."
        className="searchInput"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="searchButton">
        Search
      </button>
    </>
  );
};

export default Search;
