import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = function ({ text }) {
  const [input, setInput] = useState(text || "");
  const navigate = useNavigate();

  const navigateToSearch = function (movie) {
    navigate(`/search?q=${movie}`);
  };

  const getMovies = function (e) {
    e.preventDefault();
    if (e.code === "Enter") {
      navigateToSearch(input);
    }
  };

  return (
    <div className="flex justify-center">
      <input
        placeholder="Search for a movie"
        className="rounded m-3 md:w-[15%] px-5 py-2 mt-10"
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={getMovies}
        value={input}
      />
    </div>
  );
};

export default SearchBar;
