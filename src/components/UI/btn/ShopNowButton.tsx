import { IconShoppingBag } from "@tabler/icons-react";
import Link from "next/link";

interface IShopNowButton {
  href?: string;
  buttonText?: string;
}

const ShopNowButton = ({ href, buttonText }: IShopNowButton) => {
  return (
    <button className="whitespace-nowrap px-4 md:py-3 py-2 rounded-md  main-bg-color flex items-center justify-center text-white gap-2 [font-size:_clamp(0.6em,4vw,1em)] ">
      <Link href={href || "#"}>{buttonText ? buttonText : "Shop Now"}</Link>{" "}
      <IconShoppingBag width={20} height={20} stroke={2} />
    </button>
  );
};

export default ShopNowButton;
