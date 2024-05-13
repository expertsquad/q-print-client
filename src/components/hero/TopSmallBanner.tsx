import Image from "next/image";
import ShopNowButton from "../UI/btn/ShopNowButton";
import { imageUrl } from "@/constants/imageUrl";

const TopSmallBanner = ({ topOffer }: any) => {
  return (
    <div
      className={` bg-[#F2F4F5] flex justify-center md:justify-between items-center p-5 gap-4 rounded-lg flex-1 w-full`}
    >
      <div className="relative w-36 h-36">
        <div className="absolute w-full h-full top-0 left-0 object-cover">
          <Image
            src={`${imageUrl}${topOffer?.productPhoto}`}
            alt="Hero discount item"
            fill
            sizes="200px"
            priority={true}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-5">
        <h2 className="[font-size:_clamp(1em,5vw,1.5em)] leading-7">
          {topOffer?.title}
        </h2>
        <div className="flex items-baseline gap-1 main-text-color font-bold">
          <span className="text-lg">{topOffer?.price} </span>
          <small>QAR</small>
        </div>
        <ShopNowButton
          href={topOffer?.link}
          buttonText={topOffer?.buttonText}
        />
      </div>
    </div>
  );
};

export default TopSmallBanner;
