import ShopNowIcon from "@/assets/svgIcons/ShopNowIcon";
import Link from "next/link";

interface IShopNowButton {
  href?: string;
}

const ShopNowButton = ({ href }: IShopNowButton) => {
  return (
    <button className="px-4 py-2 rounded-md  main-bg-color flex items-center justify-center text-white gap-2 [font-size:_clamp(12px,4vw,18px)] ">
      <Link href={href || "#"}>Shop Now</Link> <ShopNowIcon />
    </button>
  );
};

export default ShopNowButton;
