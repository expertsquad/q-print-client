import Image from "next/image";
import ShopNowButton from "../UI/btn/ShopNowButton";
import { imageUrl } from "@/constants/imageUrl"

const BottomSmallBanner = ({ bottomOffer }: any) => {
    return (
        <div className={`bg-[#3bd9f58e] flex justify-center items-center p-5 gap-4 rounded-lg flex-1 w-full`}>
            <div className="">
                <h2 className="[font-size:_clamp(1em,5vw,1.2em)]">
                    {bottomOffer?.offerTag}
                </h2>
                <h2 className="[font-size:_clamp(1em,5vw,1.5em)] leading-6 my-1.5">
                    {bottomOffer?.title}
                </h2>
                <ShopNowButton buttonText={bottomOffer?.buttonText} />
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