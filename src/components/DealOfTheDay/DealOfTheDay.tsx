"use client";
import Image from "next/image";
import dealDayOne from "@/assets/deal-day-1.svg";
import dealDayTwo from "@/assets/deal-day-2.svg";
import ShopNowButton from "../UI/btn/ShopNowButton";
import { IconArrowRight } from "@tabler/icons-react";
import { useGetDealOfTheDayQuery } from "@/redux/features/dealWidgetSliderEtc/dealOfTheDay";
import { imageUrl } from "@/constants/imageUrl";
import Link from "next/link";
import DealsOfTheDaySkeleton from "../shared/Skeleton/DealsOfTheDaySkeleton";

const DealOfTheDay = () => {
  const { data, isLoading } = useGetDealOfTheDayQuery("");
  const firstDeal = data?.data?.firstDeal;
  const secondDeal = data?.data?.secondDeal;

  return (
    <section className="lg:mt-20 md:mt-20 mt-8">
      <h2 className="main-text-color text-3xl font-medium mb-7">
        Deals Of The Day
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[30px] gap-2.5">
        {/* === First Deal === */}
        {isLoading ? (
          <DealsOfTheDaySkeleton />
        ) : (
          <div className="main-section flex items-center overflow-hidden justify-between bg-[#F4F4F4] gap-5 rounded-xl px-[30px] py-5 flex-1">
            <div className="flex flex-col md:gap-5 gap-3.5">
              <div className="flex flex-col gap-2.5">
                <div className="bg-[#EFD33D] text-center animate-bounce py-1.5 px-3 rounded font-medium text-black w-[80px] ">
                  <span className="md:text-xs text-[10px]">{firstDeal?.discount}% OFF</span>
                </div>
                <div className="flex flex-col md:gap-2 gap-1">
                  <h2 className="font-semibold [font-size:_clamp(18px,4vw,24px)]  md:line-clamp-2 line-clamp-1">
                    {firstDeal?.title}
                  </h2>
                  <p className=" md:line-clamp-2 line-clamp-1">{firstDeal?.description}</p>
                </div>
              </div>

              <Link
                href={`${firstDeal?.link}`}
              >
                <button className="text-sm flex items-center justify-center gap-2 py-3 px-3  rounded-md uppercase main-bg-color text-white transition hover:translate-x-2 delay-150 whitespace-nowrap">
                  <span>
                    {firstDeal?.buttonText}
                  </span>
                  <span>
                    <IconArrowRight width={20} height={20} />
                  </span>
                </button>
              </Link>
            </div>
            <div className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] relative">
              <Image
                src={`${imageUrl}${firstDeal?.productPhoto}`}
                alt="deal photo 1"
                fill
                className="w-full h-full top-0 left-0 object-cover"
              />
            </div>
          </div>
        )}
        {/* === Second Deal === */}
        {isLoading ? (
          <DealsOfTheDaySkeleton />
        ) : (
          <div className="main-section flex items-center overflow-hidden justify-between bg-[#191C1F] gap-5 rounded-xl px-[30px] py-5 flex-1">
            <div className="flex flex-col md:gap-5 gap-3.5">
              <div className="flex flex-col gap-2.5">
                <div className="animate-bounce w-auto">
                  <span className="md:text-xs text-[10px] bg-[#2DA5F3] text-center  uppercase py-1.5 px-3 rounded font-medium text-white ">{secondDeal?.tag}</span>
                </div>
                <div className="flex flex-col md:gap-2 gap-1 text-white">
                  <h2 className="font-semibold [font-size:_clamp(18px,4vw,24px)]  md:line-clamp-2 line-clamp-1">
                    {secondDeal?.title}
                  </h2>
                  <p className=" md:line-clamp-2 line-clamp-1">{secondDeal?.description}</p>
                </div>
              </div>

              <Link
                href={`${secondDeal?.link}`}
              >
                <button className="text-sm flex items-center justify-center gap-2 py-3 px-3  rounded-md uppercase main-bg-color text-white transition hover:translate-x-2 delay-150 whitespace-nowrap">
                  <span>
                    {secondDeal?.buttonText}
                  </span>
                  <span>
                    <IconArrowRight width={20} height={20} />
                  </span>
                </button>
              </Link>
            </div>
            <div className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] relative ">
              <Image
                src={`${imageUrl}${secondDeal?.productPhoto}`}
                alt="deal photo 1"
                fill
                className="w-full h-full top-0 left-0 object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DealOfTheDay;
