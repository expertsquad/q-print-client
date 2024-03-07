"use client";
import Image from "next/image";
import React from "react";
import defaultImg from "@/assets/images/defaultImg.png";
import { brands } from "@/constants";
import { useGetBrandsQuery } from "@/redux/features/brand/brandsApi";
import { imageUrl } from "@/constants/imageUrl";

const BrandsCard = () => {
  const { data, isLoading, isError } = useGetBrandsQuery(undefined);
  console.log(data?.data, "Logged By Poran");

  //<== Take the first 10 items from data ==>
  const firstTenData = data?.data?.slice(0, 10);

  return (
    <div className="px-5 py-8 rounded-xl shadow-md mt-5">
      <h1 className="text-[#00000066] font-semibold text-base">BRANDS</h1>
      <hr className="my-5" />
      <div className="flex flex-col gap-4">
        {data?.data?.map((brand: any, i: number) => (
          <span key={i} className="flex gap-4 justify-start items-center">
            <Image
              width={35}
              height={35}
              // src={defaultImg}
              src={`${imageUrl}${brand?.brandPhoto}`}
              className="object-contain"
              alt=""
            />
            <small className="text-base hover:text-[#000] cursor-pointer text-[#00000099]">
              {brand?.brandName}
            </small>
          </span>
        ))}
      </div>
    </div>
  );
};

export default BrandsCard;
