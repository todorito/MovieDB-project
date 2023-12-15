const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGRiNGY0ODE5NDIzODIwNmUyY2E4NzE0MDUyMWEwMiIsInN1YiI6IjY1NTc3YzgyZDA1MWQ5MDBjNmYwNzA0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sxRHmZufWSkNfDjo4kcPxb6R7wZLEPXVEO5a-H-UEgM",
  },
};

export const fetchTrendingMovies = async function () {
  return await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    options
  );
};

export const searchMovies = async function (movieName) {
  return await fetch(
    "https://api.themoviedb.org/3/search/movie?query=" +
      movieName +
      "&include_adult=false&language=en-US&page=1",
    options
  );
};

export const searchMovieDetails = async function (movieID) {
  return await fetch(
    "https://api.themoviedb.org/3/movie/" + movieID + "?language=en-US",
    options
  );
};
