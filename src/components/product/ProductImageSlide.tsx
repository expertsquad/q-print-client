"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IconHeart } from "@tabler/icons-react";
import { IconEye } from "@tabler/icons-react";

interface IProductImageSlideProps {
  product: IProduct;
}

interface IProduct {
  images: string[];
  name: string;
  brandName: string;
  price: number;
  discount: number;
  rating: number;
}

const ProductImageSlide: React.FC<IProductImageSlideProps> = ({ product }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const startSlideshow = () => {
      intervalId = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % product.images.length);
      }, 3000);
    };

    const stopSlideshow = () => {
      clearInterval(intervalId);
    };

    if (isHovered) {
      startSlideshow();
    } else {
      stopSlideshow();
    }

    return () => {
      stopSlideshow();
    };
  }, [isHovered, product.images.length]);

  const showSlide = (index: number) => {
    return { display: index === currentSlide ? "block" : "none" };
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full flex justify-between ">
      <div className="flex flex-col gap-2 ">
        <p className="bg-[#E73C17]  md:h-8 md:w-8 h-5 w-5  rounded-full flex items-center justify-center text-white text-[6px] md:text-[10px]">
          {" "}
          50%
        </p>
        <p className="bg-[#FA8232]  md:h-8 md:w-8 h-5 w-5  rounded-full flex items-center justify-center text-white text-[6px] md:text-[10px]">
          {" "}
          Hot
        </p>
      </div>

      {product.images.map((productImg: string, index: number) => (
        <div
          key={index}
          style={showSlide(index)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex justify-center  flex-col relative w-8/12 "
        >
          <div className="h-28 w-7 md:h-40 md:w-12">
            <Image
              alt="Brand Carousel"
              // width={170}
              // height={120}
              fill
              objectFit="contain"
              src={productImg}
              sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className=" ">
            <div className="indicators gap-2 flex mt-8 justify-center items-center ">
              {product.images.map((_, dotIndex: number) => (
                <div
                  key={dotIndex}
                  onClick={() => handleDotClick(dotIndex)}
                  className={`indicator w-[6px] h-[6px] rounded-full cursor-pointer ${
                    dotIndex === currentSlide ? "main-bg-color" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="flex flex-col gap-2 ">
        <button className=" cursor-pointer  md:text-[12px]  border hover:text-fuchsia-700  md:h-8 md:w-8 h-5 w-5 rounded-full flex justify-center items-center hover:bg-gray-100  ">
          <IconHeart className="md:h-4 md:w-4 h-[10px] w-[10px]" />
          {""}
        </button>
        <button className="  cursor-pointer  md:text-[12px]  invisible group-hover:visible group-hover:duration-500 border hover:text-fuchsia-700  md:h-8 md:w-8 h-5 w-5 rounded-full flex justify-center items-center hover:bg-gray-100  ">
          <IconEye className="md:h-4 md:w-4 h-[10px] w-[10px] " />
          {""}
        </button>
      </div>
    </div>
  );
};

export default ProductImageSlide;
