import React from "react";
import { useNavigate } from "react-router-dom";

const CreditsInfo = ({ data }) => {
  const navigateToPersonDetails = useNavigate();

  const getPersonDetails = function () {
    navigateToPersonDetails(`/personDetails/${data.id}`);
  };

  return (
    <div
      onClick={getPersonDetails}
      className="relative background-neutral text-white rounded m-[2%] p-0 min-w-[96%] overflow-hidden cursor-pointer min-w-[156px]"
    >
      {data.profile_path && (
        <img
          className="m-auto object-cover w-full height-[80%]"
          src={"https://image.tmdb.org/t/p/w500/" + data.profile_path}
          alt={"Photo of" + data.name}
        />
      )}
      {!data.profile_path && (
        <div className="my-1 bg-gray-300 w-[100%] h-[70%] min-h-[10em]">
          <p className="flex justify-center items-center h-full">
            Image Not Found
          </p>
        </div>
      )}
      <p className="text-center py-2">
        <p className="font-semibold">{data.name}</p>
        <p>&nbsp;As {data.character}</p>
      </p>
    </div>
  );
};

export default CreditsInfo;
