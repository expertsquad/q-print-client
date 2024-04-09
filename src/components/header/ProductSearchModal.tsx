"use client";
import { useState } from "react";
import { useProductsBySearchQuery } from "@/redux/features/products/productsApi";
import Image from "next/image";
import { imageUrl } from "@/constants/imageUrl";
import { IProduct } from "@/types/productsType";
import { useRouter } from "next/navigation";

const ProductSearchModal = ({ data }: any) => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const { data: products } = useProductsBySearchQuery(`${data}`);
  console.log(products, "EID SHOPPING");

  // <== Product View Function ==>
  const handleViewProduct = (e: any) => {
    router.push(`/product/${e?._id}`);
  };

  return (
    <div className="absolute top-[80px] bg-white md:w-[600px] lg:w-[680px] w-full h-[400px] z-50 backdrop-blur-lg shadow-xl rounded-lg p-3 md:p-5 overflow-y-scroll no-scrollbar">
      {products?.data?.length > 0 ? (
        products?.data?.map((product: IProduct) => (
          <div
            key={product?._id}
            onClick={() => handleViewProduct(product)}
            className="flex items-center mb-5 cursor-pointer"
          >
            <div className="w-[60px] h-[60px] relative mr-2.5 md:mr-5 shrink-0">
              <Image
                src={`${imageUrl}${product?.productPhotos[0]}`}
                fill
                objectFit="cover"
                alt="Product Photo"
                className="w-full h-full top-0 left-0 object-cover p-1.5 border rounded-md"
              />
            </div>
            <div className="flex items-center justify-between w-full">
              <div>
                <span className="line-clamp-1">{product?.productName}</span>
                <div className="flex items-center gap-3">
                  <span>{product?.brand?.brandName}</span>
                  <span className="block md:hidden main-text-color">
                    {product?.variants?.sellingPrice | 200}
                  </span>
                </div>
              </div>
              <div>
                <span className="font-bold main-text-color md:block hidden">
                  {product?.variants?.sellingPrice | 200} <small>QAR</small>
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center ">No data found</div>
      )}
    </div>
  );
};

export default ProductSearchModal;
