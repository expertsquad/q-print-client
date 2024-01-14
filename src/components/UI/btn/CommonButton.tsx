// import ShopNowIcon from "@/app/assets/svgIcons/ShopNowIcon";

import Link from "next/link";
import React, { ReactNode } from "react";

interface ICommonButton {
  href?: string;
  title: string;
  svgIcon?: ReactNode;
}

const CommonButton: React.FC<ICommonButton> = ({ href, title, svgIcon }) => {
  return (
    <button className="px-4 py-2 rounded-md  main-bg-color flex items-center justify-center text-white gap-2 [font-size:_clamp(12px,4vw,18px)] ">
      {svgIcon && <span>{svgIcon}</span>}
      <Link href={href || "#"}>{title}</Link>
    </button>
  );
};

export default CommonButton;
