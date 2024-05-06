import { imageUrl } from "@/constants/imageUrl";
import {
  OnlineOrderThankYouPageType,
  OrderItem,
} from "@/types/onlineOrderThankPageTypes";
import { IconX } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const PurchagingProducts = ({ products }: any) => {
  console.log(products);

  return (
    <div className="w-full flex flex-col gap-y-5">
      {products?.map((product: OrderItem) => (
        <div
          key={product.id}
          className="flex items-center justify-between w-full border-b pb-2"
        >
          <div className="w-[60px] h-[60px] shrink-0 relative mr-2">
            <Image
              src={`${imageUrl}${product?.productPhotos[0]}`}
              alt="Brand Photo"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              className="w-full h-full top-0 left-0 object-cover border p-1"
            />
          </div>
          {/* == Product Name and Price etc == */}
          <div className="w-full">
            <span className="line-clamp-1 md:line-clamp-2 text-base w-full">
              {product?.productName}
            </span>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span>{product?.orderQuantity}</span>
                <IconX stroke={2} width={18} height={18} />
                <span>
                  {" "}
                  {product?.variant?.discountedPrice
                    ? product?.variant?.discountedPrice
                    : product?.variant?.sellingPrice}
                </span>
              </div>
              <span className="md:hidden block font-bold">
                $
                {product?.variant?.discountedPrice
                  ? product?.variant?.discountedPrice
                  : product?.variant?.sellingPrice}
              </span>
            </div>
          </div>
          {/* == Product Price == */}
          <div className="w-full hidden md:flex font-bold items-end justify-end">
            <span>
              $
              {product?.variant?.discountedPrice
                ? product?.variant?.discountedPrice
                : product?.variant?.sellingPrice * product?.orderQuantity}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PurchagingProducts;
