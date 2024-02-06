"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import ShopNowButton from "../UI/btn/ShopNowButton";

interface HeroItem {
  _id: string;
  company: string;
  about: string;
  picture: string;
}

const HeroItemSlide: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const heroItems: HeroItem[] = [
    {
      _id: "1",
      company: "New Colection",
      about:
        "Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD. ",
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
      _id: "3",
      company: "New Arrived",
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
          className="carousel-item w-full bg-[#f3f5f2] h-[320px] md:h-[450px] lg::h-[450px] "
          style={showSlide(index)}
        >
          <div className="flex items-center gap-5 justify-between lg:px-9 md:px-6 px-4 py-4 h-full w-full">
            <div className="flex flex-col w-6/12  ">
              <h3 className="font-bold main-text-color [font-size:_clamp(0.5em,60vw,0.9em)] animate-bounce">
                -- THE BEST PLACE TO PLAY
              </h3>
              <h2
                className={` lg:text-4xl md:text-lg text-lg font-bold leading-0 line-clamp-2    `}
              >
                {item.company}
              </h2>
              <p
                className={`[font-size:_clamp(0.85em,5vw,1em)] text-gray-500 line-clamp-2 `}
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

            {/* hero img */}

            <div className=" ">
              <Image
                src={item.picture}
                alt="hero item images"
                width={260}
                height={260}
                className=" "
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroItemSlide;
