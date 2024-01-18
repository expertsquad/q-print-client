// CircleButton.jsx
"use client";

import React, { useState } from "react";

const ColorPickUp = () => {
  const [selectedCircle, setSelectedCircle] = useState(null);

  const handleClick = (index: any) => {
    setSelectedCircle(index === selectedCircle ? null : index);
  };

  const renderCircles = () => {
    const circles = [];
    for (let i = 0; i < 4; i++) {
      circles.push(
        <div
          key={i}
          className={`w-7 h-7 rounded-full bg-white cursor-pointer flex items-center justify-center border ${
            i === selectedCircle
              ? "border-fuchsia-700 border-2"
              : "border-transparent"
          }`}
          onClick={() => handleClick(i)}
        >
          <div className="h-5 w-5 main-bg-color rounded-full "></div>
        </div>
      );
    }
    return circles;
  };

  return <>{renderCircles()}</>;
};

export default ColorPickUp;
