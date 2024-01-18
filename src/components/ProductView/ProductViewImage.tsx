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
      <div className="flex md:flex-row flex-col-reverse items-center gap-5">
        <div className=" flex md:flex-col gap-3">
          {productViewImage.map((item) => (
            <div
              key={item._id}
              className="py-3 border border-fuchsia-700 cursor-pointer"
              onClick={() => handleChangePhoto(item)}
            >
              <Image
                src={item.picture}
                alt="demo Printer"
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center border border-gray-300 h-full">
          <div className="flex items-center justify-center ">
            {selectedImage && (
              <Image
                src={selectedImage.picture}
                alt="photo"
                width={400}
                height={350}
              />
            )}
          </div>
        </div>
      </div>
      {/* ---- */}
      <div className="right-side">
        <ProductViewDescEtc />
      </div>
    </div>
  );
};

export default ProductViewImage;
