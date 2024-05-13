import React, { useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import { imageUrl } from "@/constants/imageUrl";
import ShopNowButton from "../UI/btn/ShopNowButton";

const Carousel = ({ item, index, sliderArray }: any) => {
  return (
    <div
      key={index}
      className="carousel-item w-full bg-[#f3f5f2] h-[320px] md:h-[450px] lg:h-[450px]"
      id={item._id}
    >
      <div className="flex items-center md:gap-5 gap-3.5 justify-between lg:px-9 md:px-6 px-4 py-4 h-full w-full">
        <div className="flex flex-col w-6/12">
          <h3 className="font-bold main-text-color [font-size:_clamp(0.5em,60vw,0.9em)] animate-bounce">
            {item?.sliderTag}
          </h3>
          <h2
            className={`lg:text-4xl md:text-lg text-lg font-bold leading-0 line-clamp-2`}
          >
            {item.title}
          </h2>
          <p
            className={`[font-size:_clamp(0.85em,5vw,1em)] text-gray-500 line-clamp-2 `}
          >
            {item.description}
          </p>
          <div className="mt-4">
            <ShopNowButton href={item?.link} />
          </div>
        </div>
        <div className="relative md:w-[250px] md:h-[250px] w-[180px] h-[150px]">
          <Image
            src={`${imageUrl}${item?.productPhoto}`}
            alt="hero item images"
            fill
            priority={true}
            sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-full top-0 left-0 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
