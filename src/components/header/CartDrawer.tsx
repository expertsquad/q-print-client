"use client";
import CustomGlobalDrawer from "../shared/CustomGlobalDrawer";
import ModalCloseBtn from "../shared/ModalCloseBtn";
import {
  IconArrowLeft,
  IconChevronLeft,
  IconMinus,
  IconPlus,
  IconShoppingCartCog,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import { useAppSelector } from "@/redux/hook";
import { imageUrl } from "@/constants/imageUrl";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeOneFromCart,
} from "@/redux/features/cart/productCartSlice";
import Link from "next/link";
import MultipleQuickOrder from "../quick-order/MultipleQuickOrder";
import { IconCheck } from "@tabler/icons-react";
import GetDiscountRange from "../ProductView/GetDiscountRange";

const CartDrawer = ({ setOpenCartDrawer, openCartDrawer }: any) => {
  const dispatch = useDispatch();
  const handleCloseDrawer = () => {
    setOpenCartDrawer(false);
  };

  const { products, subTotal } = useAppSelector(
    (state) => state.productCartSlice
  );

  const shippingCharge = 80;
  const calculateTotal = subTotal + shippingCharge;
  return (
    <div>
      <CustomGlobalDrawer
        isVisible={openCartDrawer}
        setOpenDrawer={setOpenCartDrawer}
        drawerController="w-full md:max-w-[500px]"
      >
        <ModalCloseBtn
          handleClose={handleCloseDrawer}
          icon={<IconArrowLeft stroke={2} width={20} height={20} />}
        />
        <h3 className="text-center text-black text-[20px] font-medium border-b pb-4">
          My Cart
        </h3>
        <div>
          {products?.length > 0 ? (
            <>
              {/* --data container-- */}
              <div className="flex flex-col overflow-scroll no-scrollbar">
                {products?.map((product: any, index: number) => (
                  <div
                    className="flex gap-5 border-b transition duration-300 ease-in-out hover:bg-gray-100 p-3"
                    key={index}
                  >
                    {/* --Image-- */}
                    <div className="flex items-center justify-center max-h-16 w-full max-w-16 p-2 border rounded-md">
                      <Image
                        src={`${imageUrl}${product?.productPhotos?.[1]}`}
                        alt="Product Image"
                        width={55}
                        height={55}
                        className="w-full h-full"
                      />
                    </div>
                    <div>
                      {/* --Title and Delete BTN-- */}
                      <div className="flex items-center justify-between w-full ">
                        <p className="text-black text-opacity-90 text-[16px] line-clamp-1">
                          {product?.productName}
                        </p>
                        <button
                          onClick={() => dispatch(removeFromCart(product))}
                          className="justify-items-end"
                        >
                          <span className="cursor-pointer text-black text-opacity-70">
                            <IconX width={20} height={20} />
                          </span>
                          {""}
                        </button>
                      </div>
                      {/* --BrandName-- */}
                      <div className="my-2">
                        <p className="text-black text-opacity-50 text-[12px]">
                          {product?.brand?.brandName}
                        </p>
                      </div>
                      {/* --Increase and Decrease BTN etc-- */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => dispatch(removeOneFromCart(product))}
                            className="border border-main-border-color p-1 rounded-full text-black-opacity-70 "
                          >
                            {""}
                            <IconMinus stroke={3} width={13} height={13} />
                          </button>
                          <span>{product?.orderQuantity}</span>
                          <button
                            onClick={() => dispatch(addToCart(product))}
                            className="border border-main-border-color p-1 rounded-full text-black-opacity-70 "
                          >
                            {""}
                            <IconPlus stroke={3} width={13} height={13} />
                          </button>
                          <span className="text-[12px]">x</span>
                          <span>{product?.price} QAR</span>
                        </div>
                        <b className="main-text-color">
                          {product?.orderQuantity * product?.price}
                          QAR
                        </b>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* --fixed data container-- */}
              <div className="border-t border-t-black border-opacity-10 px-3">
                {/* --Subtotal & Price-- */}
                <div className="flex items-center justify-between my-5">
                  <p className="">Subtotal</p>
                  <span>
                    {subTotal}
                    <small className="uppercase">qar</small>
                  </span>
                </div>
                {/* --Shipping & Price-- */}
                <div className="flex items-center justify-between border-b border-b-black border-opacity-10">
                  <p className="mb-5">Shipping</p>
                  <span>
                    {shippingCharge}
                    <small className="uppercase">qar</small>
                  </span>
                </div>
                {/* --Total & Price-- */}
                <div className="flex items-center justify-between my-5">
                  <p className="font-bold text-[16px]">Total</p>
                  <span className="font-bold text-[16px]">
                    {calculateTotal}
                    <small className="uppercase">qar</small>
                  </span>
                </div>
                {/* --Price range and Free shipping-- */}
                <div className="mb-5">
                  <div className="mb-5">
                    <GetDiscountRange priceRange={calculateTotal} />
                  </div>
                  <div>
                    {subTotal < 3000 ? (
                      <p className="text-center">
                        Spend <b className="main-text-color">3000 QAR</b> more
                        to reach <b className="font-medium">FREE SHIPPING!</b>
                      </p>
                    ) : (
                      <p className="text-center flex gap-1 items-center justify-center text-[16px]">
                        <span className="border rounded-full p-1 text-fuchsia-500 border-fuchsia-500">
                          <IconCheck width={15} height={15} />
                        </span>
                        Congratulations! You’ve got free shipping.
                      </p>
                    )}
                  </div>
                </div>
                {/* --Checkout & Quick Order btn-- */}
                <div className="flex justify-between items-center gap-5">
                  <Link
                    href="/cart-view"
                    onClick={handleCloseDrawer}
                    className="border w-full py-2 flex gap-1.5 items-center justify-center rounded-lg text-black bg-black bg-opacity-15 hover:main-bg-color hover:text-white"
                  >
                    <IconShoppingCartCog />
                    CHECK OUT
                  </Link>

                  <div className="w-full">
                    <MultipleQuickOrder
                      products={products}
                      subTotal={subTotal}
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="mx-5">
              <Link
                href={"/"}
                className="flex items-center justify-center main-bg-color py-2 text-white rounded-lg"
              >
                <span>
                  <IconChevronLeft stroke={1} width={24} height={24} />
                </span>
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </CustomGlobalDrawer>
    </div>
  );
};

export default CartDrawer;
