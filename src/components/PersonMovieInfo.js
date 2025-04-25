import { useState } from "react";
import MovieInfo from "./MovieInfo";

const PersonMovieInfo = ({
  label,
  description,
  id,
  overview,
  movie,
  index,
}) => {
  const [showOverview, setShowOverview] = useState(false);

  const toggleOverview = (e) => {
    e.stopPropagation();
    setShowOverview(!showOverview);
  };

  const extraInfo = (
    <>
      <h2 className="font-semibold flex justify-center pt-2 px-3">
        {label}: {description}
      </h2>
      {showOverview ? (
        <>
          <h6 className="m-2">{overview}</h6>
          <button
            className="text-white p-2 m-1 rounded background-button-neutral"
            onClick={toggleOverview}
          >
            Hide Overview
          </button>
        </>
      ) : (
        <button
          className="text-white p-2 mt-2 rounded background-button-neutral flex justify-center m-auto"
          onClick={toggleOverview}
        >
          Overview
        </button>
      )}
    </>
  );

  return (
    <div>
      <MovieInfo key={id} item={movie} index={index} extraEl={extraInfo} />
    </div>
  );
};

export default PersonMovieInfo;
