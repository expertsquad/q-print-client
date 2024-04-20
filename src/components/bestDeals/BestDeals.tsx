"use client";
import React from "react";
import ShopNowButton from "../UI/btn/ShopNowButton";
import Image from "next/image";
import StarRating from "../product/StarRating";
import { useGetBestDealsQuery } from "@/redux/features/dealWidgetSliderEtc/bestDeal";
import { imageUrl } from "@/constants/imageUrl";
import { useRouter } from "next/navigation";
import CountdownTimer from "./CountdownTimer";
import BestDealProduct from "./BestDealProduct";

const BestDeals = () => {
  const { data } = useGetBestDealsQuery("");
  const router = useRouter();
  const endDate = new Date(data?.data?.endDate);

  // <== Get Product Data From Best Deals ==>
  const productData = data?.data?.products?.map((product: any) => {
    return product;
  });

  return (
    <section className="bg-[#EDF2EE] py-4 px-2 md:py-7 md:px-8  lg:mt-20 md:mt-20 mt-8 rounded-lg">
      <div className="flex items-center justify-between gap-6">
        <div className="w-1/4">
          <div className="relative w-48 h-48 shrink-0">
            <Image
              src={`${imageUrl}${data?.data?.firstProductPhoto}`}
              alt="Offer Image"
              fill
              objectFit="cover"
              className="w-full h-full top-0 left-0 object-contain"
            />
          </div>
        </div>
        <div className="w-2/4 flex items-center flex-col space-y-6">
          <div className="text-center space-y-2 md:space-y-3 lg:space-y-3">
            <h4 className="[font-size:_clamp(0.6em,4vw,0.9em)] main-text-color ">
              BEST DEALS
            </h4>
            <h1 className=" line-clamp-2 [font-size:_clamp(0.95em,4vw,1.9em)] main-text-color font-semibold ">
              {data?.data?.title}
            </h1>
            <p className=" line-clamp-2 [font-size:_clamp(0.6em,4vw,1.2em)] text-gray-500">
              {data?.data?.description}
            </p>
          </div>
          <CountdownTimer endDate={endDate} />
        </div>
        <div className="w-1/4 flex items-end justify-end">
          <div className="relative shrink-0 w-48 h-48">
            <Image
              src={`${imageUrl}${data?.data?.secondProductPhoto}`}
              alt="Offer Image"
              fill
              objectFit="cover"
              className="w-full h-full top-0 left-0 object-contain"
            />
          </div>
        </div>
      </div>
      <BestDealProduct productData={productData} />
    </section>
  );
};

export default BestDeals;
