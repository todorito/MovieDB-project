import React, { useState } from "react";
import { BiSolidStar } from "react-icons/bi";
import { BiStar } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { searchMovieDetails } from "../api";

const MovieInfo = function ({ index, item }) {
  const navigateToDetails = useNavigate();
  const [showDetails, setShowDetails] = useState(false);
  const idDetails = item.id;
  const [MovieId, setMovieId] = useState(null);
  const [isFavourite, setIsFavourite] = useState(false);

  const getMovieDetails = function () {
    navigateToDetails(`/movieDetails/${item.id}`);
    setMovieId(item.id);
  };

  const addToFavourites = function (e) {
    e.stopPropagation();
    setIsFavourite(!isFavourite);
    setMovieId(item.id);
  };
  return (
    <div
      onClick={getMovieDetails}
      className="bg-gray-200 rounded m-[2%] p-2 grow"
    >
      <h2 className="font-semibold flex justify-center">
        Title: {item.original_title}
      </h2>
      {item.poster_path && (
        <img
          className="m-auto my-1"
          src={"https://image.tmdb.org/t/p/w500/" + item.poster_path}
        />
      )}
      {!item.poster_path && (
        <div className="m-auto my-1 bg-gray-300 w-[80%] h-[70%] min-h-[10em]">
          <p className="flex justify-center items-center h-full">
            Image Not Found
          </p>
        </div>
      )}
      <div onClick={addToFavourites}>
        {isFavourite ? (
          <BiSolidStar className="text-yellow-400 w-10 h-10" />
        ) : (
          <BiStar className="w-10 h-10" />
        )}
      </div>
      <p className="flex justify-center">
        {item.vote_average} rating out of {item.vote_count} people
      </p>
    </div>
  );
};

export default MovieInfo;
