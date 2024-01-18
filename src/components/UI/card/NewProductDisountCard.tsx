import React from "react";
import ShopNowButton from "../btn/ShopNowButton";
import Image from "next/image";

const NewProductDisountCard = () => {
  return (
    <div className="md:w-[350px] md:h-[500px] bg-[#134231]  rounded-lg relative overflow-hidden w-full h-auto ">
      <div className="h-[60%] w-full bg-[#3d7c65] opacity-65 blur-2xl rounded-full  absolute  border border-red-600 "></div>
      <div className="items-center justify-between h-full p-4 relative flex md:flex-col flex-row ">
        {/* Increased z-index value to 20 */}
        <div className="flex md:justify-center justify-start flex-col text-white gap-2 md:items-center py-5 ">
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

export default NewProductDisountCard;
