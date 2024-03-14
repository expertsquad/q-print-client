"use client";
import { productViewImage } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import ProductViewDescEtc from "./ProductViewDescEtc";
import { imageUrl } from "@/constants/imageUrl";

const ProductViewImage = ({ product }: any) => {
  console.log(product);
  const [selectedImage, setSelectedImage] = useState(product?.productPhotos[0]);

  console.log(selectedImage?.[0], "dkjfdfjk");

  const handleChangePhoto = (item: any) => {
    setSelectedImage(item);
  };
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 mb-16 md:gap-3 gap-7">
      {/* ==Left Side== */}
      <div className="flex md:flex-row flex-col-reverse items-center gap-5 md:flex-1">
        <div className=" flex md:flex-col gap-3">
          {product?.productPhotos?.map((image: any) => (
            <div
              key={image._id}
              className={`border cursor-pointer rounded-lg flex items-center justify-center hover:shadow-[0px_4px_24px_0px_rgba(127,_53,_205,_0.15)] overflow-hidden ${
                selectedImage === image ? "border-fuchsia-700 " : ""
              }`}
              onClick={() => handleChangePhoto(image)}
            >
              <div className="py-2 w-14 h-14 md:w-20 md:h-24 relative">
                <Image
                  src={`${imageUrl}${image}`}
                  alt="demo Printer"
                  fill
                  sizes="(max-width: 80px) 10vw, (max-width: 100px) 10vw, 15vw"
                  objectFit="contain"
                  className="md:p-2"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center border border-gray-300  rounded-lg w-full">
          {selectedImage && (
            <div className="rounded-lg h-96 w-96 md:h-[420px] md:w-[400px] relative">
              <Image
                src={`${imageUrl}${selectedImage?.image}`}
                alt="Product Photo"
                fill
                objectFit="contain"
                sizes="(max-width: 350px) 50vw, (max-width: 350px) 60vw, 65vw"
                className="md:p-5"
              />
            </div>
          )}
        </div>
      </div>
      {/* ==== */}
      {/* ==Right Side== */}
      <div className="right-side md:flex-1">
        <ProductViewDescEtc productDesc={product} />
      </div>
    </div>
  );
};

export default ProductViewImage;
