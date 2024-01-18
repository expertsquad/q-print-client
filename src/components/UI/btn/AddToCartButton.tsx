import { IconShoppingBag } from "@tabler/icons-react";
import Link from "next/link";

// type interface here
interface IAddTOCartButton {
  href?: string;
  className?: string;
}

const AddToCartButton: React.FC<IAddTOCartButton> = ({ href, className }) => {
  return (
    <button
      className={`${className} bg-[#F2F2F2] w-full px-4 py-2 rounded-lg group-hover:bg-gradient-to-l from-[#C83B62] to-[#7F35CD] flex items-center justify-center gap-2 group-hover:text-white [font-size:_clamp(0.8em,4vw,1em)]`}
    >
      <span className="text-gray-600 group-hover:text-white">
        {" "}
        <IconShoppingBag />{" "}
      </span>{" "}
      <Link href={href || "#"}>ADD TO CART</Link>
    </button>
  );
};

export default AddToCartButton;
