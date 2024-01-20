"use client";
import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const PriceRangeSlider = () => {
  const [range, setRange] = useState([20, 80]); // Initial range values

  const handleRangeChange = (newRange) => {
    setRange(newRange);
  };

  return (
    <div className="mt-8">
      <p className="mb-4">
        Selected Range: {range[0]} - {range[1]}
      </p>
      <Slider
        range
        min={0}
        max={100}
        value={range}
        onChange={handleRangeChange}
        className="w-full"
      />
    </div>
  );
};

export default PriceRangeSlider;
