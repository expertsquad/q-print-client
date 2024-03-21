"use client";
import React from "react";
import ShopNowButton from "../UI/btn/ShopNowButton";
import Image from "next/image";
import StarRating from "../product/StarRating";
import { useGetBestDealsQuery } from "@/redux/features/dealWidgetSliderEtc/bestDeal";
import { imageUrl } from "@/constants/imageUrl";
import { useRouter } from "next/navigation";

const BestDeals = () => {
  const { data } = useGetBestDealsQuery("");
  const router = useRouter();

  // <== Get Product Data From Best Deals ==>
  const productData = data?.data?.products?.map((product: any) => {
    return product;
  });

  // <== Product View Functionality ==>
  const handleViewProduct = (e: any) => {
    e.stopPropagation();
    const product = productData?.map((product: any) => {
      return router.push(`/product/${product?._id}`);
    });
  };
  return (
    <section className="bg-[#EDF2EE] py-4 px-2 md:py-7 md:px-8  lg:mt-20 md:mt-20 mt-8 rounded-lg">
      <div className="flex items-center justify-between gap-6">
        <div className="w-1/4 ">
          <Image
            height={200}
            width={200}
            className="pb-36 sm:pb-0 md:pb-0 lg:pb-0"
            src="https://www.transparentpng.com/thumb/printer/iqV2Vo-printer-free-download-transparent.png"
            // src={`${imageUrl}${data?.data?.firstProductPhoto}`}
            alt="Test iamge"
          />
        </div>
        <div className="w-2/4 flex items-center flex-col space-y-6">
          <div className="text-center space-y-2 md:space-y-3 lg:space-y-3">
            <h4 className="[font-size:_clamp(0.6em,4vw,0.9em)] main-text-color ">
              BEST DEALS
            </h4>
            <h1 className=" line-clamp-2 [font-size:_clamp(0.95em,4vw,1.9em)] main-text-color font-semibold ">
              {data?.data?.title}
            </h1>
            <p className=" line-clamp-2 [font-size:_clamp(0.6em,4vw,1.2em)] text-gray-500">
              {data?.data?.description}
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
            // src={`${imageUrl}${data?.data?.secondProductPhoto}`}
            alt="Test image with monitor"
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 overflow-x-auto scroll-smooth no-scrollbar">
        {/* === Event Product Card === */}
        {productData?.map((product: any) => (
          <div
            onClick={handleViewProduct}
            key={product?._id}
            className="flex items-center space-x-4 max-w-[300px] pr-20 py-2 pl-2 shrink-0 rounded-xl bg-white border border-white hover:border hover:duration-500 cursor-pointer hover:border-fuchsia-700"
          >
            <div className="w-12 h-12 md:w-20 md:h-20 relative bg-background-color">
              <Image
                objectFit="cover"
                fill
                src="https://www.transparentpng.com/thumb/printer/TdXPfS-canon-printer-icon.png"
                // src={`${imageUrl}${product?.productPhoto}`}
                className="w-full h-full top-0 left-0 object-cover"
                alt=""
              />
            </div>
            <div className="flex justify-center flex-col gap-1">
              <span className="text-black line-clamp-1">
                {product?.productName}
              </span>

              <StarRating rating={4} />

              <div className="flex items-center gap-2.5">
                <span className="text-black flex items-baseline gap-1 main-text-color text-xs md:text-base font-semibold">
                  {product?.sellingPrice} <small>QAR</small>
                </span>
                <del className="flex items-baseline gap-1 text-[10px] md:text-sm">
                  {product?.sellingPrice} <small>QAR</small>
                </del>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestDeals;
