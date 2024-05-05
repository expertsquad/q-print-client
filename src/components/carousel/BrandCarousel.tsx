"use client";
import { imageUrl } from "@/constants/imageUrl";
import { useGetBrandsQuery } from "@/redux/features/brand/brandsApi";
import Image from "next/image";
import { useEffect } from "react";
import BrandCarouselSkeleton from "../shared/Skeleton/BrandCarouselSkeleton";

interface BrandCarouselProps {
  _id: string;
  brandName: string;
  brandPhoto: any;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const BrandCarousel = () => {
  const { data, isLoading } = useGetBrandsQuery("");

  useEffect(() => {
    const logosSlide = document.querySelector(".logos-slide");
    const logos = document.querySelector(".logos");
    if (logosSlide && logos) {
      const copy = logosSlide.cloneNode(true);
      logos.appendChild(copy);
    }
  }, [data]);
  return (
    <div className="logos mx-auto whitespace-nowrap max-w-[1280px] lg:mt-20 md:mt-20 mt-8 overflow-hidden">
      {isLoading ? (
        <div className="flex items-center justify-between gap-[90px] md:gap-[113px]">
          {[...Array(8)].map((_, index) => {
            return <BrandCarouselSkeleton key={index} />;
          })}
        </div>
      ) : (
        <div className="logos-slide flex items-center justify-between">
          {data?.data?.map((brand: BrandCarouselProps) => (
            <div
              className="[width:clamp(40px,5vw,60px)] [height:clamp(40px,5vw,60px)]  relative mx-14 md:mx-24"
              key={brand?._id}
            >
              <Image
                src={`${imageUrl}${brand?.brandPhoto}`}
                alt="Brand Carousel"
                fill
                sizes="200"
                priority={true}
                className="rounded-md"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrandCarousel;
