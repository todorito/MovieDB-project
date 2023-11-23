import React, { useState } from "react";

const MovieInfo = function ({ index, item }) {
  const [showDetails, setShowDetails] = useState(false);
  const idDetails = item.id;
  const [MovieId, setMovieId] = useState(null);

  const getMovieDetails = function () {
    setMovieId(item.id);
  };
  return (
    <button
      onClick={getMovieDetails}
      className="bg-gray-200 rounded m-[2%] p-2 grow"
    >
      <h2 className="font-semibold">Title: {item.original_title}</h2>
      {/* <p>{idDetails}</p> */}
      <img
        className="m-auto my-1"
        src={"https://image.tmdb.org/t/p/w500/" + item.backdrop_path}
      />
      {/* <p>
        <Button onClick={() => setShowDetails(!showDetails)}>
          Description
        </Button>
        {showDetails && item.overview}
      </p> */}
      <p>
        {item.vote_average} rating out of {item.vote_count} people
      </p>
    </button>
  );
};

export default MovieInfo;
