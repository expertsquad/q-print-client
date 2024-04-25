import GradientThankYouIcon from "@/assets/svgIcons/GradientThankYouIcon";
import GoToHomeButton from "./GoToHomeButton";
import OrderViewButton from "./OrderViewButton";

const ThankYouOrderPlaces = () => {
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
        <GoToHomeButton />
        <OrderViewButton />
      </div>
    </div>
  );
};

export default ThankYouOrderPlaces;
