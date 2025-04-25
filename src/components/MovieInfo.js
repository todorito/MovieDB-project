import React from "react";
import { BiSolidStar } from "react-icons/bi";
import { BiStar } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useFavourites } from "../providers/favouriteProvider";

const MovieInfo = function ({ index, item, extraClass, extraEl }) {
  const { addToFavourites, favData, removeFromFavourites } = useFavourites();
  const navigateToDetails = useNavigate();

  const getMovieDetails = function () {
    navigateToDetails(`/movieDetails/${item.id}`);
  };

  const addFavourites = function (e) {
    e.stopPropagation();
    addToFavourites(item);
  };

  const removeFavourites = function (e) {
    e.stopPropagation();
    removeFromFavourites(item.id);
  };

  const isFavourite = favData.some((movie) => movie.id === item.id);

  let vote = String(item.vote_average).substring(0, 3) * 10 + "%";
  const defClasses =
    "relative background-neutral text-white rounded m-[2%] p-0 pb-2 min-w-[96%] overflow-hidden cursor-pointer";
  let allClassNames = extraClass ? defClasses + extraClass : defClasses;

  return (
    <div onClick={getMovieDetails} className={allClassNames}>
      <div
        className="absolute p-2 background-neutral rounded-bl-2xl rounded-tr right-0 top-0 cursor-pointer"
        onClick={isFavourite ? (e) => removeFavourites(e) : addFavourites}
      >
        {isFavourite ? (
          <BiSolidStar className="text-success w-10 h-10" />
        ) : (
          <BiStar className="w-10 h-10" />
        )}
      </div>
      {item.poster_path && (
        <img
          className="m-auto my-0"
          src={"https://image.tmdb.org/t/p/w500/" + item.poster_path}
        />
      )}
      {!item.poster_path && (
        <div className="m-auto my-0 w-[80%] h-[70%] min-h-[30rem] md:min-h-[20rem]">
          <p className="flex justify-center items-center h-full">
            Image Not Found
          </p>
        </div>
      )}
      <h2 className="font-semibold flex justify-center pt-2 px-3">
        Title: {item.original_title}
      </h2>
      <p className="flex justify-center">
        <span className="text-success">{vote}&nbsp;</span> rating out of{" "}
        {item.vote_count} people
      </p>
      {extraEl && extraEl}
    </div>
  );
};

export default MovieInfo;
