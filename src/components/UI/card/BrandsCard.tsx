import Image from "next/image";
import React from "react";
import defaultImg from "@/assets/images/defaultImg.png";
import { brands } from "@/constants";

const BrandsCard = () => {
  return (
    <div className="px-5 py-8 rounded-xl shadow-lg">
      <h1 className="text-[#00000066] font-semibold text-base">BRANDS</h1>
      <hr className="my-5" />
      <div className="flex flex-col gap-4">
        {brands?.map((brand, i) => (
          <span key={i} className="flex gap-4 justify-start items-center">
            <Image width={35} height={35} src={defaultImg} alt="" />
            <small className="text-base hover:text-[#000] cursor-pointer text-[#00000099]">
              {brand?.title}
            </small>
          </span>
        ))}
      </div>
    </div>
  );
};

export default BrandsCard;
