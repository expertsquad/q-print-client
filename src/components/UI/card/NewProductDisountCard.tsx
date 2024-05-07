"use client";
import ShopNowButton from "../btn/ShopNowButton";
import Image from "next/image";
import { useGetDealOfTheDayQuery } from "@/redux/features/dealWidgetSliderEtc/dealOfTheDay";
import DiscountCardSkeleton from "@/components/shared/Skeleton/DiscountCardSkeleton";
import brotherInk from "@/assets/brotherINk.png"

const NewProductDisountCard = () => {
  const { data, isLoading } = useGetDealOfTheDayQuery("");

  // <== Get the widget ==>
  const widget = data?.data?.widget;

  return (
    isLoading ? (
      <DiscountCardSkeleton />
    )
      :
      <div className="md:w-[350px] md:h-[500px] bg-[#134231]  rounded-lg relative overflow-hidden w-full h-auto ">
        <div className="h-[60%] w-full bg-[#3d7c65] opacity-65 blur-2xl rounded-full  absolute  border border-red-600 "></div>
        <div className="items-center justify-between h-full p-4 relative flex md:flex-col flex-row ">
          {/* Increased z-index value to 20 */}
          <div className="flex md:justify-center justify-start flex-col text-white gap-2 md:items-center py-5 ">
            <small>{widget?.tag}</small>
            <h2 className="[font-size:_clamp(1em,5vw,1.8em)] font-bold text-center">
              {widget?.title}
            </h2>
            <p>{widget?.description}</p>
            <ShopNowButton href={widget?.link} buttonText={widget?.buttonText} />
          </div>
          <div className="w-[70%] h-[70%] flex items-center justify-center">
            <Image
              src={brotherInk}
              alt="Discounted product image"
              width={250}
              height={300}
              priority
            />
          </div>
        </div>
      </div>
  );
};

export default NewProductDisountCard;
