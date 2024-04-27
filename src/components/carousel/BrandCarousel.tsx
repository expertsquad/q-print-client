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
  console.log()
  const image = data?.data[0]?.brandPhoto;

  return (
    <div className="logos mx-auto whitespace-nowrap max-w-[1280px] lg:mt-20 md:mt-20 mt-8 overflow-hidden">
      <div className="logos-slide  flex items-center justify-between w-screen shrink-0 gap-[100px]">
        {data?.data?.map((brand: BrandCarouselProps, index: number) => (
          <div
            className="w-[60px] h-[60px] shrink-0 relative "
            key={brand?._id}
          >
            <Image
              src={`${imageUrl}${brand?.brandPhoto}`}
              alt="Brand Carousel"
              objectFit="cover"
              fill
              className="w-full h-full top-0 left-0 object-contain rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandCarousel;
