import { productViewMenus } from "@/constants";
import Link from "next/link";
import React from "react";

const ProductViewSpecMenus = () => {
  return (
    <div className="overflow-x-auto flex no-scrollbar mb-12 border-b">
      {productViewMenus.map((item) => (
        <Link
          className="text-[16px md:text-[18px] text-black opacity-70 active:text-fuchsia-600 mr-7 hover:border-fuchsia-600 shrink-0 overflow-scroll text-nowrap no-scrollbar border-b-2 border-transparent hover:bg-gradient-to-r from-[#C83B62] to-[#7F35CD] hover:text-transparent hover:bg-clip-text pb-2"
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
