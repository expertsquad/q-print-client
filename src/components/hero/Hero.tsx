"use client";
import HeroItemSlide from "./HeroItemSlide";
import { useGetHeroSliderQuery } from "@/redux/features/dealWidgetSliderEtc/heroSlider";
import TopSmallBanner from "./TopSmallBanner";
import BottomSmallBanner from "./BottomSmallBanner";
import SmallBannerSkeleton from "../shared/Skeleton/SmallBannerSkeleton";

const Hero = () => {
  const { data, isLoading } = useGetHeroSliderQuery("");

  const sliderArray = Object.values(data?.data?.slider || {});

  // <== Get the right side slider card Top Offer ==>
  const topOffer = data?.data?.topOffer;

  // <== Get the right side slider card Bottom Offer ==>
  const bottomOffer = data?.data?.bottomOffer;

  return (
    <section className="flex w-full md:flex-row lg:flex-row flex-col gap-5">
      <div className="md:w-8/12 lg:w-8/12 w-full">
        {/* === Left side slider with three nested section === */}
        <HeroItemSlide isLoading={isLoading} sliderArray={sliderArray} />
      </div>

      {isLoading ? (
        <div className="flex flex-col gap-4 h-full md:h-auto">
          {[...Array(2)].map((_, index) => (
            <SmallBannerSkeleton index={index} key={index} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-5 h-full md:h-auto w-full">
          <TopSmallBanner topOffer={topOffer} />
          <BottomSmallBanner bottomOffer={bottomOffer} />
        </div>
      )}
    </section>
  );
};

export default Hero;
