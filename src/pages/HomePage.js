import { useState, useEffect } from "react";
import Modal from "../components/Modal";
import { fetchTrendingMovies } from "../api";
import MovieInfo from "../components/MovieInfo";

const HomePage = function () {
  const [showModal, setShowModal] = useState(true);
  const [trendingMovieData, setTrendingMovieData] = useState({});

  const response = function () {
    fetchTrendingMovies()
      .then((response) => response.json())
      .then((data) => {
        setTrendingMovieData(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    response();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("firstVisit")) {
      setShowModal(false);
    } else {
      localStorage.setItem("firstVisit", setShowModal(true));
    }
  }, []);

  const allResults =
    trendingMovieData.results &&
    trendingMovieData.results.map((item, index) => {
      return <MovieInfo key={item.id} item={item} index={index} />;
    });

  const handleModal = function () {
    setShowModal(false);
  };

  return (
    <>
      <div className="min-h-full">
        <h1 className="container mx-auto text-white text-2xl w-auto px-[2%] flex justify-start mt-5">
          Trending Movies
        </h1>
        <div className="container mx-auto grid md:grid-cols-4 lg:grid-cols-5 gap-4 justify-start">
          {allResults}
        </div>
      </div>
      {showModal && <Modal handleModal={handleModal} />}
    </>
  );
};

export default HomePage;
