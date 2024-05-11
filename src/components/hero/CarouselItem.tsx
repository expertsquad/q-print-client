import Image from "next/image";
import React, { useEffect, useState } from "react";
import ShopNowButton from "../UI/btn/ShopNowButton";
import { imageUrl } from "@/constants/imageUrl";

interface HeroItem {
  _id: string;
  company: string;
  about: string;
  picture: string;
  sliderTag: string;
}

const CarouselItem = ({ item, index, sliderArray }: any) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderArray.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [sliderArray.length]);

  const showSlide = (index: number) => {
    return { display: index === currentSlide ? "block" : "none" };
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };
  return (
    <div
      className="carousel-item w-full bg-[#f3f5f2] h-[320px] md:h-[450px] lg:h-[450px] "
      id={item._id}
      style={showSlide(index)}
    >
      <div className="flex items-center md:gap-5 gap-3.5 justify-between lg:px-9 md:px-6 px-4 py-4 h-full w-full">
        <div className="flex flex-col w-6/12  ">
          <h3 className="font-bold main-text-color [font-size:_clamp(0.5em,60vw,0.9em)] animate-bounce">
            {item?.sliderTag}
          </h3>
          <h2
            className={` lg:text-4xl md:text-lg text-lg font-bold leading-0 line-clamp-2`}
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

          <div className="indicators  gap-2 flex mt-8 ">
            {sliderArray?.map((_: any, index: number) => (
              <div
                key={index}
                onClick={() => handleDotClick(index)}
                className={`indicator w-[10px] h-[10px] rounded-full cursor-pointer ${index === currentSlide ? "main-bg-color" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
        <div className="relative  md:w-[250px] md:h-[250px] w-[180px] h-[150px]">
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

export default CarouselItem;
