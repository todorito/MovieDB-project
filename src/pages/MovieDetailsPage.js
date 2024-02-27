import React, { useEffect, useState } from "react";
import { fetchMovieDetails, fetchMovieCast } from "../api";
import { useParams } from "react-router-dom";

const MovieDetailsPage = function () {
  const [movieDetailsData, setMovieDetailsData] = useState({});
  const [movieCreditsData, setMovieCreditsData] = useState({});

  const { id } = useParams();

  const movieDetails = function (id) {
    fetchMovieDetails(id)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetailsData(data);
      })
      .catch((err) => console.error(err));
  };

  const movieCredits = function (id) {
    fetchMovieCast(id)
      .then((response) => response.json())
      .then((data) => {
        console.log(
          data.cast.character,
          data.cast.name,
          data.cast.profile_path
        );
        setMovieCreditsData(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    movieDetails(id);
    movieCredits(id);
  }, [id]);

  const genres =
    movieDetailsData.genres &&
    movieDetailsData.genres.map((item, i) => {
      if (movieDetailsData.genres.length - 1 === i) {
        return <React.Fragment key={i}>{item.name}</React.Fragment>;
      } else {
        return <React.Fragment key={i}>{item.name}, </React.Fragment>;
      }
    });
  // movieDetailsD  ata.genres.map((item) => item.name).join(", ");
  // && window.innerWidth > 640
  const spokenLang =
    movieDetailsData.spoken_languages &&
    movieDetailsData.spoken_languages.map((item, i) => {
      if (movieDetailsData.spoken_languages.length - 1 === i) {
        return <React.Fragment key={i}>{item.english_name}</React.Fragment>;
      } else {
        return <React.Fragment key={i}>{item.english_name}, </React.Fragment>;
      }
    });

  let year = function () {
    if (
      movieDetailsData.release_date &&
      typeof movieDetailsData.release_date === "string"
    ) {
      return movieDetailsData.release_date.substr(0, 4);
    }
  };
  let vote = String(movieDetailsData.vote_average).substring(0, 3) * 10 + "%";
  return (
    <div className="bg-[#120F1F] md:min-h-[100vh]">
      {movieDetailsData.backdrop_path && (
        <div
          className="m-auto my-0 w-full min-h-[50%] bg-cover bg-top relative"
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/w1280/${movieDetailsData.backdrop_path}')`,
          }}
        >
          <div className="bg-[#120F1F] opacity-40 absolute h-full w-full top-0 left-0"></div>
          <div className="relative container m-auto p-3 flex flex-col md:flex-row">
            {movieDetailsData.poster_path && (
              <img
                className="md:w-[20rem] md:my-1"
                src={
                  "https://image.tmdb.org/t/p/w500/" +
                  movieDetailsData.poster_path
                }
              />
            )}
            {!movieDetailsData.poster_path && (
              <div className="m-auto my-1 bg-gray-300 w-[80%] h-[70%] min-h-[10em]">
                <p className="flex justify-center items-center h-full">
                  Image Not Found
                </p>
              </div>
            )}
            <div className="font-semibold flex justify-center flex-col text-white ml-2">
              <h2 className="font-bold p-1 text-3xl md:text-5xl">
                {movieDetailsData.original_title}({year()})
              </h2>
              <p className="p-1">
                <em>{movieDetailsData.tagline}</em>
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col justify-center font-semibold text-white ml-2">
          <p className="p-1">Status: {movieDetailsData.status}</p>
          <p className="p-1">Bugdet: {movieDetailsData.budget}</p>
          <p className="p-1">Genres: {genres}</p>
          <p className="p-1">Spoken Languages: {spokenLang}</p>
          <p className="p-1">Runtime: {movieDetailsData.runtime} min</p>
          <p className="p-1">Popularity: {movieDetailsData.popularity}</p>
          <p className="p-1">Release Date: {movieDetailsData.release_date}</p>
          <p className="p-1">
            Original Language: {movieDetailsData.original_language}
          </p>
        </div>
        <div className="flex flex-col p-2 mx-3 my-3 md:my-3 md:m-auto md:w-[35%] bg-[#242038] text-white rounded-lg">
          <p>Overview: {movieDetailsData.overview}</p>
          <div className="m-auto pt-2">
            <span className="text-success">{vote}&nbsp;</span>
            rating out of {movieDetailsData.vote_count} people
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
