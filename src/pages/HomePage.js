import { useState, useEffect } from "react";
import Modal from "../components/Modal";
import { fetchTrendingMovies } from "../api";
import Pagination from "@mui/material/Pagination";
import MovieInfo from "../components/MovieInfo";

const HomePage = function () {
  const [showModal, setShowModal] = useState(true);
  const [trendingMovieData, setTrendingMovieData] = useState({});
  const [page, setPage] = useState(1);

  const response = function () {
    fetchTrendingMovies(page)
      .then((response) => response.json())
      .then((data) => {
        setTrendingMovieData(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    response();
  }, [page]);

  useEffect(() => {
    if (localStorage.getItem("firstVisit")) {
      setShowModal(false);
    } else {
      localStorage.setItem("firstVisit", setShowModal(true));
    }
  }, []);

  const results =
    trendingMovieData.results &&
    trendingMovieData.results.map((item, index) => {
      return <MovieInfo key={item.id} item={item} index={index} />;
    });

  const handleModal = function () {
    setShowModal(false);
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <div className="min-h-full">
        <h1 className="container mx-auto text-white text-2xl w-auto px-[2%] flex justify-start mt-5">
          Trending Movies
        </h1>
        <div className="container mx-auto grid md:grid-cols-4 lg:grid-cols-5 gap-4 justify-start">
          {results}
        </div>
        <div className="flex justify-center py-2">
          <Pagination
            className="text-center"
            count={trendingMovieData?.total_pages}
            onChange={handleChange}
            sx={{
              "& .MuiPaginationItem-root": {
                minWidth: "32px",
                height: "32px",
                borderRadius: "15px",
                fontWeight: "500",
                color: "white",
                "&.Mui-selected": {
                  backgroundColor: "secondary.main",
                  color: "white",
                },
              },
            }}
          />
        </div>
      </div>
      {showModal && <Modal handleModal={handleModal} />}
    </>
  );
};

export default HomePage;
