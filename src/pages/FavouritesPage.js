import React from "react";

const FavouritesPage = function () {
  // const allSearches =
  // favMovieData.results &&
  // favMovieData.results.map((item, index) => {
  //   return <MovieInfo key={item.id} item={item} index={index} />;
  // });

  return (
    <div className="min-h-full">
      <h1 className="text-white text-2xl w-auto bg-purple-500 p-2 md:w-1/5 flex justify-center mx-auto mt-5">
        Your favourite Movies
      </h1>
      <div className="flex flex-wrap flex-row justify-center">
        {/* <p>{favMovieData}</p> */}
      </div>
    </div>
  );
};

export default FavouritesPage;
