import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

// type interface here
interface ICommonButton {
  href?: string;
}

const AddToCartButton: React.FC<ICommonButton> = ({ href }) => {
  return (
    <button className="border-[1px] w-full  px-4 py-2 rounded-lg  group-hover:bg-gradient-to-l from-[#C83B62] to-[#7F35CD] flex items-center justify-center gap-2 group-hover:text-white [font-size:_clamp(0.8em,4vw,1em)]  ">
      <IconShoppingCart /> <Link href={href || "#"}>ADD TO CART</Link>
    </button>
  );
};

export default AddToCartButton;
