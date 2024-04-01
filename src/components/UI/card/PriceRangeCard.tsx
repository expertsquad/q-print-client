"use client";
import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setPriceRange } from "@/redux/features/filterByPrice/FilterByPriceSlice";

const PriceRangeCard = () => {
  const dispatch = useAppDispatch();
  const priceRange = useAppSelector((state) => state.priceRangeSlice);

  const [range, setRange] = useState([
    priceRange.minPrice,
    priceRange.maxPrice,
  ]);

  useEffect(() => {
    setRange([priceRange.minPrice, priceRange.maxPrice]);
  }, [priceRange]);

  const handleRangeChange = (newRange: any) => {
    setRange(newRange);
  };

  // const handleInputChange = (index: any, value: string) => {
  //   // Convert the input value to a number
  //   const numericValue = parseFloat(value);

  //   // Check if the input value is a valid number
  //   if (!isNaN(numericValue)) {
  //     const newRange = [...range];
  //     newRange[index] = numericValue;
  //     setRange(newRange);
  //     dispatch(setPriceRange({ minPrice: newRange[0], maxPrice: newRange[1] }));
  //     dispatch(setPriceRange({ minPrice: newRange[0], maxPrice: newRange[1] }));
  //   }
  // };

  const gradientBackground = {
    background:
      "-webkit-linear-gradient(90deg, #c83b62 0.32%, #7f35cd 102.21%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div className=" p-6 mt-5 rounded-lg shadow-md">
      <h1 className="text-[#00000066] font-semibold text-base">PRICE RANGE</h1>
      <Slider
        range
        min={0}
        max={200000}
        value={range}
        onChange={handleRangeChange}
        className="w-full mt-4"
        trackStyle={[{ background: gradientBackground.background }]}
        railStyle={{ background: "#d593" }}
        handleStyle={[
          {
            // background: "#fff",
            border: "4px solid #7F35CD",
          },
          {
            // background: "#fff",
            border: "4px solid #7F35CD",
          },
        ]}
      />
      <div className="flex justify-between items-center mt-4">
        <div className="rounded-lg">
          <input
            title="minumum range"
            type="text"
            name="priceRange"
            value={range[0]}
            onChange={(e) => dispatch(setPriceRange(e.target.value))}
            className="w-[120px] p-2 rounded-lg border text-center focus:outline-none focus:border-fuchsia-700 focus:shadow-[0px_4px_24px_0px_rgba(127,_53,_205,_0.15)]"
          />
        </div>
        <div className="rounded-lg">
          <input
            title="maximum range"
            name="priceRange"
            type="text"
            value={range[1]}
            onChange={(e) => dispatch(setPriceRange(e.target.value))}
            className="w-[120px] p-2 rounded-lg border text-center focus:outline-none focus:border-fuchsia-700 focus:shadow-[0px_4px_24px_0px_rgba(127,_53,_205,_0.15)]"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceRangeCard;
