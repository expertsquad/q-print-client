import React from "react";

const MostPopularSelectOption = () => {
  return (
    <span className="border md:py-3 py-2 px-3 rounded-lg w-full md:w-fit shadow-lg md:shadow-none">
      <select
        className="py-2 rounded-md outline-none border-none w-full md:w-min bg-transparent "
        name=""
        id=""
      >
        <option value="MostPopular" className="bg-white text-gray-800">
          Most Popular
        </option>
        <option value="Recent" className="bg-white text-gray-800">
          Recent
        </option>
        <option value="HighPrice" className="bg-white text-gray-800">
          High Price
        </option>
        <option value="LowPrice" className="bg-white text-gray-800">
          Low Price
        </option>
      </select>
    </span>
  );
};

export default MostPopularSelectOption;
