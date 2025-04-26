const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGRiNGY0ODE5NDIzODIwNmUyY2E4NzE0MDUyMWEwMiIsInN1YiI6IjY1NTc3YzgyZDA1MWQ5MDBjNmYwNzA0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sxRHmZufWSkNfDjo4kcPxb6R7wZLEPXVEO5a-H-UEgM",
  },
};
const baseURL = "https://api.themoviedb.org/3";
export const fetchTrendingMovies = async function (pageNum) {
  return await fetch(
    baseURL + `/trending/movie/week?language=en-US&page=${pageNum}`,
    options
  );
};

export const fetchTrendingSeries = async function () {
  return await fetch(baseURL + "/trending/tv/week?language=en-US", options);
};

export const fetchMovies = async function (movieName) {
  return await fetch(
    baseURL +
      "/search/movie?query=" +
      movieName +
      "&include_adult=false&language=en-US&page=1",
    options
  );
};

export const fetchSeries = async function (seriesName) {
  return await fetch(
    baseURL +
      "/search/tv?query=" +
      seriesName +
      "&include_adult=false&language=en-US&page=1",
    options
  );
};

export const fetchPerson = async function (personsName) {
  return await fetch(
    baseURL +
      "/search/person?query=" +
      personsName +
      "&include_adult=false&language=en-US&page=1",
    options
  );
};

export const fetchMovieDetails = async function (movieID) {
  return await fetch(
    baseURL + "/movie/" + movieID + "?language=en-US",
    options
  );
};

export const fetchSeriesDetails = async function (serieID) {
  return await fetch(baseURL + "/tv/" + serieID + "?language=en-US", options);
};

export const fetchPersonsDetails = async function (personID) {
  return await fetch(
    baseURL + "/person/" + personID + "?language=en-US",
    options
  );
};

export const fetchPersonsMovieCredits = async function (personID) {
  return await fetch(
    baseURL + "/person/" + personID + "/movie_credits",
    options
  );
};

export const fetchMovieCast = async function (movieID) {
  return await fetch(
    baseURL + "/movie/" + movieID + "/credits?language=en-US",
    options
  );
};

export const fetchSeriesCast = async function (serieID) {
  return await fetch(
    baseURL + "/tv/" + serieID + "/credits?language=en-US",
    options
  );
};
