"use client";
import { IconMinus, IconPlus, IconShoppingCart } from "@tabler/icons-react";
import React, { useState } from "react";

const SpecificationCard = () => {
  const [value, setvalue] = useState(0);
  return (
    <div className="sticky top-0 md:max-w-[340px] md:max-h-[380px] hidden md:block shadow-2xl p-6 rounded-lg">
      <h2 className="md:text-[16px] text-wrap text-black opacity-80">
        {/* //{title} */}
        Brother HL - L3270CDW Single Function Color Laser Printer
      </h2>
      <hr className="bg-black opacity-10 h-[2px] my-4 mb-6" />
      <span className="[font-size:_clamp(14px,5vw,16px)] text-white main-bg-color py-1 px-3 rounded-md">
        20% OFF
      </span>
      <div className="flex items-center flex-wrap my-6 text-wrap">
        <h3 className="main-text-color [font-size:_clamp(17px,3vw,20px)] font-semibold mr-2">
          {/* //Price */}
          1500.00 <small className="uppercase">qar</small>
        </h3>
        <del className="text-[#B3B3B3] [font-size:_clamp(14px,3vw,17px)] mr-5">
          1800.00 QAR
        </del>
      </div>
      <div className="flex items-center gap-5 mb-6">
        <div className="border border-gray-200 flex items-center gap-2 rounded-3xl p-2">
          <button className="p-2 bg-[#F2F2F2] rounded-full">
            {""}
            <IconMinus width={14} height={14} />
          </button>
          <span>{value}</span>
          <button className="p-2 bg-[#F2F2F2] rounded-full">
            {""}
            <IconPlus width={14} height={14} />
          </button>
        </div>
        <div>
          <button className="w-36 md:w-32 lg:w-40 flex justify-center items-center bg-slate-400 main-text-color border border-fuchsia-700 py-2 rounded-lg">
            <IconShoppingCart className="" />
            Quick Order
          </button>
        </div>
      </div>
      <button className="w-full flex justify-center items-center bg-slate-400 main-bg-color border border-fuchsia-700 py-2 rounded-lg text-white">
        <IconShoppingCart className="" />
        Quick Order
      </button>
    </div>
  );
};

export default SpecificationCard;
