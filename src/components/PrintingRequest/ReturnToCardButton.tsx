import GradientReturnArrow from "@/assets/svgIcons/GradientReturnArrow";
import Link from "next/link";
import React from "react";

const ReturnToCardButton = () => {
  return (
    <Link
      href="/cartView"
      className=" w-full  py-3 px-7 border rounded-lg  bg-gradient-to-r from-[#C83B62] to-[#7F35CD] text-transparent bg-clip-text hover:shadow-[0px_4px_24px_0px_rgba(127,_53,_205,_0.15)] hover:duration-500 border-fuchsia-700 flex items-center justify-center gap-2"
    >
      <GradientReturnArrow />
      Return to card
    </Link>
  );
};

export default ReturnToCardButton;
