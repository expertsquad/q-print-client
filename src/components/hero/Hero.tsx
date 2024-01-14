"use client";

import { heroItems } from "@/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroItems.length);
    }, 3000); // Change 7000 to the desired interval in milliseconds

    return () => clearInterval(intervalId);
  }, []);

  const showSlide = (index: number) => {
    return { display: index === currentSlide ? "block" : "none" };
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      <div className="carousel w-full relative">
        {heroItems?.map((item, index) => (
          <div
            key={item?._id}
            id={item?._id}
            className="carousel-item w-full bg-[#f2f4f5] h-[480px]"
            style={showSlide(index)}
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold ">{item?.company}</h2>
                <p>{item?.about}</p>
              </div>
              <div>
                <Image
                  src={item?.picture}
                  alt="hero item images"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        ))}
        <div className="indicators absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroItems?.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`indicator w-[10px] h-[10px] rounded-full cursor-pointer ${
                index === currentSlide ? "bg-[#E73C17]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
