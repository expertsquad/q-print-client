"use client";
import Image from "next/image";
import ShopNowButton from "../UI/btn/ShopNowButton";
import HeroItemSlide from "./HeroItemSlide";
import { useGetHeroSliderQuery } from "@/redux/features/dealWidgetSliderEtc/heroSlider";
import { imageUrl } from "@/constants/imageUrl";
import TopSmallBanner from "./TopSmallBanner";
import BottomSmallBanner from "./BottomSmallBanner";

const Hero = () => {
  const { data, isLoading } = useGetHeroSliderQuery("");

  const sliderArray = Object.values(data?.data?.slider || {});

  // <== Get the right side slider card Top Offer ==>
  const topOffer = data?.data?.topOffer;

  // <== Get the right side slider card Bottom Offer ==>
  const bottomOffer = data?.data?.bottomOffer;

  return (
    <section className="flex w-full md:flex-row lg:flex-row flex-col gap-7">
      <div className="md:w-8/12 lg:w-8/12 w-full">
        {/* === Left side slider with three nested section === */}
        <HeroItemSlide isLoading={isLoading} sliderArray={sliderArray} />
      </div>

      {
        isLoading ? "Loading.."
          :

          <div className="flex flex-col gap-4 h-full md:h-auto lg:h-auto rounded-lg">
            <TopSmallBanner topOffer={topOffer} />
            <BottomSmallBanner bottomOffer={bottomOffer} />
          </div>}
    </section >
  );
};

export default Hero;
