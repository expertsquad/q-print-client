import React from "react";
import StarRating from "../product/StarRating";
import { imageUrl } from "@/constants/imageUrl";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BestDealsProduct } from "@/types/bestDeals";

const BestDealProduct = ({ productData }: any) => {
  const router = useRouter();

  // <== Product View Functionality ==>
  const handleViewProduct = (e: any) => {
    e.stopPropagation();
    const product = productData?.map((product: any) => {
      return router.push(`/product/${product?.productId}`);
    });
  };
  return (
    <div>
      <div className="flex items-center justify-between gap-3 overflow-x-auto scroll-smooth no-scrollbar mt-5">
        {/* === Event Product Card === */}
        {productData?.map((product: BestDealsProduct) => (
          <div
            onClick={handleViewProduct}
            key={product?._id}
            className="flex items-center space-x-4 max-w-[300px] pr-20 py-2 pl-2 shrink-0 rounded-xl bg-white border border-white hover:border hover:duration-500 cursor-pointer hover:border-main-border-color"
          >
            <div className="w-[60px] h-[60px] relative mr-2.5 md:mr-5 shrink-0">
              <Image
                src={`${imageUrl}${product?.productPhoto}`}
                fill
                sizes="500px"
                alt="Product Photo"
                priority={true}
                className="w-full h-full top-0 left-0 object-cover p-1.5 border rounded-md"
              />
            </div>
            <div className="flex justify-center flex-col gap-1">
              <span className="text-black line-clamp-1">
                {product?.productName}
              </span>

              <StarRating rating={Math.round(product?.averageRating)} />

              <div className="flex items-center gap-2.5">
                <span className="text-black flex items-baseline gap-1 main-text-color text-xs md:text-base font-semibold">
                  {product?.sellingPrice} <small>QAR</small>
                </span>
                <del className="flex items-baseline gap-1 text-[10px] md:text-sm">
                  {product?.sellingPrice} <small>QAR</small>
                </del>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestDealProduct;
