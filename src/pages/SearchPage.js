import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import MovieInfo from "../components/MovieInfo";
import { searchMovies } from "../api";

const SearchPage = function () {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieData, setMovieData] = useState({});
  const searchTerm = searchParams.get("q");

  const fetchSearchResults = function (movie) {
    searchMovies(movie)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovieData(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchSearchResults(searchTerm);
  }, [searchTerm]);

  const allSearches =
    movieData.results &&
    movieData.results.map((item, index) => {
      return <MovieInfo key={item.id} item={item} index={index} />;
    });
  return (
    <>
      <div className="min-h-full">
        <SearchBar text={searchTerm} />
        <h1 className="text-white text-2xl w-auto bg-purple-500 p-2 md:w-1/5 flex justify-center mx-auto mt-5">
          Your searches: {searchTerm}
        </h1>
        <div className="flex flex-wrap flex-row justify-center">
          {allSearches}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
