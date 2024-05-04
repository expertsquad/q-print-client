import GradientThankYouIcon from "@/assets/svgIcons/GradientThankYouIcon";
import Link from "next/link";
import BackToHomePageIcon from "@/assets/svgIcons/GradientHomeIcon";
import { IconArrowRight } from "@tabler/icons-react";

const ThankYouPageTop = () => {
  const handleViewOrder = () => {};
  return (
    <div className="flex items-center justify-center flex-col">
      <GradientThankYouIcon />
      <h3 className="[font-size:_clamp(1.2em,4vw,1.6em)]">Thank You</h3>
      <h3 className="[font-size:_clamp(1.2em,4vw,1.6em)] font-bold text-gray-800 mt-7">
        Your order is successfully place
      </h3>
      <p className="text-sm text-gray-400 mt-5 text-center">
        Lorem ipsum dolor sit amet consectetur. Tellus turpis morbi fermentum
        sed quis. fermentum sed quis.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-5 ">
        <Link
          href={"/"}
          className="flex items-center gap-2 border-2 border-main-border-color py-2 px-3 rounded-md"
        >
          <BackToHomePageIcon />
          <span className="main-text-color font-bold whitespace-nowrap">
            GO TO HOME PAGE
          </span>
        </Link>
        <div className="flex items-center gap-2 bg-main-bg-color py-2 px-3 rounded-md text-white">
          <span className="font-medium whitespace-nowrap">VIEW ORDER</span>
          <IconArrowRight stroke={2} />
        </div>
      </div>
    </div>
  );
};

export default ThankYouPageTop;
