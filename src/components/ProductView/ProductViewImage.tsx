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
              className={`py-3 border cursor-pointer rounded-lg flex items-center justify-center overflow-hidden ${
                selectedImage._id === item._id
                  ? "border-fuchsia-700 shadow-2xl"
                  : ""
              }`}
              onClick={() => handleChangePhoto(item)}
            >
              <div className="flex items-center justify-center w-[50] h-[50] md:max-w-[100px] md:h-[100px] ">
                <Image
                  src={item.picture}
                  alt="demo Printer"
                  width={100}
                  height={120}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center border border-gray-300 w-full md:max-w-[552px] md:max-h-[550px] h-full">
          {selectedImage && (
            <div className="flex items-center justify-center rounded-lg">
              <Image
                className="object-cover"
                src={selectedImage.picture}
                alt="photo"
                width={400}
                height={350}
              />
            </div>
          )}
        </div>
      </div>
      {/* ==== */}
      {/* Right Side */}
      {/* ==== */}
      <div className="right-side">
        <ProductViewDescEtc />
      </div>
    </div>
  );
};

export default ProductViewImage;
