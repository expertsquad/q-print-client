"use client";
import {
  IconBolt,
  IconMinus,
  IconPlus,
  IconShoppingCart,
} from "@tabler/icons-react";
import React from "react";
import WishlistQuickOrderBTNModal from "../WishlistPageData/WishlistQuickOrderBTNModal";
import SingleQuickOrder from "../quick-order/SingleQuickOrder";

const SpecificationCard = ({ specificationCard }: any) => {
  return (
    <div className="sticky top-0 md:max-w-[340px] md:max-h-[380px] hidden md:block shadow-2xl p-6 rounded-lg">
      <h2 className="md:text-[16px] text-wrap text-black opacity-80">
        {specificationCard?.productName}
      </h2>
      <hr className="bg-black opacity-10 h-[2px] my-4 mb-6" />
      <span className="[font-size:_clamp(14px,5vw,16px)] text-red-500 bg-gradient-to-r from-pink-50 to-purple-50 py-1 px-3 rounded-md">
        {specificationCard?.defaultVariant?.discountPercentage}% OFF
      </span>
      <div className="flex items-center flex-wrap my-6 text-wrap">
        <h3 className="main-text-color [font-size:_clamp(17px,3vw,20px)] font-semibold mr-2">
          {specificationCard?.defaultVariant?.discountedPrice}{" "}
          <small className="uppercase">qar</small>
        </h3>
        <del className="text-[#B3B3B3] [font-size:_clamp(14px,3vw,17px)] mr-5">
          {specificationCard?.defaultVariant?.sellingPrice} QAR
        </del>
      </div>
      <div className="flex items-center gap-5 mb-6">
        <div className="border border-gray-200 flex items-center gap-2 rounded-3xl p-2">
          <button className="p-2 bg-[#F2F2F2] rounded-full">
            {""}
            <IconMinus width={14} height={14} />
          </button>
          <span>{0}</span>
          <button className="p-2 bg-[#f2f2f2] rounded-full">
            {""}
            <IconPlus width={14} height={14} />
          </button>
        </div>
        <div>
          <SingleQuickOrder product={specificationCard} btnStyle="py-3" />
        </div>
      </div>
      <button className="w-full flex gap-1 justify-center items-center main-bg-color py-2 rounded-lg text-white">
        <IconShoppingCart width={20} stroke={2} height={20} className="" />
        Add To Cart
      </button>
    </div>
  );
};

export default SpecificationCard;
