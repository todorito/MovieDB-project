import React, { useState } from "react";

const SearchBar = function () {
  const [input, setInput] = useState("");

  const searchMovies = function (e) {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center">
      <input
        placeholder="Search for a movie"
        className="rounded m-3 md:w-[15%] px-5 py-2 mt-10"
        onChange={(e) => setInput(e.target.value)}
        onMouseEnter={searchMovies}
        value={input}
      />
    </div>
  );
};

export default SearchBar;
