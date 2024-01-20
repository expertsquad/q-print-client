"use client";

import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const PriceRangeSlider = () => {
  const [rangeValues, setRangeValues] = useState([0, 10000]);

  const handleRangeChange = (newValues) => {
    setRangeValues(newValues);
  };

  return (
    <div className="flex items-center space-x-4 mt-5">
      <label className="text-sm">Price Range:</label>
      <div className="flex items-center space-x-4">
        <span>{rangeValues[0]}</span>
        <Slider
          min={0}
          max={10000}
          range
          value={rangeValues}
          onChange={handleRangeChange}
          className="w-64"
        />
        <span>{rangeValues[1]}</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
