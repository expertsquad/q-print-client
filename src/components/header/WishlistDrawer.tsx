import React from "react";
import CustomGlobalDrawer from "../shared/CustomGlobalDrawer";
import { IconArrowLeft, IconShoppingCart, IconX } from "@tabler/icons-react";
import ModalCloseBtn from "../shared/ModalCloseBtn";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { addToCart } from "@/redux/features/cart/productCartSlice";
import Image from "next/image";
import { imageUrl } from "@/constants/imageUrl";
import { removeFromFavourite } from "@/redux/features/wishlist/favouriteCartSlice";

const WishlistDrawer = ({ openWishlistDrawer, setOpenWishlistDrawer }: any) => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.favouriteCartSlice);

  const handleCloseWishlist = () => {
    setOpenWishlistDrawer(false);
  };

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
      <CustomGlobalDrawer
        isVisible={openWishlistDrawer}
        setOpenDrawer={setOpenWishlistDrawer}
        drawerController="w-full md:max-w-[500px]"
      >
        <ModalCloseBtn
          handleClose={handleCloseWishlist}
          icon={<IconArrowLeft stroke={2} width={20} height={20} />}
        />
        <h3 className="text-center text-black text-[20px] font-medium border-b pb-4 mb-7">
          Wishlist
        </h3>
        <div>
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
                          onClick={() => dispatch(removeFromFavourite(product))}
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
                          <small className="text-green-500">{0} In Stock</small>
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
              <div className="flex items-center justify-center">No data</div>
            </>
          )}
          <Link
            href="/wishlist"
            onClick={handleCloseWishlist}
            className="main-bg-color text-white text-center py-3 rounded-md mx-5 mt-10 flex items-center justify-center"
          >
            View Wishlist
          </Link>
        </div>
      </CustomGlobalDrawer>
    </div>
  );
};

export default WishlistDrawer;
