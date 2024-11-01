import { useState } from "react";

const Search = () => {
  const [task, setTask] = useState();
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        placeholder="I am looking for..."
        className="searchInput"
        value={task}
        onChange={handleInputChange}
      />
      <button className="searchButton">
        Search
      </button>
    </>
  );
};

export default Search;
