"use client";
import CustomGlobalDrawer from "../shared/CustomGlobalDrawer";
import ModalCloseBtn from "../shared/ModalCloseBtn";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import { useAppSelector } from "@/redux/hook";
import { useDispatch } from "react-redux";
import Link from "next/link";
import MultipleQuickOrder from "../quick-order/MultipleQuickOrder";
import { IconCheck } from "@tabler/icons-react";
import GetDiscountRange from "../ProductView/GetDiscountRange";
import emptyCart from "@/assets/empty-card-photo.svg";
import CartItem from "../cart-view/CartItem";
import { IconShoppingCart } from "@tabler/icons-react";

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
          icon={<IconChevronRight stroke={1} width={24} height={24} />}
        />
        <h3 className="text-center text-black-opacity-70 text-[20px] font-medium border-b pb-4">
          My Cart
        </h3>
        <div>
          {products?.length > 0 ? (
            <div className="flex flex-col justify-between md:h-[calc(100vh-90px)] h-[calc(100vh-100px)]">
              {/* --data container-- */}
              <div className="flex flex-col overflow-y-auto no-scrollbar h-[550px]">
                {products?.map((product: any, index: number) => (
                  <CartItem key={index} product={product} />
                ))}
              </div>
              {/* --fixed data container-- */}
              <div className="border-t px-3">
                {/* --Subtotal & Price-- */}
                <div className="flex items-center justify-between my-5">
                  <p className="">Subtotal</p>
                  <span>
                    {subTotal} <small className="uppercase">qar</small>
                  </span>
                </div>
                {/* --Shipping & Price-- */}
                <div className="flex items-center justify-between border-b border-b-black border-opacity-10">
                  <p className="mb-5">Shipping</p>
                  <span>
                    {shippingCharge} <small className="uppercase">qar</small>
                  </span>
                </div>
                {/* --Total & Price-- */}
                <div className="flex items-center justify-between my-5">
                  <p className="font-bold text-[16px]">Total</p>
                  <span className="font-bold text-[16px]">
                    {calculateTotal} <small className="uppercase">qar</small>
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
                    className="border w-full text-sm py-3 px-2.5 flex gap-1.5 items-center justify-center rounded-[5px] text-black bg-black bg-opacity-[12%] hover:main-bg-color "
                  >
                    <IconShoppingCart stroke={1} height={20} width={20} />
                    CHECK OUT
                  </Link>

                  <div className="w-full">
                    <MultipleQuickOrder
                      handleCloseDrawer={handleCloseDrawer}
                      products={products}
                      subTotal={subTotal}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mx-5 h-screen flex flex-col gap-y-5 items-center justify-center">
              <div className="flex items-center justify-center">
                <Image src={emptyCart} alt="Empty Cart" />
              </div>
              <span className="text-lg text-red-500 font-semibold">
                Your Cart Is Empty!!
              </span>
              <Link
                href={"/"}
                className="flex items-center justify-center main-bg-color py-2 text-white rounded-lg w-full"
              >
                <span>
                  <IconChevronLeft stroke={2} width={24} height={24} />
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
