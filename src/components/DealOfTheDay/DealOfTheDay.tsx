import Image from "next/image";
import dealDayOne from "@/assets/deal-day-1.svg";
import dealDayTwo from "@/assets/deal-day-2.svg";
import ShopNowButton from "../UI/btn/ShopNowButton";

const DealOfTheDay = () => {
  return (
    <section className="">
      <h2 className="main-text-color text-3xl font-medium mb-7">
        Deals Of The Day{" "}
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="main-section flex items-center bg-[#F4F4F4] rounded-xl p-8">
          <div className=" gap-5">
            <button className="btn bg-[#EFD33D] mb-4">25% OFF</button>
            <h2 className="font-semibold [font-size:_clamp(18px,4vw,24px)] mb-4">
              Brother HL - L3270CDW Single Function Color
              {/* //Dynamic Title */}
            </h2>
            <p className="mb-4">
              Lorem ipsum dolor amet consectetur. Sem et lectus Sem et lectus{" "}
            </p>
            <ShopNowButton href="#" />
          </div>
          <div>
            <Image src={dealDayOne} alt="Deal Of The Day Image" />
          </div>
        </div>
        {/* //Divider */}
        <div className="main-section flex items-center bg-[#191C1F] rounded-xl p-8">
          <div className=" gap-5">
            <button className="btn text-white bg-[#2DA5F3] uppercase mb-4 border-none">
              Best Deal
            </button>
            <h2 className="text-white font-semibold [font-size:_clamp(18px,4vw,24px)] mb-4">
              Brother HL - L3270CDW Singel Function Color Laser Printer
              {/* //Dynamic Title */}
            </h2>
            <p className="text-white mb-4">
              Lorem ipsum dolor amet consectetur. Sem et lectus Sem et lectus{" "}
            </p>
            <ShopNowButton href="#" />
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
