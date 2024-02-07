// Jaker Hossain
//Product View page color pick up

"use client";
import React, { useState } from "react";

const ColorPickUp = () => {
  const colors = ["#AA0213", "#264DD7", "#3E3E3E", "#4DE4C9"]; // These are demo color, color will be coming from backend

  const [selectedCircle, setSelectedCircle] = useState(0);

  const handleClick = (index: any) => {
    setSelectedCircle(index === selectedCircle ? null : index);
  };

  const renderCircles = () => {
    return colors.map((color, index) => (
      <div
        key={index}
        className={`w-7 h-7 rounded-full bg-white cursor-pointer flex items-center justify-center border ${
          index === selectedCircle
            ? `border-fuchsia-500 border-2` // Use color from array for border || border-${color.slice(1)} border-2
            : "border-transparent"
        }`}
        onClick={() => handleClick(index)}
      >
        <div
          className={`h-5 w-5 rounded-full`}
          style={{ backgroundColor: color }}
        ></div>
      </div>
    ));
  };

  return <>{renderCircles()}</>;
};

export default ColorPickUp;
