import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const SearchBar = function ({ text }) {
  const [input, setInput] = useState(text || "");
  const navigate = useNavigate();

  const navigateToSearch = function (movie) {
    navigate(`/search?q=${movie}`);
  };
  console.log(text);
  const getMovies = function (e) {
    e.preventDefault();
    navigateToSearch(input);
  };

  return (
    <form
      onSubmit={getMovies}
      className="relative m-3 rounded mt-0 background-neutral"
    >
      <input
        placeholder="Search..."
        className=" text-start text-inverted-weak bg-transparent px-5 py-2 w-full pr-10"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <CiSearch className="text-white absolute top-0 right-5 h-full" />
    </form>
  );
};

export default SearchBar;
