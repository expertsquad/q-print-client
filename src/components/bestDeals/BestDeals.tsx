"use client";
import Image from "next/image";
import { useGetBestDealsQuery } from "@/redux/features/dealWidgetSliderEtc/bestDeal";
import { imageUrl } from "@/constants/imageUrl";
import CountdownTimer from "./CountdownTimer";
import BestDealProduct from "./BestDealProduct";
import BestDealsSkeleton from "../shared/Skeleton/BestDealsSkeleton";

const BestDeals = () => {
  const { data, isLoading } = useGetBestDealsQuery("");
  console.log(data?.data, "Best deals");
  const endDate = new Date(data?.data?.endDate);

  // <== Get Product Data From Best Deals ==>
  const productData = data?.data?.products?.map((product: any) => {
    return product;
  });

  return isLoading ? (
    <BestDealsSkeleton />
  ) : (
    <section
      className={`py-4 px-2 md:py-7 md:px-8  lg:mt-20 md:mt-20 mt-8 rounded-lg`}
      style={{
        backgroundColor: `${
          data?.data?.backgroundColor && `#${data?.data?.backgroundColor}`
        }`,
        backgroundImage: `url(${imageUrl}${data?.data?.backgroundPhoto})`,
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex items-center justify-between gap-6 overflow-hidden">
        <div className="w-1/4">
          <div className="relative w-16 md:w-32 h-16 md:h-32 lg:w-48 lg:h-48 ">
            <Image
              src={`${imageUrl}${data?.data?.firstProductPhoto}`}
              alt="Offer Image"
              fill
              sizes="500px"
              priority={true}
              className="w-full h-full top-0 left-0 object-contain"
            />
          </div>
        </div>
        <div className="w-2/4 flex items-center flex-col space-y-6">
          <div className="text-center space-y-2 md:space-y-3 lg:space-y-3">
            <h4 className="[font-size:_clamp(0.6em,4vw,0.9em)] main-text-color ">
              BEST DEALS
            </h4>
            <h1 className="md:line-clamp-2 line-clamp-1 text-sm md:text-lg main-text-color font-semibold ">
              {data?.data?.title}
            </h1>
            <p className="md:line-clamp-2 line-clamp-1 text-sm md:text-lg text-gray-500">
              {data?.data?.description}
            </p>
          </div>
          <CountdownTimer endDate={endDate} />
        </div>
        <div className="w-1/4 flex items-end justify-end overflow-hidden">
          <div className="relative w-16 md:w-32 h-16 md:h-32 lg:w-48 lg:h-48 ">
            <Image
              src={`${imageUrl}${data?.data?.secondProductPhoto}`}
              alt="Offer Image"
              fill
              sizes="500px"
              priority={true}
              className="w-full h-full top-0 left-0 object-contain"
            />
          </div>
        </div>
      </div>
      <BestDealProduct productData={productData} />
    </section>
  );
};

export default BestDeals;
