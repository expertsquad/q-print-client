"use client";
import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const PriceRangeCard = () => {
  const [range, setRange] = useState([2000, 8000]);

  const handleRangeChange = (newRange: any) => {
    setRange(newRange);
  };

  const handleInputChange = (index: number, value: number) => {
    const newRange = [...range];
    newRange[index] = value;
    setRange(newRange);
  };

  const gradientBackground = {
    background:
      "-webkit-linear-gradient(90deg, #c83b62 0.32%, #7f35cd 102.21%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div className="bg-white p-6 mt-5 rounded-lg shadow-md">
      <h1 className="text-[#00000066] font-semibold text-base">PRICE RANGE</h1>
      <Slider
        range
        min={0}
        max={10000}
        value={range}
        onChange={handleRangeChange}
        className="w-full mt-4"
        trackStyle={[{ background: gradientBackground.background }]}
        railStyle={{ background: "#d593" }}
        handleStyle={[
          {
            background: "#fff",
            border: "4px solid #7F35CD",
          },
          {
            background: "#fff",
            border: "4px solid #7F35CD",
          },
        ]}
      />
      <div className="flex justify-between items-center mt-4">
        <div className="rounded-lg">
          <input
            type="text"
            value={range[0]}
            onChange={(e) => handleInputChange(0, +e.target.value)}
            className="w-[120px] p-2 rounded-lg border text-center focus:outline-none focus:border-fuchsia-700"
          />
        </div>
        <div className="rounded-lg">
          <input
            type="text"
            value={range[1]}
            onChange={(e) => handleInputChange(1, +e.target.value)}
            className="w-[120px] p-2 rounded-lg border text-center focus:outline-none focus:border-fuchsia-700"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceRangeCard;
