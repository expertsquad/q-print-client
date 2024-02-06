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
      className={`${className} bg-[#F2F2F2] w-full px-2 md:px-3 lg:px-3 py-2 rounded-lg group-hover:bg-gradient-to-l from-[#C83B62] to-[#7F35CD] flex items-center justify-center gap-1 md:gap-2 lg:gap-2 group-hover:text-white [font-size:_clamp(0.8em,4vw,1em)]`}
    >
      <span className="text-gray-600 group-hover:text-white ">
        {" "}
        <IconShoppingBag className="md:h-5 md:w-5 lg:h-5 lg:w-5 h-4 w-4" />
      </span>{" "}
      <Link href={href || "#"}>Add To Cart</Link>
    </button>
  );
};

export default AddToCartButton;
