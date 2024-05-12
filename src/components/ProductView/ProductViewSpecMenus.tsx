import { productViewMenus } from "@/constants";
import Link from "next/link";
import React from "react";

const ProductViewSpecMenus = () => {
  return (
    <div className="overflow-x-auto flex no-scrollbar mb-12 border-b">
      {productViewMenus.map((item) => (
        <Link
          className="text-base md:text-lg text-black-opacity-70 active:text-main-text-color mr-7 hover:border-main-border-color shrink-0 overflow-scroll text-nowrap no-scrollbar border-b-2 border-transparent hover:bg-gradient-to-r from-[#C83B62] to-[#7F35CD] hover:text-transparent hover:bg-clip-text pb-2"
          key={item._id}
          href={item.hashtag}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default ProductViewSpecMenus;
