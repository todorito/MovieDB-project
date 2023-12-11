import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { fetchTrendingMovies } from "../api";
import MovieInfo from "../components/MovieInfo";

const HomePage = function () {
  const [showModal, setShowModal] = useState(true);
  const [trendingData, setTrendingData] = useState({});

  const response = function () {
    fetchTrendingMovies()
      .then((response) => response.json())
      .then((data) => {
        setTrendingData(data);
        console.log(data);
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
    trendingData.results &&
    trendingData.results.map((item, index) => {
      return <MovieInfo key={item.id} item={item} index={index} />;
    });

  const handleModal = function () {
    setShowModal(false);
  };

  return (
    <>
      <div className="min-h-full">
        <SearchBar />
        <h1 className="text-white text-2xl w-auto bg-purple-500 p-2 md:w-1/5 flex justify-center mx-auto mt-5">
          Trending Now
        </h1>
        <div className="flex flex-wrap flex-row justify-center">
          {allResults}
        </div>
        <Button danger rounded outline>
          Hey man
        </Button>
      </div>
      {showModal && <Modal handleModal={handleModal} />}
    </>
  );
};

export default HomePage;
