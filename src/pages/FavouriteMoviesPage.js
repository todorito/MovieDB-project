import React from "react";
import MovieInfo from "../components/MovieInfo";
import { useFavourites } from "../providers/favouriteProvider";

const FavouriteMoviesPage = function () {
  const { favData } = useFavourites();

  const allFavourites =
    favData &&
    favData.map((item, index) => {
      return <MovieInfo key={item.id} item={item} index={index} />;
    });

  return (
    <div className="min-h-full">
      <h1 className="container mx-auto text-white text-2xl w-auto px-[2%] flex justify-start mt-5">
        Your favourite Movies
      </h1>
      <div className="container mx-auto flex flex-wrap flex-row justify-start">
        {allFavourites}
      </div>
    </div>
  );
};

export default FavouriteMoviesPage;
