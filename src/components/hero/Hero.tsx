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
    <section className="flex w-full md:flex-row flex-col gap-5">
      <div className="md:w-8/12 lg:w-8/12 w-full h-[280px] md:h-[450px]">
        {/* === Left side slider with three nested section === */}
        <HeroItemSlide isLoading={isLoading} sliderArray={sliderArray} />
      </div>

      <div className="w-full">
        {isLoading ? (
          <div className="flex flex-col gap-4 h-full md:h-auto">
            {[...Array(2)].map((_, index) => (
              <SmallBannerSkeleton index={index} key={index} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-5 w-full">
            <div className="h-[215px]">
              <TopSmallBanner topOffer={topOffer} />
            </div>
            <div className="h-[215px]">
              <BottomSmallBanner bottomOffer={bottomOffer} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
