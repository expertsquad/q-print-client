"use client";
import { imageUrl } from "@/constants/imageUrl";
import { useGetBrandsQuery } from "@/redux/features/brand/brandsApi";
import Image from "next/image";
import { useEffect } from "react";

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
  console.log();
  const image = data?.data[0]?.brandPhoto;

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
      <div className="logos-slide flex items-center justify-between gap-[120px]">
        {data?.data?.map((brand: BrandCarouselProps) => (
          <div className="w-[60px] h-[60px] relative" key={brand?._id}>
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
    </div>
  );
};

export default BrandCarousel;
