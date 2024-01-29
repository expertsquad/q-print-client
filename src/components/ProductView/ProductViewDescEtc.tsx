// Jaker Hossain
//Product View Description page
"use client";
import {
  IconHeart,
  IconMinus,
  IconPlus,
  IconShoppingCart,
  IconStar,
} from "@tabler/icons-react";
import Image from "next/image";
import adidasBrand from "@/assets/adidas brand.svg";
import ColorPickUp from "./ColorPickUp";
import { useState } from "react";
import CommonButton from "../UI/btn/CommonButton";

const ProductViewDescEtc = () => {
  const [value, setvalue] = useState(0);
  return (
    <section className="product-description">
      <h2 className="[font-size:_clamp(16px,5vw,20px)] text-wrap">
        {/* //{title} */}
        Brother HL - L3270CDW Single Function Color Laser Printer
      </h2>
      <div className="flex items-center my-4">
        <Image src={adidasBrand} alt="Adidas Brand" />
        <h6 className="text-[16px] text-black opacity-60 mr-5 ml-1">Brother</h6>
        <IconStar
          fill="currentColor"
          width={18}
          height={18}
          className="text-[#FF8A00] mr-1"
        />
        <p className="text-black opacity-50 text-[16px]">
          4.8 <span>(14 people)</span>
        </p>
      </div>
      <div className="flex items-center mb-4">
        <p className="[font-size:_clamp(14px,5vw,16px)] mr-3">
          Category: <span className="text-black opacity-70">Printer</span>
        </p>{" "}
        |
        <button className="flex items-center gap-2 ml-3 text-[#475156] [font-size:_clamp(13px,5vw,14px)]">
          <IconHeart className="text-[#E73C17]" />
          Add To Wishlist
        </button>
      </div>
      <div className="mb-4 flex">
        <ColorPickUp />
      </div>
      <div className="">
        <div className="flex items-center flex-wrap mb-4">
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
        <div className="mb-4">Range</div>
        <p className="mb-4 text-black text-opacity-60">
          Buy <span className="main-text-color">8</span> item more to get off{" "}
          <b className="text-black">15% Extra!</b>
        </p>
        {/* //Item Increase and Decrease */}
        <div className="flex items-center gap-5">
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
            <button className="w-56 md:w-64 lg:w-80 flex justify-center items-center gap-3 bg-slate-400 main-text-color border border-fuchsia-700 py-2 rounded-lg">
              <IconShoppingCart
                className="main-text-color"
                width={20}
                height={20}
              />
              Add To Cart
            </button>
          </div>
        </div>
        <div className="my-4">
          <button>
            {""}
            {/* <CommonButton title="QUICK ORDER" /> */}
          </button>
          <button>
            {""}
            {/* <CommonButton title="BUY NOW" /> */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductViewDescEtc;
