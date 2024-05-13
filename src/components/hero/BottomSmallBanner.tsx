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
      className={`flex justify-center md:justify-between items-center ${
        bottomOffer?.backgroundPhoto ? "p-1 " : "p-5"
      } gap-4 rounded-lg flex-1 w-full`}
      style={{
        backgroundColor: `${imageUrl}${bottomOffer?.backgroundPhoto}`
          ? ""
          : `#${bottomOffer?.backgroundColor}`,
      }}
    >
      {bottomOffer?.backgroundColor ? (
        <div>
          <div className="flex flex-col gap-y-5">
            <h2 className="[font-size:_clamp(1em,5vw,1.2em)]">
              {bottomOffer?.offerTag}
            </h2>
            <h2 className="[font-size:_clamp(1em,5vw,1.5em)] leading-6 ">
              {bottomOffer?.title}
            </h2>
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
      ) : (
        <div className="relative w-full h-full">
          <Image
            src={`${imageUrl}${bottomOffer.backgroundPhoto}`}
            alt="Promo Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default BottomSmallBanner;
