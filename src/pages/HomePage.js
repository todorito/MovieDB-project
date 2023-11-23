import React from "react";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";

const HomePage = function ({ allResults }) {
  return (
    <>
      <div className="min-h-full">
        <SearchBar />
        <h1 className="text-white text-2xl w-auto bg-purple-500 p-2 md:w-1/5 flex justify-center mx-auto mt-5">
          Trending Now
        </h1>
        {/* <Button secondary rounded>
          Click
        </Button> */}
        {/* <div>{movieData.results && movieData.results[0].id}</div> */}
        <div className="flex flex-wrap flex-row justify-center">
          {allResults}
        </div>
        <Button danger rounded outline>
          Hey man
        </Button>
      </div>
    </>
  );
};

export default HomePage;
