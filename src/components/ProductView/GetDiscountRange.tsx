import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

interface IRange {
  expectedAmount: number;
  totalAmount: number;
}

const GetDiscountRange = ({ expectedAmount, totalAmount }: IRange) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    // Calculate the percentage
    const percentage = (totalAmount / expectedAmount) * 100;
    // Set the slider value to the calculated percentage
    setValue(percentage >= 100 ? 100 : percentage);
  }, [expectedAmount, totalAmount]);

  const gradientBackground = {
    background:
      "-webkit-linear-gradient(90deg, #c83b62 0.32%, #7f35cd 102.21%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const percentageText = `${value.toFixed(2)}%`;

  return (
    <div className="bg-white rounded-lg flex items-center justify-center gap-4">
      <Slider
        range={false}
        value={value}
        className="w-full"
        trackStyle={{ background: gradientBackground.background }}
        railStyle={{ background: "#d593" }}
        handleStyle={{
          background: "#fff",
          border: "4px solid #7F35CD",
        }}
        onChange={(newValue) =>
          setValue(Array.isArray(newValue) ? newValue[0] : newValue)
        }
      />
      <div className="mt-2 md:mt-auto text-center main-text-color font-extrabold">
        {percentageText}
      </div>
    </div>
  );
};

export default GetDiscountRange;
