"use client";
import { setFilterOption } from "@/redux/features/category/categoryFilterSlice";
import { useAppDispatch } from "@/redux/hook";

const MostPopularSelectOption = () => {
  const dispatch = useAppDispatch();
  return (
    <span className="border md:py-3 py-2 px-3 rounded-lg w-full md:w-fit shadow-lg md:shadow-none">
      <select
        title="Filter Options"
        className="py-2 rounded-md outline-none border-none w-full md:w-min bg-transparent text-gray-700 active:text-fuchsia-700"
        name="options"
        id=""
        onChange={(e) => dispatch(setFilterOption(e.target.value))}
      >
        <option value="MostPopular" className=" text-gray-800">
          Most Popular
        </option>
        <option value="Recent" className=" text-gray-800">
          Recent
        </option>
        <option value="HighPrice" className=" text-gray-800">
          High Price
        </option>
        <option value="LowPrice" className=" text-gray-800">
          Low Price
        </option>
      </select>
    </span>
  );
};

export default MostPopularSelectOption;
