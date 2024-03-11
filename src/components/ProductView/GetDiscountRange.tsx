"use client";
import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Confetti from "../shared/Confetti";

interface PriceRangeProps {
  priceRange?: any;
}

const GetDiscountRange = ({ priceRange }: PriceRangeProps) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (priceRange <= 599) {
      setValue(0);
    } else if (priceRange <= 1200) {
      setValue(20);
    } else if (priceRange <= 1800) {
      setValue(40);
    } else if (priceRange <= 2400) {
      setValue(60);
    } else if (priceRange <= 3000) {
      setValue(80);
    } else {
      setValue(100);
    }
  }, [priceRange]);

  // Rest of your component code...

  const gradientBackground = {
    background:
      "-webkit-linear-gradient(90deg, #c83b62 0.32%, #7f35cd 102.21%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const percentage = `${value}%`;

  return (
    <div className="bg-white rounded-lg flex items-center justify-center gap-4 ">
      <Slider
        range={false}
        value={value}
        className="w-full mt-4"
        trackStyle={{ background: gradientBackground.background }}
        railStyle={{ background: "#d593" }}
        handleStyle={{
          background: "#fff",
          border: "4px solid #7F35CD",
        }}
      />
      <div className="mt-2 text-center main-text-color font-extrabold">
        {percentage}
      </div>

      {/* confitti added here */}

      {/* <Confetti /> */}
    </div>
  );
};

export default GetDiscountRange;
