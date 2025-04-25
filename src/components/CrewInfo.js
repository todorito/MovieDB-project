import React from "react";

const CrewInfo = ({ data }) => {
  return (
    <div className="relative background-neutral text-white rounded m-[2%] p-0 pb-2 min-w-[96%] overflow-hidden cursor-pointer">
      {data.name}
      <p>Department: {data.department}</p>
      <p>{data.job}</p>
    </div>
  );
};

export default CrewInfo;
