import { imageUrl } from "@/constants/imageUrl";
import { addToCart } from "@/redux/features/cart/productCartSlice";
import { removeFromFavourite } from "@/redux/features/wishlist/favouriteCartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  IconArrowLeft,
  IconChevronRight,
  IconHeart,
  IconShoppingCart,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const WishlistAndCart = () => {
  const { products } = useAppSelector((state) => state.favouriteCartSlice);
  // <== Handle view wishlist click ==>
  const drawerCheckboxRef = useRef<HTMLInputElement>(null);
  const handleViewWishlistClick = () => {
    if (drawerCheckboxRef.current) {
      drawerCheckboxRef.current.checked = false;
    }
  };

  // <== Get wishlist data by wishlist slice ==>
  const dispatch = useAppDispatch();

  const defaultVariant = products?.map((product: any) => {
    return product.variants?.find((variant: any) => variant.isDefault === true);
  });

  // <== Handle Add Product In Cart ==>
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
    <div>
      <div className="drawer drawer-end overscroll-none ">
        <input
          id="my-drawer-4-wishlist"
          type="checkbox"
          className="drawer-toggle"
          ref={drawerCheckboxRef}
        />
        <div className="drawer-content">
          <div className="flex items-start gap-2.5">
            <label
              htmlFor="my-drawer-4-wishlist"
              className="cursor-pointer relative"
            >
              <span className="text-black text-opacity-50 ">
                <IconHeart width={24} height={24} />
              </span>
              <span className="absolute top-0 -right-2 bg-[#E73C17] rounded-full h-4 w-[17px] text-[10px] flex items-center justify-center text-white">
                {products?.length}
              </span>
            </label>
            <label
              htmlFor="my-drawer-4-wishlist"
              className="drawer-button hidden md:block cursor-pointer text-black text-opacity-60
              "
            >
              Wishlist
            </label>
          </div>
        </div>
        {/* ==Main Div */}
        <div className="drawer-side z-50 no-scrollbar">
          <label
            htmlFor="my-drawer-4-wishlist"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu-vertical pt-4 w-full md:max-w-[430px] h-screen  text-base-content bg-white relative no-scrollbar">
            {/* == Drawer content here == */}
            <label
              htmlFor="my-drawer-4-wishlist"
              aria-label="close sidebar"
              className="-mb-6 -ml-2 bg-white p-1 rounded-full w-7 h-7 flex justify-center items-center"
            >
              <span className="hidden md:block text-black text-opacity-70">
                <IconChevronRight width={24} height={24} />
              </span>
              <span className="block md:hidden">
                <IconArrowLeft />
              </span>
            </label>
            <h3 className="text-center text-black text-[20px] font-medium border-b pb-4 mb-7">
              Wishlist
            </h3>
            {products?.length ? (
              <>
                <div className="flex flex-col overflow-scroll no-scrollbar">
                  {products?.map((product: any) => (
                    <div
                      className="flex gap-5 w-full border-b transition duration-300 ease-in-out hover:bg-gray-100 p-4"
                      key={product._id}
                    >
                      {/* == Image container == */}
                      <div className="relative shrink-0 h-14 w-14">
                        <Image
                          src={`${imageUrl}${product?.productPhotos?.[1]}`}
                          alt="Product Image"
                          fill
                          objectFit="cover"
                          className="w-full h-full top-0 left-0 object-cover p-2 rounded-md border"
                        />
                      </div>
                      <div>
                        {/* == Product title and Delete btn == */}
                        <div className="flex items-center justify-between gap-3 w-full">
                          <span className="text-black text-opacity-90 text-[16px] line-clamp-1">
                            {product?.productName}
                          </span>
                          <button
                            onClick={() =>
                              dispatch(removeFromFavourite(product))
                            }
                            className="cursor-pointer text-black text-opacity-60"
                          >
                            <IconX width={20} height={20} />
                            {""}
                          </button>
                        </div>

                        <p className="text-black text-opacity-50 text-[12px]">
                          {product?.brand?.brandName}
                        </p>
                        {/* == Stock summary & Add to cart button == */}
                        <div className="flex items-center justify-between">
                          <div className="w-full whitespace-nowrap">
                            <b className="main-text-color">
                              {product?.price}
                              QAR
                            </b>{" "}
                            |{" "}
                            <small className="text-green-500">
                              {0} In Stock
                            </small>
                          </div>
                          <button
                            onClick={(event: React.MouseEvent) =>
                              handleAddToCart(event, product)
                            }
                            className="flex items-center whitespace-nowrap border py-1 px-2 rounded-lg text-[12px]"
                          >
                            <span className="text-black text-opacity-70 mr-1.5">
                              <IconShoppingCart
                                width={15}
                                stroke={1.5}
                                height={15}
                              />
                            </span>
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div>No data</div>
              </>
            )}
            <Link
              href="/wishlist"
              onClick={handleViewWishlistClick}
              className=" main-bg-color text-white text-center py-3 rounded-md mx-5 mt-5"
            >
              View Wishlist
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistAndCart;
