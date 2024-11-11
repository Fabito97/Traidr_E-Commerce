import { useState } from "react";

export const SearchSortBar = ({handleSearch}) => {


  return (
    <div className="search-sort-bar mb-1">
      <input
        style={{ width: '70%' }}
        type="text"
        placeholder="Search for item..."
        onChange={handleSearch}
      />
      {/* <button>Sort By</button> */}
    </div>
  );
};
