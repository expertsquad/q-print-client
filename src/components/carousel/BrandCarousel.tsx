"use client";
import { imageUrl } from "@/constants/imageUrl";
import { useGetBrandsQuery } from "@/redux/features/brand/brandsApi";
import Image from "next/image";

const BrandCarousel = () => {
  const { data } = useGetBrandsQuery("");
  return (
    <div className="logos overflow-hidden mx-auto max-w-[1280px] lg:mt-20 md:mt-20 mt-8">
      {data?.data?.map((brand: any, i: number) => (
        <div className="logos-slide" key={i}>
          <Image
            alt="Brand Carousel"
            width={60}
            height={60}
            src={`${imageUrl}${brand?.brandPhoto}`}
          />
        </div>
      ))}
    </div>
  );
};

export default BrandCarousel;
