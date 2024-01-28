import GradientHomeIcon from "@/assets/svgIcons/GradientHomeIcon";
import Link from "next/link";

const GoToHomeButton = () => {
  return (
    <Link
      href="/"
      className=" min-w-fit  py-3 px-7 border rounded-lg  bg-gradient-to-r from-[#C83B62] to-[#7F35CD] text-transparent bg-clip-text hover:scale-105 hover:duration-500 border-fuchsia-700 flex items-center justify-center gap-2 text-sm font-bold"
    >
      <GradientHomeIcon />
      GO TO HOME PAGE
    </Link>
  );
};

export default GoToHomeButton;
