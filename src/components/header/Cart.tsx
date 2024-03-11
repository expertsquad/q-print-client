import {
  IconArrowLeft,
  IconBolt,
  IconCheck,
  IconChevronLeft,
  IconChevronRight,
  IconMinus,
  IconPlus,
  IconShoppingBag,
  IconShoppingCartCog,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import GetDiscountRange from "../ProductView/GetDiscountRange";
import { useAppSelector } from "@/redux/hook";
import { imageUrl } from "@/constants/imageUrl";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeOneFromCart,
} from "@/redux/features/cart/cartSlice";

const Cart = () => {
  const { products } = useAppSelector((state) => state.cart);
  const dispatch = useDispatch();

  // <== Calculate Subtotal, Total , and Shipping ==>
  const subTotal = products?.reduce((total: number, product: any) => {
    return total + product?.defaultVariant?.discountedPrice * product?.quantity;
  }, 0);

  const shippingCharge = 80;

  const calculateTotal = subTotal + shippingCharge;

  return (
    <div>
      <div className="drawer drawer-end no-scrollbar">
        <input id="my-drawer-cart" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content no-scrollbar">
          {/* //Drawer Cancel BTN// */}
          <div className="flex items-start gap-2.5">
            <label htmlFor="my-drawer-cart" className="cursor-pointer relative">
              <span className="text-black text-opacity-50">
                <IconShoppingBag width={24} height={24} />
              </span>
              <span className="absolute top-0 -right-2 bg-[#E73C17] rounded-full h-4 w-[17px] text-[10px] flex items-center justify-center text-white">
                {products?.length}
              </span>
            </label>
            <label
              htmlFor="my-drawer-cart"
              className="drawer-button hidden md:block cursor-pointer text-black text-opacity-60 "
            >
              Cart
            </label>
          </div>
        </div>
        {/* ==Main Div */}
        <div className="drawer-side z-50 no-scrollbar">
          <label
            htmlFor="my-drawer-cart"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu-vertical  w-full md:max-w-[430px] h-screen  text-base-content bg-white relative pt-5">
            {/* Sidebar content here */}
            <label
              htmlFor="my-drawer-cart"
              aria-label="close sidebar"
              className="-mb-6 -ml-2 bg-white p-1 rounded-full w-7 h-7 flex justify-center items-center cursor-pointer"
            >
              <span className="hidden md:block">
                <IconChevronRight />
              </span>
              <span className="block md:hidden">
                <IconArrowLeft />
              </span>
            </label>
            <h3 className="text-center text-black text-[20px] font-medium border-b pb-4">
              My Cart
            </h3>
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
                        <div className="flex items-center gap-3">
                          <p className="text-black text-opacity-90 text-[16px] line-clamp-1">
                            {product?.productName}
                          </p>
                          <button
                            onClick={() => dispatch(removeFromCart(product))}
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
                              onClick={() =>
                                dispatch(removeOneFromCart(product))
                              }
                              className="border border-fuchsia-800 p-1 rounded-full text-black text-opacity-70 "
                            >
                              {""}
                              <IconMinus stroke={3} width={13} height={13} />
                            </button>
                            <span>{product?.quantity}</span>
                            <button
                              onClick={() => dispatch(addToCart(product))}
                              className="border border-fuchsia-800 p-1 rounded-full text-black text-opacity-70 "
                            >
                              {""}
                              <IconPlus stroke={3} width={13} height={13} />
                            </button>
                            <span className="text-[12px]">x</span>
                            <span>
                              {product?.defaultVariant?.discountedPrice} QAR
                            </span>
                          </div>
                          <b className="main-text-color">
                            {product?.quantity *
                              product?.defaultVariant?.discountedPrice}{" "}
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
                      href="/cartView"
                      className="border w-full py-2 flex gap-1.5 items-center justify-center rounded-lg text-black bg-black bg-opacity-15 hover:main-bg-color hover:text-white"
                    >
                      <IconShoppingCartCog />
                      CHECK OUT
                    </Link>
                    <button className="border w-full py-2 flex gap-1.5 items-center justify-center main-bg-color text-white rounded-lg">
                      <IconBolt />
                      ORDER NOW
                    </button>
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
        </div>
      </div>
    </div>
  );
};

export default Cart;
