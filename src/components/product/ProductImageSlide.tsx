"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IconHeart } from "@tabler/icons-react";
import { IconEye } from "@tabler/icons-react";
import { imageUrl } from "@/constants/imageUrl";
import { useDispatch } from "react-redux";
import QuickProductViewModal from "./QuickProductViewModal";
import { addToFavourite } from "@/redux/features/wishlist/favouriteCartSlice";

const ProductImageSlide = ({ product, defaultVariant }: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const startSlideshow = () => {
      intervalId = setInterval(() => {
        setCurrentSlide(
          (prevSlide) => (prevSlide + 1) % product.productPhotos.length
        );
      }, 1000);
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
  }, [isHovered, product.productPhotos.length]);

  const showSlide = (index: number) => {
    return { display: index === currentSlide ? "block" : "none" };
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  // <== Add To Favourite ==>
  const handleAddToFavourite = (event: React.MouseEvent, product: any) => {
    event.stopPropagation();
    dispatch(
      addToFavourite({
        ...product,
        price: product?.variants[0].discountedPrice
          ? product?.variants[0].discountedPrice
          : product?.variants[0].sellingPrice,
        orderQuantity: 1,
        variantName: product?.variants[0]?.variantName,
        inStock: product?.variants[0].inStock,
        productId: product._id,
      })
    );
  };

  // <== Handle Quick Product View ==>
  const handleQuickProductView = (event: React.MouseEvent) => {
    event.stopPropagation();
    setShowModal(true);
  };
  // <== Close Product Quick View Modal ==>
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section>
      <div className="w-full flex justify-between ">
        <div className="flex flex-col gap-2 ">
          {defaultVariant?.discountPercentage ? (
            <p className="bg-[#E73C17] md:h-8 md:w-8 h-6 w-6 rounded-full flex items-center justify-center text-white text-[8px] md:text-[10px]">
              {defaultVariant?.discountPercentage}%
            </p>
          ) : (
            ""
          )}
          <p className="bg-[#FA8232] md:h-8 md:w-8 h-6 w-6 rounded-full flex items-center justify-center text-white text-[8px] md:text-[10px]">
            {" "}
            Hot
          </p>
        </div>

        {product?.productPhotos?.map((productImg: string, index: number) => (
          <div
            key={index}
            style={showSlide(index)}
            onMouseEnter={() => setIsHovered(true)}
            onTouchStart={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex justify-center  flex-col relative w-8/12 "
          >
            <div className="relative shrink-0 w-[120px] h-[120px] md:h-[130px] md:w-[150px] mx-auto">
              <Image
                alt="Brand Carousel"
                fill
                objectFit="cover"
                src={`${imageUrl}${productImg}`}
                sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full h-full top-0 left-0 object-cover"
              />
            </div>
            <div className=" ">
              <div className="indicators gap-2 flex mt-8 justify-center items-center ">
                {product?.productPhotos?.map((_: any, dotIndex: number) => (
                  <div
                    key={dotIndex}
                    onClick={() => handleDotClick(dotIndex)}
                    className={`indicator w-[6px] h-[6px] rounded-full cursor-pointer ${
                      dotIndex === currentSlide
                        ? "main-bg-color"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="flex flex-col gap-2 ">
          <button
            onClick={(event) => handleAddToFavourite(event, product)}
            className=" cursor-pointer  md:text-[12px]  border hover:text-fuchsia-700  md:h-8 md:w-8 h-6 w-6 rounded-full flex justify-center items-center hover:bg-gray-100  "
          >
            <IconHeart className="md:h-4 md:w-4 h-[14px] w-[14px]" />
            {""}
          </button>
          <button
            onClick={handleQuickProductView}
            className="cursor-pointer md:text-[12px] hidden md:flex invisible group-hover:visible group-hover:duration-500 border hover:text-fuchsia-700  md:h-8 md:w-8 h-6 w-6 rounded-full  justify-center items-center hover:bg-gray-100"
          >
            <IconEye className="md:h-4 md:w-4 h-[10px] w-[10px] " />
            {""}
          </button>
        </div>
      </div>
      <QuickProductViewModal
        id={product?._id}
        handleCloseModal={handleCloseModal}
        showModal={showModal}
      />
    </section>
  );
};

export default ProductImageSlide;
