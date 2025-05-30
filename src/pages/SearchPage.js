import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieInfo from "../components/MovieInfo";
import { fetchMovies } from "../api";

const SearchPage = function () {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieData, setMovieData] = useState({});
  const searchTerm = searchParams.get("q");

  const fetchSearchResults = function (movie) {
    fetchMovies(movie)
      .then((response) => response.json())
      .then((data) => {
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
        <h1 className="container mx-auto text-white text-2xl w-auto px-[2%] flex justify-start mt-5">
          Your searches: {searchTerm}
        </h1>
        <div className="container mx-auto grid md:grid-cols-4 lg:grid-cols-5 gap-4 justify-start">
          {allSearches}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
