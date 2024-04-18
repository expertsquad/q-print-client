"use client";
import { imageUrl } from "@/constants/imageUrl";
import { useGetBrandsQuery } from "@/redux/features/brand/brandsApi";
import Image from "next/image";

interface BrandCarouselProps {
  _id: string;
  brandName: string;
  brandPhoto: any;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const BrandCarousel = () => {
  const { data } = useGetBrandsQuery("");
  console.log(data?.data, "nizam bhai ");
  return (
    <div className="logos flex justify-between overflow-hidden mx-auto max-w-[1280px] lg:mt-20 md:mt-20 mt-8">
      {data?.data?.map((brand: BrandCarouselProps) => (
        <div
          className="logos-slide w-[60px] h-[60px] shrink-0 relative "
          key={brand?._id}
        >
          <Image
            src={`${imageUrl}${brand?.brandPhoto}`}
            alt="Brand Carousel"
            objectFit="cover"
            fill
            className="w-full h-full top-0 left-0 object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default BrandCarousel;
