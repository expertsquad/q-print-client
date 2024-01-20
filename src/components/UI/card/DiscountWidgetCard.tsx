import React from "react";
import ShopNowButton from "../btn/ShopNowButton";
import Image from "next/image";

const DiscountWidgetCard = () => {
  return (
    <div className=" bg-[#134231] w-[300px]  rounded-lg relative overflow-hidden h- mt-5 ">
      <div className="h-[60%] w-full bg-[#3d7c65] opacity-65 blur-2xl rounded-full  absolute  border border-red-600 "></div>
      <div className="items-center justify-between h-full p-4 relative flex flex-col  ">
        {/* Increased z-index value to 20 */}
        <div className="flex justify-center  flex-col text-white gap-2 items-center py-5 ">
          <small>Brother Ink</small>
          <h2 className="[font-size:_clamp(1em,5vw,1.8em)] font-bold">
            32% Discount
          </h2>
          <p>For all electronics products</p>
          <ShopNowButton />
        </div>
        <div>
          <Image
            src="https://www.transparentpng.com/thumb/printer/7udIJT-canon-printer-transparent.png"
            alt="Discounted product image"
            height={250}
            width={150}
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountWidgetCard;
