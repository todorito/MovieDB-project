import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FavouritesPage from "./pages/FavouriteMoviesPage";
import SearchPage from "./pages/SearchPage";
import ErrorPage from "./pages/ErrorPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import { FavouriteProvider } from "./providers/favouriteProvider";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <FavouriteProvider>
        <div className="background-neutral-strong min-h-screen">
        <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favourites" element={<FavouritesPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/movieDetails/:id" element={<MovieDetailsPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      </FavouriteProvider>
    </Router>
  );
}

export default App;
