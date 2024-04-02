"use client";
import Image from "next/image";
import dealDayOne from "@/assets/deal-day-1.svg";
import dealDayTwo from "@/assets/deal-day-2.svg";
import ShopNowButton from "../UI/btn/ShopNowButton";
import { IconArrowRight } from "@tabler/icons-react";
import { useGetDealOfTheDayQuery } from "@/redux/features/dealWidgetSliderEtc/dealOfTheDay";
import { imageUrl } from "@/constants/imageUrl";
import Link from "next/link";

const DealOfTheDay = () => {
  // <== Get Deal Of The Day Data ==>
  const { data } = useGetDealOfTheDayQuery("");

  // <== Get the first deal ==>
  const firstDeal = data?.data?.firstDeal;
  // <== Get the second deal ==>
  const secondDeal = data?.data?.secondDeal;

  return (
    <section className="lg:mt-20 md:mt-20 mt-8">
      <h2 className="main-text-color text-3xl font-medium mb-7">
        Deals Of The Day
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* === First Deal === */}
        <div className="main-section flex items-center bg-[#F4F4F4] rounded-xl p-8 flex-1">
          <div className=" gap-5">
            <button className="bg-[#EFD33D] animate-bounce py-1.5 px-3.5 rounded-md font-medium text-black mb-4">
              {firstDeal?.discount}% OFF
            </button>
            <h2 className="font-semibold [font-size:_clamp(18px,4vw,24px)] mb-4 line-clamp-2">
              {firstDeal?.title}
            </h2>
            <p className="mb-4 line-clamp-2">{firstDeal?.description}</p>
            <Link
              href={`${firstDeal?.link}`}
              className="text-sm flex items-center justify-center gap-2 py-3 w-2/3 rounded-md uppercase main-bg-color text-white transition hover:translate-x-2 delay-150"
            >
              {firstDeal?.buttonText}
              <span>
                <IconArrowRight width={20} height={20} />
              </span>
            </Link>
          </div>
          <div className="w-[120px] h-[120px] md:w-[260px] md:h-[260px] relative shrink-0">
            <Image
              src={`${imageUrl}${firstDeal?.backgroundPhoto}`}
              alt="profile"
              fill
              className="w-full h-full top-0 left-0 object-cover"
            />
          </div>
        </div>
        {/* === Second Deal === */}
        <div className="main-section flex items-center bg-[#191C1F] rounded-xl p-8 flex-1">
          <div className=" gap-5">
            <button className="uppercase bg-[#2DA5F3] animate-bounce py-1.5 px-3.5 rounded-md font-medium text-white mb-4">
              {secondDeal?.tag}
            </button>
            <h2 className="text-white font-semibold [font-size:_clamp(18px,4vw,24px)] mb-4">
              {secondDeal?.title}
            </h2>
            <p className="text-white mb-4">{secondDeal?.description}</p>
            {/* <ShopNowButton href="#" /> */}
            <Link
              href={`${secondDeal?.link}`}
              className="text-sm flex items-center justify-center gap-2 py-3 w-2/3 rounded-md uppercase main-bg-color text-white transition hover:translate-x-2 delay-150"
            >
              {firstDeal?.buttonText}
              <span>
                <IconArrowRight width={20} height={20} />
              </span>
            </Link>
          </div>
          <div>
            <Image src={dealDayTwo} alt="Deal Of The Day Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealOfTheDay;
