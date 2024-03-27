"use client";
import React, { useState } from "react";

const ColorPickUp = ({ variants }: any) => {
  const colors = variants?.map((variant: any) => {
    return variant?.variantName;
  });

  const [selectedCircle, setSelectedCircle] = useState(0);

  const handleClick = (index: any) => {
    setSelectedCircle(index === selectedCircle ? null : index);
  };

  const renderCircles = () => {
    return variants?.map((color: any, index: number) => {
      return (
        <div
          key={index}
          className={`w-7 h-7 rounded-full bg-white cursor-pointer flex items-center justify-center border ${
            index === selectedCircle
              ? `border-${color?.variantName} border-2 border-[#${color?.variantName}]`
              : "border-transparent"
          }`}
          onClick={() => handleClick(index)}
        >
          <div
            className={`h-5 w-5 rounded-full`}
            style={{ backgroundColor: color?.variantName }}
          ></div>
        </div>
      );
    });
  };

  return <>{renderCircles()}</>;
};

export default ColorPickUp;
