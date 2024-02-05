// Jaker Hossain
//Product View image
"use client";
import { productViewImage } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import ProductViewDescEtc from "./ProductViewDescEtc";

const ProductViewImage = () => {
  const [selectedImage, setSelectedImage] = useState(productViewImage[0]);

  const handleChangePhoto = (item: any) => {
    setSelectedImage(item);
  };
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 mb-16 md:gap-3 gap-7">
      {/* ==== */}
      {/* Left Side */}
      {/* ==== */}
      <div className="flex md:flex-row flex-col-reverse items-center gap-5">
        <div className=" flex md:flex-col gap-3">
          {productViewImage.map((item) => (
            <div
              key={item._id}
              className={` border cursor-pointer rounded-lg flex items-center justify-center overflow-hidden ${
                selectedImage._id === item._id
                  ? "border-fuchsia-700 shadow-2xl"
                  : ""
              }`}
              onClick={() => handleChangePhoto(item)}
            >
              <div className="flex items-center justify-center py-2 w-full h-full max-w-20 max-h-32">
                <Image
                  src={item.picture}
                  alt="demo Printer"
                  width={80}
                  height={100}
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center border border-gray-300  rounded-lg w-full">
          {selectedImage && (
            <div className="flex items-center justify-center rounded-lg w-full h-full max-w-[450px] max-h-[550px]">
              <Image
                // className="object-cover"
                className="w-full h-full"
                src={selectedImage.picture}
                alt="photo"
                width={350}
                height={350}
              />
            </div>
          )}
        </div>
      </div>
      {/* ==== */}
      {/* Right Side */}
      <div className="right-side">
        <ProductViewDescEtc />
      </div>
    </div>
  );
};

export default ProductViewImage;
