import Image from "next/image";
import dealDayOne from "@/assets/deal-day-1.svg";
import dealDayTwo from "@/assets/deal-day-2.svg";
import ShopNowButton from "../UI/btn/ShopNowButton";
import { IconArrowRight } from "@tabler/icons-react";

const DealOfTheDay = () => {
  return (
    <section className="lg:mt-20 md:mt-20 mt-8">
      <h2 className="main-text-color text-3xl font-medium mb-7">
        Deals Of The Day{" "}
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="main-section flex items-center bg-[#F4F4F4] rounded-xl p-8">
          <div className=" gap-5">
            <button className="bg-[#EFD33D] animate-bounce py-1.5 px-3.5 rounded-md font-medium text-black mb-4">
              25% OFF
            </button>
            <h2 className="font-semibold [font-size:_clamp(18px,4vw,24px)] mb-4">
              Brother HL - L3270CDW Single Function Color
              {/* //Dynamic Title */}
            </h2>
            <p className="mb-4">
              Lorem ipsum dolor amet consectetur. Sem et lectus Sem et lectus{" "}
            </p>
            <button className="text-sm flex items-center justify-center gap-2 py-3 px-3 rounded-md uppercase main-bg-color text-white transition hover:translate-x-2 delay-150">
              shop now
              <span>
                <IconArrowRight width={20} height={20} />
              </span>
            </button>
          </div>
          <div>
            <Image src={dealDayOne} alt="Deal Of The Day Image" />
          </div>
        </div>
        {/* //Divider */}
        <div className="main-section flex items-center bg-[#191C1F] rounded-xl p-8">
          <div className=" gap-5">
            <button className="uppercase bg-[#2DA5F3] animate-bounce py-1.5 px-3.5 rounded-md font-medium text-white mb-4">
              best deal
            </button>
            <h2 className="text-white font-semibold [font-size:_clamp(18px,4vw,24px)] mb-4">
              Brother HL - L3270CDW Singel Function Color Laser Printer
              {/* //Dynamic Title */}
            </h2>
            <p className="text-white mb-4">
              Lorem ipsum dolor amet consectetur. Sem et lectus Sem et lectus{" "}
            </p>
            {/* <ShopNowButton href="#" /> */}
            <button className="text-sm flex items-center justify-center gap-2 py-3 px-3 rounded-md uppercase main-bg-color text-white transition hover:translate-x-2 delay-150">
              shop now
              <span>
                <IconArrowRight width={20} height={20} />
              </span>
            </button>
          </div>
          <div>
            <Image src={dealDayTwo} alt="Deal Of The Day Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealOfTheDay;
