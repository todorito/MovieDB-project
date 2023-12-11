import React, { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import { searchMovies } from "./api";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FavouritesPage from "./pages/FavouritesPage";
import SearchPage from "./pages/SearchPage";
import ErrorPage from "./pages/ErrorPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
// import { createContext } from "react";

function App() {
  // const [movieData, setMovieData] = useState({});
  const [favMovieData, setFavMovieData] = useState({});
  // const FavMovieDataContext = createContext({});

  return (
    // <FavMovieDataContext.Provider value={{ favMovieData, setFavMovieData }}>
    <Router>
      <div className="bg-zinc-700 min-h-screen">
        <nav className="bg-gray-500">
          <Link to="/">HomePage</Link>
          <Link to="/favourites">Favourites</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/movieDetails/:id" element={<MovieDetailsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
    // </FavMovieDataContext.Provider>
  );
}

export default App;
