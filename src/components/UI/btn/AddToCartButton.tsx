import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

// type interface here
interface ICommonButton {
  href?: string;
}

const AddToCartButton: React.FC<ICommonButton> = ({ href }) => {
  return (
    <button className="  px-4 py-2 rounded-md  hover:main-bg-color flex items-center justify-center hover:text-white gap-2 [font-size:_clamp(12px,4vw,18px)] ">
      <IconShoppingCart /> <Link href={href || "#"}>ADD TO CART</Link>
    </button>
  );
};

export default AddToCartButton;
