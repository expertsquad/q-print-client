"use client";
import React, { useState } from "react";
import {
  IconCheck,
  IconEye,
  IconShoppingBag,
  IconShoppingCart,
  IconTrashX,
} from "@tabler/icons-react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeFromFavourite } from "@/redux/features/wishlist/favouriteCartSlice";
import { addToCart } from "@/redux/features/cart/productCartSlice";
import WishlistQuickOrderBTNModal from "./WishlistQuickOrderBTNModal";
import noproductFound from "@/assets/empty-card-photo.svg";
import { imageUrl } from "@/constants/imageUrl";
import QuickProductViewModal from "../product/QuickProductViewModal";

const WishlistPageData = ({ products }: any) => {
  console.log(products, "wishlist page data");
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [productId, setProductId] = useState<string | null>(null);

  const handleToggleModal = (id: string | null) => {
    setProductId(id);
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddToCart = (event: React.MouseEvent, product: any) => {
    event.stopPropagation();
    dispatch(
      addToCart({
        ...product,
        ...product?.variants[0],
        price: product?.variants[0].discountedPrice
          ? product?.variants[0].discountedPrice
          : product?.variants[0].sellingPrice,
        orderQuantity: 1,
      })
    );
  };

  return (
    <section>
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-black text-opacity-80 text-xl md:text-3xl md:mb-10 mb-3 md:px-0">
          My Wishlist
        </h2>
        {products?.length ? (
          <>
            <div>
              {products?.map((product: any) => (
                <div
                  key={product._id}
                  className="flex md:wishlist-data items-center md:justify-between border-b py-5 transition duration-300 ease-in-out hover:bg-gray-100 md:pl-5"
                >
                  <div className="main-div flex gap-5">
                    <button
                      onClick={() => dispatch(removeFromFavourite(product))}
                      className="hidden md:block text-black text-opacity-50"
                    >
                      <IconTrashX width={24} stroke={2} height={24} />
                    </button>
                    <div className="relative h-14 w-14 shrink-0">
                      <Image
                        src={`${imageUrl}${product?.productPhotos?.[1]}`}
                        alt="Product Image"
                        fill
                        objectFit="cover"
                        className="w-full h-full top-0 left-0 object-cover border p-1.5 rounded-md"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between w-full">
                        <h3 className="line-clamp-1 md:line-clamp-2 text-[16px] font-medium">
                          {product?.productName}
                        </h3>
                        <button
                          className="flex justify-end md:hidden text-black text-opacity-50"
                          onClick={() => dispatch(removeFromFavourite(product))}
                        >
                          <IconTrashX stroke={2} width={24} height={24} />
                        </button>
                      </div>
                      <p>{product?.brand?.brandName}</p>
                      <div className="flex justify-between md:hidden">
                        <div>
                          <span className="main-text-color pr-2">
                            {" "}
                            {product?.price} <small>QAR</small>
                          </span>
                          |
                          <small className="text-[#03A609] pl-2">
                            {product?.defaultVariant?.inStock} In stock
                          </small>
                        </div>
                        <button
                          onClick={(event: React.MouseEvent) =>
                            handleAddToCart(event, product)
                          }
                          className="flex items-center text-sm text-black text-opacity-70 py-2 px-[10px] border border-black border-opacity-10 rounded-md"
                        >
                          <span className="">
                            <IconShoppingCart width={16} height={16} />
                          </span>
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center">
                    <span className="main-text-color">
                      {product?.price} <small>QAR</small>
                    </span>
                  </div>
                  <div className="hidden md:block">
                    <div className="flex items-center gap-10">
                      <p
                        className={`whitespace-nowrap ${
                          product?.defaultVariant?.inStock
                            ? "text-[#03A609]"
                            : "text-[#E73C17]"
                        }`}
                      >
                        {product?.defaultVariant?.inStock ? (
                          <span className={`flex `}>
                            <IconCheck /> In stock
                          </span>
                        ) : (
                          <span>Out of stock</span>
                        )}
                      </p>
                      <div className="flex items-center gap-3">
                        <button
                          className="border border-[#F2F2F2] rounded-full p-2.5 text-black text-opacity-50"
                          onClick={() => handleToggleModal(product?._id)}
                        >
                          <span>
                            <IconEye width={20} height={20} stroke={2} />
                          </span>
                        </button>
                        <button
                          onClick={(event: React.MouseEvent) =>
                            handleAddToCart(event, product)
                          }
                          className="border border-[#F2F2F2] rounded-full p-2.5 text-black text-opacity-50"
                        >
                          <IconShoppingBag width={20} height={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center ">
                    <WishlistQuickOrderBTNModal />
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-5 items-center justify-center min-h-[420px]">
            <Image
              src={noproductFound}
              width={130}
              height={130}
              alt="No Products Found"
            />
            <p className="">No product added</p>
          </div>
        )}
      </div>
      {showModal && productId && (
        <QuickProductViewModal
          id={productId}
          handleCloseModal={handleCloseModal}
          showModal={showModal}
        />
      )}
    </section>
  );
};

export default WishlistPageData;
