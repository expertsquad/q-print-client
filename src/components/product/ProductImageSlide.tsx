"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IconHeart } from "@tabler/icons-react";

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
  console.log(product);

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
        <button className="btn btn-circle bg-[#E73C17]  hover:bg-[#E73C17]  text-white ">
          Hot
        </button>
        <button className="btn btn-circle bg-[#FA8232] hover:bg-[#FA8232] text-white">
          50%
        </button>
      </div>

      {product.images.map((productImg: string, index: number) => (
        <div
          key={index}
          style={showSlide(index)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex justify-center items-center flex-col relative "
        >
          <div className="h-[150px] w-[150px] flex mt-8 justify-center items-center">
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
                  className={`indicator w-[10px] h-[10px] rounded-full cursor-pointer ${
                    dotIndex === currentSlide ? "bg-[#E73C17]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="">
        <button className="btn btn-circle  hover:bg-gradient-to-l from-[#C83B62] to-[#7F35CD] hover:text-white ">
          <IconHeart />
        </button>
      </div>
    </div>
  );
};

export default ProductImageSlide;
