import Image from "next/image";
import ShopNowButton from "../UI/btn/ShopNowButton";
import { imageUrl } from "@/constants/imageUrl";
import { heroBottomSmallBanner } from "@/types/homeHero";

const BottomSmallBanner = ({
  bottomOffer,
}: {
  bottomOffer: heroBottomSmallBanner;
}) => {
  return (
    <div
      className={`flex justify-center md:justify-between items-center gap-4 p-5 rounded-lg flex-1 w-full h-full text-white`}
      style={{
        backgroundColor: `${
          bottomOffer?.backgroundColor && `#${bottomOffer?.backgroundColor}`
        }`,
        backgroundImage: `url(${imageUrl}${bottomOffer?.backgroundPhoto})`,
        backgroundPosition: "center",
        backgroundRepeat: "no - repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col gap-y-5">
        <h2 className="text-base md:text-lg leading-7 line-clamp-1">
          {bottomOffer?.offerTag}
        </h2>
        <h2 className="text-sm leading-7 line-clamp-1">{bottomOffer?.title}</h2>
        <ShopNowButton
          href={bottomOffer?.link}
          buttonText={bottomOffer?.buttonText}
        />
      </div>

      <div className=" relative w-36 h-36">
        <div className="absolute w-full h-full top-0 left-0 object-cover">
          <Image
            src={`${imageUrl}${bottomOffer?.productPhoto}`}
            alt="Hero discount item"
            fill
            sizes="200px"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default BottomSmallBanner;
