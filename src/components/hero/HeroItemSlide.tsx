"use client";
import React, { useState, useEffect } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Carousel from "../carousel/Carousel";
import HeroItemSliderSkeleton from "../shared/Skeleton/HeroItemSliderSkeleton";

const HeroItemSlide = ({ sliderArray, isLoading }: any) => {
  const [curr, setCurr] = useState(0);
  const [autoSlideInterval, setAutoSlideInterval] =
    useState<NodeJS.Timeout | null>(null);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? sliderArray.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === sliderArray.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
    }
    const interval = setInterval(next, 10000);
    setAutoSlideInterval(interval);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curr]);

  return (
    <div className="overflow-hidden relative group">
      {isLoading ? (
        <div className="w-full">
          <HeroItemSliderSkeleton />
        </div>
      ) : (
        <div
          className="h-[280px] md:h-[450px] flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
          onClick={prev}
        >
          {sliderArray?.map((item: any, index: any) => (
            <Carousel key={index} item={item} />
          ))}
        </div>
      )}

      <div className="absolute inset-0 flex items-center justify-between p-4 group invisible group-hover:visible group-hover:duration-200 group/item">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:text-white hover:bg-main-bg-color duration-150 -ml-11 group-hover/item:-ml-3 delay-100"
        >
          <IconChevronLeft stroke={2} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:text-white hover:bg-main-bg-color duration-150 -mr-11 group-hover/item:-mr-3 delay-100"
        >
          <IconChevronRight stroke={2} />
        </button>
      </div>
      <div className="absolute bottom-2 md:bottom-10 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {sliderArray?.map((s: any, i: number) => (
            <div
              key={i}
              className={`transition-all w-2 h-2 bg-main-bg-color rounded-full  ${
                curr === i ? " pr-4 delay-100 rounded-full " : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroItemSlide;
