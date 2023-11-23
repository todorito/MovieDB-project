import React, { useEffect, useState } from "react";
import { fetchTrendingMovies } from "./api";
import MovieInfo from "./components/MovieInfo";
import HomePage from "./pages/HomePage";
import { searchMovies } from "./api";

function App() {
  const [movieData, setMovieData] = useState({});
  const [page, setPage] = useState(1);

  const response = function () {
    fetchTrendingMovies()
      .then((response) => response.json())
      .then((data) => {
        setMovieData(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  };

  const getMovies = function (movieName) {
    searchMovies(movieName)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    response();
  }, []);

  const allResults =
    movieData.results &&
    movieData.results.map((item, index) => {
      return <MovieInfo key={item.id} item={item} index={index} />;
    });

  return (
    <div className="bg-zinc-700 min-h-screen">
      <HomePage allResults={allResults} />
    </div>
  );
}

export default App;
