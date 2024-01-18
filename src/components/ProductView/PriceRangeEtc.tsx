"use client";
import { IconMinus, IconPlus, IconShoppingCart } from "@tabler/icons-react";
import React, { useState } from "react";

const PriceRangeEtc = () => {
  const [value, setvalue] = useState(0);

  return (
    <div className="">
      <div className="flex items-center flex-wrap mb-5">
        <h3 className="main-text-color [font-size:_clamp(20px,5vw,26px)] font-semibold mr-2">
          {/* //Price */}
          1500.00 <small className="uppercase">qar</small>
        </h3>
        <del className="text-[#B3B3B3] [font-size:_clamp(14px,5vw,18px)] mr-5">
          1800.00 QAR
        </del>
        <span className="[font-size:_clamp(14px,5vw,16px)] text-white main-bg-color py-1 px-3 rounded-md">
          20% OFF
        </span>
      </div>
      {/* //range */}
      <div>Range</div>
      <p>
        Buy <span>8</span> item more to get off <b>15% Extra!</b>
      </p>
      {/* //Item Increase and Decrease */}
      <div className="flex items-center">
        <div className="border border-gray-200 flex items-center gap-2 rounded-3xl p-2">
          <button className="p-2 bg-[#F2F2F2] rounded-full">
            <IconMinus width={14} height={14} />
          </button>
          <span>{value}</span>
          <button className="p-2 bg-[#F2F2F2] rounded-full">
            <IconPlus width={14} height={14} />
          </button>
        </div>
        <div>
          <button className="w-80 flex justify-center items-center bg-slate-400 main-text-color border border-fuchsia-700 py-2">
            <IconShoppingCart className="" />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeEtc;
