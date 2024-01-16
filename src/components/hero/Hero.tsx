"use client";

import { heroItems } from "@/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ShopNowButton from "../UI/btn/ShopNowButton";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  weight: "400",
  subsets: ["cyrillic"],
});

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroItems.length);
    }, 7000);

    return () => clearInterval(intervalId);
  }, []);

  const showSlide = (index: number) => {
    return { display: index === currentSlide ? "block" : "none" };
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full">
      <div className="carousel w-full ">
        {heroItems?.map((item, index) => (
          <div
            key={item?._id}
            id={item?._id}
            className="carousel-item w-full bg-[#f3f5f2] h-[250px] md:h-[480px] "
            style={showSlide(index)}
          >
            <div className="flex items-center justify-between px-9 py-4 h-full">
              <div className="flex flex-col  ">
                <h2
                  className={` [font-size:_clamp(1.25em,5vw,4em)] font-bold leading-none  ${nunito.className}`}
                >
                  {item?.company}
                </h2>
                <p
                  className={`[font-size:_clamp(0.85em,5vw,1em)] ${nunito.className} text-gray-500 `}
                >
                  {item?.about}
                </p>
                <h4 className="[font-size:_clamp(1.6em,4vw,1em)] main-text-color font-semibold mt-4 ">
                  2800 QAR
                </h4>

                <div className="mt-4">
                  <ShopNowButton href="#" />
                </div>

                <div className="indicators  gap-2 flex mt-8 ">
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
              <div className="pr-0 md:pr-32">
                <Image
                  src={item?.picture}
                  alt="hero item images"
                  width={280}
                  height={280}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
