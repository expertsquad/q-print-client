import React from "react";
import ShopNowButton from "../UI/btn/ShopNowButton";
import Image from "next/image";
import StarRating from "../product/StarRating";

const BestDeals = () => {
  const rating = 3;
  return (
    <section className="bg-[#EDF2EE] py-4 px-2 md:py-7 md:px-8  lg:mt-20 md:mt-20 mt-8 rounded-lg">
      <div className="flex items-center justify-between gap-6">
        <div className="w-1/4 ">
          <Image
            height={200}
            width={200}
            className="pb-36 sm:pb-0 md:pb-0 lg:pb-0"
            src="https://www.transparentpng.com/thumb/printer/iqV2Vo-printer-free-download-transparent.png"
            alt="Test iamge"
          />
        </div>
        <div className="w-2/4 flex items-center flex-col space-y-6">
          <div className="text-center space-y-2 md:space-y-3 lg:space-y-3">
            <h4 className="[font-size:_clamp(0.6em,4vw,0.9em)] main-text-color ">
              BEST DEALS
            </h4>
            <h1 className=" line-clamp-2 [font-size:_clamp(0.95em,4vw,1.9em)] main-text-color font-semibold ">
              Brother HL - L3270CDW Singel Function Color Laser Printer
            </h1>
            <p className=" line-clamp-2 [font-size:_clamp(0.6em,4vw,1.2em)] text-gray-500">
              Hurry & Get Discounts on all Brother Device up to 30% Off
            </p>
          </div>

          {/* coundown started */}

          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col border p-3 rounded-lg items-center justify-center bg-white ">
              <span className="countdown [font-size:_clamp(0.9em,4vw,1.5em)]  ">
                {/* <span className="" style={{ "--value": 7 }}></span> */}
              </span>
              <p className=" [font-size:_clamp(0.6em,4vw,0.8em)] font-bold bg-gradient-to-r from-[#C83B62]  to-[#7F35CD]  text-transparent bg-clip-text">
                DAYS
              </p>
            </div>
            <div className="flex flex-col border p-3 rounded-lg items-center justify-center bg-white">
              <span className="countdown [font-size:_clamp(0.9em,4vw,1.5em)] ">
                {/* <span style={{ "--value": 15 }}></span> */}
              </span>
              <p className=" [font-size:_clamp(0.6em,4vw,0.8em)] font-bold bg-gradient-to-r from-[#C83B62]  to-[#7F35CD]  text-transparent bg-clip-text">
                HOURS
              </p>
            </div>
            <div className="flex flex-col border p-3 rounded-lg items-center justify-center bg-white">
              <span className="countdown [font-size:_clamp(0.9em,4vw,1.5em)] ">
                {/* <span style={{ "--value": 48 }}></span> */}
              </span>
              <p className=" [font-size:_clamp(0.6em,4vw,0.8em)] font-bold bg-gradient-to-r from-[#C83B62]  to-[#7F35CD]  text-transparent bg-clip-text">
                MIN
              </p>
            </div>
            <div className="flex flex-col border p-3 rounded-lg items-center justify-center bg-white ">
              <span className="countdown [font-size:_clamp(0.9em,4vw,1.5em)] ">
                {/* <span style={{ "--value": 31 }}></span> */}
              </span>
              <p className=" [font-size:_clamp(0.6em,4vw,0.8em)] font-bold bg-gradient-to-r from-[#C83B62]  to-[#7F35CD]  text-transparent bg-clip-text">
                SEC
              </p>
            </div>
          </div>
          {/* coundown ended */}

          <div>
            {" "}
            <ShopNowButton href="#" />
          </div>
        </div>
        <div className="w-1/4 ">
          <Image
            height={200}
            width={200}
            className="pb-36 sm:pb-0 md:pb-0 lg:pb-0"
            src="https://www.transparentpng.com/thumb/printer/TdXPfS-canon-printer-icon.png"
            alt="Test image with monitor"
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 overflow-x-auto scroll-smooth no-scrollbar">
        {/* <!-------------- event Card 01 -------------> */}
        <div className="flex items-center space-x-4 max-w-[300px] pr-20 py-2 pl-2 shrink-0 rounded-xl bg-white border border-white hover:border hover:duration-500 cursor-pointer hover:border-fuchsia-700">
          <div className="w-20 h-20 rounded-lg bg-background-color">
            <Image
              height={100}
              width={100}
              src="https://www.transparentpng.com/thumb/printer/TdXPfS-canon-printer-icon.png"
              alt=""
            />
          </div>
          <div className="flex justify-center flex-col gap-1">
            <h3 className="text-black">Hevy Printer</h3>

            {/* rating started  small card rating  dfsd*/}
            <StarRating rating={rating} />

            {/* rating end  small card rating */}

            <strong className="text-red-regular font-bold">
              $86.33
              <del className="text-gray-400 pl-2 font-semibold">$100</del>
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestDeals;
