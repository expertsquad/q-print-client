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
        <p className="bg-[#E73C17]  w-[20px] h-[20px] md:h-[40px] md:w-[40px]  rounded-full flex items-center justify-center text-white text-[6px] md:text-[12px]">
          {" "}
          50%
        </p>
        <p className="bg-[#FA8232]  w-[20px] h-[20px] md:h-[40px] md:w-[40px]  rounded-full flex items-center justify-center text-white text-[6px] md:text-[12px]">
          {" "}
          50%
        </p>
      </div>

      {product.images.map((productImg: string, index: number) => (
        <div
          key={index}
          style={showSlide(index)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex justify-center items-center flex-col relative "
        >
          <div className="h-[100px] w-[100px] flex mt-8 justify-center items-center">
            <Image
              src={productImg}
              alt="hero item images"
              width={150}
              height={150}
            />
          </div>
          <div className=" ">
            <div className="indicators gap-2 flex mt-8 justify-center items-center ">
              {product.images.map((_, dotIndex: number) => (
                <div
                  key={dotIndex}
                  onClick={() => handleDotClick(dotIndex)}
                  className={`indicator w-[8px] h-[8px] rounded-full cursor-pointer ${
                    dotIndex === currentSlide ? "main-bg-color" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="flex flex-col gap-2">
        <button className=" cursor-pointer  md:text-[12px]  border  w-[20px] h-[20px] md:h-[40px] md:w-[40px] rounded-full flex justify-center items-center ">
          <IconHeart className="p-[2px]" />
        </button>
        <button className=" cursor-pointer  md:text-[12px]  border  w-[20px] h-[20px] md:h-[40px] md:w-[40px] rounded-full flex justify-center items-center ">
          <IconEye className="p-[2px]" />
        </button>
      </div>
    </div>
  );
};

export default ProductImageSlide;
