import React, { useState, useEffect } from "react";
import { fetchPersonsDetails } from "../api";
import { fetchPersonsMovieCredits } from "../api";
import { useParams } from "react-router-dom";
import PersonMovieInfo from "../components/PersonMovieInfo";

const PersonDetailsPage = () => {
  const [personData, setPersonData] = useState({});
  const [actorMovieData, setActorMovieData] = useState({});

  const { id } = useParams();

  const personDetails = function (id) {
    fetchPersonsDetails(id)
      .then((response) => response.json())
      .then((data) => {
        setPersonData(data);
      })
      .catch((err) => console.error(err));
  };

  const actorMovies = function () {
    fetchPersonsMovieCredits(id)
      .then((response) => response.json())
      .then((data) => {
        setActorMovieData(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    personDetails(id);
    actorMovies(personData.id);
  }, [id]);

  return (
    <div className="bg-[#120F1F] md:min-h-[100vh]">
      <div className="relative container m-auto p-3 flex flex-col md:flex-row">
        {personData.profile_path && (
          <img
            className="md:w-[20rem] md:my-1"
            alt={personData.name}
            src={"https://image.tmdb.org/t/p/w500/" + personData.profile_path}
          />
        )}
        {!personData.profile_path && (
          <div className="m-auto my-1 bg-gray-300 w-[80%] h-[70%] min-h-[10em]">
            <p className="flex justify-center items-center h-full">
              Image Not Found
            </p>
          </div>
        )}

        <div className="font-semibold flex justify-center flex-col text-white ml-2">
          <h2 className="font-bold p-1 text-3xl md:text-5xl">
            {personData.name}
          </h2>
          {personData.biography && (
            <>
              <h4>Biography</h4>
              <p className="p-1">
                <em>{personData.biography}</em>
              </p>
            </>
          )}
        </div>
      </div>
      <div className="text-white container m-auto p-3 flex flex-col md:flex-row">
        <div className="md:w-[20rem] md:my-1 shrink-0">
          Personal Info
          {personData.birthday && <h6>Birthday {personData.birthday}</h6>}
          {personData.deathday && <h6> Day of Death: {personData.deathday}</h6>}
          {personData.place_of_birth && (
            <h6>Place of Birth {personData.place_of_birth}</h6>
          )}
        </div>
        <div className=" w-full">
          <h2 className="header-medium-strong">Movies Played At</h2>
          <div className="grid lg:grid-cols-5 md:grid-cols-4 gap-4">
            {actorMovieData?.cast?.map((movie, index) => {
              return (
                <PersonMovieInfo
                  label="Character"
                  description={movie.character}
                  id={movie.id}
                  overview={movie.overview}
                  movie={movie}
                  index={index}
                />
              );
            })}
          </div>
          {actorMovieData?.crew?.length > 0 && (
            <h2 className="header-medium-strong">Other Job Description</h2>
          )}
          <div className="grid lg:grid-cols-5 md:grid-cols-4 gap-4">
            {actorMovieData?.crew?.map((movie, index) => {
              return (
                <PersonMovieInfo
                  label="Job"
                  description={movie.job}
                  id={movie.id}
                  overview={movie.overview}
                  movie={movie}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonDetailsPage;
