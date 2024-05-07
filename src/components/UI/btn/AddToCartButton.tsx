import { IconShoppingBag } from "@tabler/icons-react";
import Link from "next/link";

// type interface here
interface IAddTOCartButton {
  href?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const AddToCartButton: React.FC<IAddTOCartButton> = ({
  href,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} bg-[#F2F2F2] w-full px-2 md:px-3  py-2 rounded group-hover:bg-gradient-to-l from-[#C83B62] to-[#7F35CD] flex items-center justify-center gap-1 md:gap-2  group-hover:text-white [font-size:_clamp(0.8em,4vw,1em)] transition-all`}
    >
      <span className=" group-hover:text-white transition-all ">
        {" "}
        <IconShoppingBag className="md:h-5 md:w-5  h-4 w-4" />
      </span>{" "}
      <span className="text-black group-hover:text-white transition-all">Add To Cart</span>
    </button>
  );
};

export default AddToCartButton;
