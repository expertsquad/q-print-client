"use client";
import HeroItemSliderSkeleton from "../shared/Skeleton/HeroItemSliderSkeleton";
import CarouselItem from "./CarouselItem";
import CarouselItemTwo from "./CarouselItemTwo";

const HeroItemSlide = ({ sliderArray, isLoading }: any) => {
  return (
    <div className="carousel w-full rounded-lg ">
      {isLoading ? (
        <HeroItemSliderSkeleton />
      ) : (
        sliderArray?.map((item: any, index: any) => (
          <CarouselItem
            key={index}
            index={index}
            item={item}
            sliderArray={sliderArray}
          />
        ))
      )}
    </div>
  );
};

export default HeroItemSlide;
