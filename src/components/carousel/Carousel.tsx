"use client";

import Image from "next/image";
import { imageUrl } from "@/constants/imageUrl";
import ShopNowButton from "../UI/btn/ShopNowButton";

interface HeroSliderProps {
  backgroundPhoto?: string;
  backgroundColor?: string;
  productPhoto: string;
  sliderTag: string;
  title: string;
  price: number;
  discountPercentage: number;
  buttonText: string;
  link: string;
  description: string;
  _id: string;
}

const Carousel = ({ item }: { item: HeroSliderProps }) => {
  const discountedPrice =
    item?.price - item?.price * (item?.discountPercentage / 100);

  return (
    <div
      key={item?._id}
      className={`carousel-item w-full rounded-lg `}
      style={{
        backgroundColor: `${
          item?.backgroundColor !== "" && `${item?.backgroundColor}`
        }`,
        backgroundImage: `url(${
          item?.backgroundColor === "" && imageUrl + item?.backgroundPhoto
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
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

          <div className="flex items-center gap-x-2 font-bold">
            <span className="text-lg">
              {item?.price}
              <small className="ml-0.5">QAR</small>
            </span>
            <del>
              {discountedPrice}
              <small className="ml-0.5">QAR</small>
            </del>
            <span>{item?.discountPercentage}%</span>
          </div>
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
