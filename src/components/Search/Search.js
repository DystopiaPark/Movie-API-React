import React, { useState } from "react";
import "./search.css";

const Search = ({ onSubmit }) => {
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleReset = () => {
    setSearch("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSubmit(search);
    handleReset();
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={search}
        onChange={handleInput}
        placeholder="Search for a movie"
      />
      <input type="submit" value="search" onClick={handleSearch} />
    </form>
  );
};

export default Search;
