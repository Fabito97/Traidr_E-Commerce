import { useState } from "react";
import Button from "../../components/Button";

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
      <Button text="Search" padding="13px 20px"/>
    </>
  );
};

export default Search;
