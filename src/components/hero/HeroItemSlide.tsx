"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import ShopNowButton from "../UI/btn/ShopNowButton";
import { Nunito } from "next/font/google";

interface HeroItem {
  _id: string;
  company: string;
  about: string;
  picture: string;
}

const nunito = Nunito({
  weight: "400",
  subsets: ["cyrillic"],
});

const HeroItemSlide: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const heroItems: HeroItem[] = [
    {
      _id: "1",
      company: "New Colectin Here",
      about: "There is will coming some description ",
      picture:
        "https://www.transparentpng.com/thumb/printer/TdXPfS-canon-printer-icon.png",
    },
    {
      _id: "2",
      company: "Get Best Deals",
      about: "Get the best deals here is will coming some description",
      picture:
        "https://www.transparentpng.com/thumb/printer/iqV2Vo-printer-free-download-transparent.png",
    },
    {
      _id: "2",
      company: "New Arrived Product",
      about: "New product arrived deals here is will coming some description",
      picture:
        "https://www.transparentpng.com/thumb/printer/iqV2Vo-printer-free-download-transparent.png",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroItems.length);
    }, 7000);

    return () => clearInterval(intervalId);
  }, [heroItems.length]);

  const showSlide = (index: number) => {
    return { display: index === currentSlide ? "block" : "none" };
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel w-full rounded-lg ">
      {heroItems?.map((item, index) => (
        <div
          key={item._id}
          id={item._id}
          className="carousel-item w-full bg-[#f3f5f2] h-[350px] md:h-[480px] lg::h-[480px] "
          style={showSlide(index)}
        >
          <div className="flex items-center justify-between px-9 py-4 h-full">
            <div className="flex flex-col  ">
              <h2
                className={` [font-size:_clamp(1em,5vw,3em)] font-bold leading-none  ${nunito.className}`}
              >
                {item.company}
              </h2>
              <p
                className={`[font-size:_clamp(0.85em,5vw,1em)] ${nunito.className} text-gray-500 `}
              >
                {item.about}
              </p>

              <div className="mt-4">
                <ShopNowButton href="#" />
              </div>

              <div className="indicators  gap-2 flex mt-8 ">
                {heroItems?.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`indicator w-[10px] h-[10px] rounded-full cursor-pointer ${
                      index === currentSlide ? "main-bg-color" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="pr-0 px-5">
              <Image
                src={item.picture}
                alt="hero item images"
                width={280}
                height={280}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroItemSlide;
