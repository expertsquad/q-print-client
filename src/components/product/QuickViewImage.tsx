"use client";
import Image from "next/image";
import React, { useState } from "react";
import { imageUrl } from "@/constants/imageUrl";
import QuickViewDescription from "./QuickViewDescription";

const QuickViewImage = ({ product }: any) => {
  const [selectedImage, setSelectedImage] = useState(product?.productPhotos[0]);

  const handleChangePhoto = (item: any) => {
    setSelectedImage(item);
  };

  return (
    <div className="flex flex-col-reverse items-center gap-5 md:flex-1">
      <div className="flex gap-3">
        {product?.productPhotos?.map((image: any) => (
          <div
            key={image._id}
            className={`border cursor-pointer rounded-lg flex items-center justify-center hover:shadow-[0px_4px_24px_0px_rgba(127,_53,_205,_0.15)] overflow-hidden ${
              selectedImage === image ? "border-fuchsia-700" : ""
            }`}
            onClick={() => handleChangePhoto(image)}
          >
            <div className="w-16 h-16 shrink-0 relative">
              <Image
                src={`${imageUrl}${image}`}
                alt="Product Photo"
                fill
                sizes="(max-width: 80px) 10vw, (max-width: 100px) 10vw, 15vw"
                className="w-full h-full top-0 left-0 object-contain p-2"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center border rounded-lg w-full h-full">
        {selectedImage && (
          <div className="h-80 w-80 shrink-0 relative">
            <Image
              src={`${imageUrl}${selectedImage}`}
              alt="Product Photo"
              fill
              sizes="(max-width: 350px) 50vw, (max-width: 350px) 60vw, 65vw"
              className="w-full h-full top-0 left-0 object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickViewImage;
