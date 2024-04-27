"use client";
import Image from "next/image";
import ShopNowButton from "../UI/btn/ShopNowButton";
import HeroItemSlide from "./HeroItemSlide";
import { useGetHeroSliderQuery } from "@/redux/features/dealWidgetSliderEtc/heroSlider";
import { imageUrl } from "@/constants/imageUrl";

const Hero = () => {
  const { data } = useGetHeroSliderQuery("");

  const sliderArray = Object.values(data?.data?.slider || {});

  // <== Get the right side slider card Top Offer ==>
  const topOffer = data?.data?.topOffer;

  // <== Get the right side slider card Bottom Offer ==>
  const bottomOffer = data?.data?.bottomOffer;

  return (
    <section className="flex w-full md:flex-row lg:flex-row flex-col gap-7">
      <div className="md:w-8/12 lg:w-8/12 w-full">
        {/* === Left side slider with three nested section === */}
        <HeroItemSlide sliderArray={sliderArray} />
      </div>
      {/* === Right side slider === */}
      <div className="flex flex-col gap-4 h-full md:h-auto lg:h-auto rounded-lg">
        {/* == Top One Card == */}
        <div className="bg-[#F2F4F5] flex justify-center items-center p-5 gap-4 rounded-lg flex-1 w-full">
          <div className="relative w-36 h-36">
            <div className="absolute w-full h-full top-0 left-0 object-cover">
              <Image
                src={`${imageUrl}${topOffer?.productPhoto}`}
                alt="Hero discount item"
                fill
                sizes="200px"
                priority={true}
              />
            </div>
          </div>
          <div className="">
            <h2 className="[font-size:_clamp(1em,5vw,1.5em)] leading-7">
              {topOffer?.title}
            </h2>
            <h3 className="main-text-color font-bold">{topOffer?.price} QR</h3>
            <ShopNowButton buttonText={topOffer?.buttonText} />
          </div>
        </div>

        {/* == Bottom One Card == */}
        <div className="bg-[#3bd9f58e] flex justify-center items-center p-5 gap-4 rounded-lg flex-1 w-full">
          <div className="">
            <h2 className="[font-size:_clamp(1em,5vw,1.2em)]">
              {bottomOffer?.offerTag}
            </h2>
            <h2 className="[font-size:_clamp(1em,5vw,1.5em)] leading-6 my-1.5">
              {bottomOffer?.title}
            </h2>
            <ShopNowButton buttonText={bottomOffer?.buttonText} />
          </div>

          <div className=" relative w-36 h-36">
            <div className="absolute w-full h-full top-0 left-0 object-cover">
              <Image
                src={`${imageUrl}${bottomOffer?.productPhoto}`}
                alt="Hero discount item"
                fill
                sizes="200px"
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
