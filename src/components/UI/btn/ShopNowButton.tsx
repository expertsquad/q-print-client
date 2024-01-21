import { IconShoppingBag } from "@tabler/icons-react";
import Link from "next/link";

interface IShopNowButton {
  href?: string;
}

const ShopNowButton = ({ href }: IShopNowButton) => {
  return (
    <button className="whitespace-nowrap px-4 md:py-2 py-1 rounded-md  main-bg-color flex items-center justify-center text-white gap-2 [font-size:_clamp(0.6em,5vw,1em)] ">
      <Link href={href || "#"}>Shop Now</Link> <IconShoppingBag />
    </button>
  );
};

export default ShopNowButton;
