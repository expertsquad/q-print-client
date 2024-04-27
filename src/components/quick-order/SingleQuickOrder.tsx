"use client";
import { IconBolt, IconPlus, IconTrash, IconX } from "@tabler/icons-react";
import React, { useLayoutEffect, useState } from "react";
import GlobalModal from "../UI/modal/GlobalModal";
import ModalCloseBtn from "../shared/ModalCloseBtn";
import CustomInput from "../shared/CustomInput";
import TotalAndSubtTotalCard from "./TotalAndSubtTotalCard";
import { IconMinus } from "@tabler/icons-react";
import Image from "next/image";
import { imageUrl } from "@/constants/imageUrl";
import { useDispatch } from "react-redux";
import {
  decreaseFavQuantity,
  increaseFavQuantity,
} from "@/redux/features/wishlist/favouriteCartSlice";
import { setSingleQuickOrder } from "@/redux/features/quick-order/quickOrder";
import { useAppSelector } from "@/redux/hook";

const SingleQuickOrder = ({ product, btnStyle }: string | any) => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const dispatch = useDispatch();
  const data = useAppSelector((state) => state.singleQuickOrder);

  const handleIncreaseQuantity = () => {
    dispatch(increaseFavQuantity(product));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseFavQuantity(product));
  };

  const shippingFee = 50;
  const grantTotal = Math.round(product?.price) * product?.orderQuantity;
  const grantTotalWithShipping = grantTotal + shippingFee;

  useLayoutEffect(() => {
    dispatch(setSingleQuickOrder(product));
  }, []);

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className={`uppercase flex items-center justify-center gap-1 main-bg-color text-white p-2 rounded-lg w-full whitespace-nowrap text-sm ${btnStyle}`}
      >
        <IconBolt stroke={2} width={18} height={18} fill="#fff" /> Quick Order
      </button>
      {/* == Here is a single quick order modal == */}
      <GlobalModal
        isVisible={showModal}
        onClose={handleCloseModal}
        mainClassName="w-full md:w-[760px] h-full md:h-auto"
      >
        <div className=" bg-white p-7 rounded-lg relative">
          <div className="absolute top-5 right-5 text-black text-opacity-70">
            <ModalCloseBtn handleClose={handleCloseModal} />
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center w-full">
            {/* == Product info & balance container == */}
            <div className="flex-1 pr-5 border-r w-full">
              <div className="flex flex-col overflow-scroll no-scrollbar max-w-[450px] max-h-[400px]">
                <div className="flex gap-5 border-b mb-5">
                  <div className="h-[70px] w-[70px] relative shrink-0">
                    <Image
                      src={`${imageUrl}${product?.productPhotos[0]}`}
                      alt="Product Image"
                      fill
                      sizes="(max-width: 80px) 10vw, (max-width: 100px) 10vw, 15vw"
                      className="w-full h-full top-0 left-0 object-cover border p-1.5 rounded-md"
                    />
                  </div>
                  <div>
                    <p className="text-black text-opacity-90 text-[16px] line-clamp-1">
                      {product?.productName}
                    </p>

                    <div className="my-1">
                      <p className="text-black-opacity-70 text-[12px]">
                        {product?.brand?.brandName}
                      </p>
                    </div>
                    <div className="flex items-center justify-between gap-2 mb-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={handleDecreaseQuantity}
                          className="border p-1 rounded-full"
                        >
                          {""}
                          <IconMinus width={14} stroke={2} height={14} />
                        </button>
                        <span className="text-sm">
                          {product?.orderQuantity}
                        </span>
                        <button
                          onClick={handleIncreaseQuantity}
                          className="border p-1 rounded-full"
                        >
                          {""}
                          <IconPlus width={14} stroke={2} height={14} />
                        </button>
                        <span className="text-[12px]">
                          <IconX stroke={1} width={14} height={14} />
                        </span>
                        <span className="text-xs">
                          {product?.price} <small>QAR</small>
                        </span>
                      </div>
                      <b className="main-text-color ">
                        {grantTotal} <small>QAR</small>
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              {/* ==shipping, subtotal, and total== */}
              <TotalAndSubtTotalCard
                subTotal={grantTotal}
                shippingFee={shippingFee}
              />
            </div>
            {/* == Buyer information container == */}
            <div className="flex-1 pl-5 w-full">
              <h4 className="text-black text-[18px] font-semibold mb-1 uppercase ">
                Cash on delivery
              </h4>
              <p className="text-black text-opacity-50 text-[16px] mb-7 md:mb-9">
                Enter Your shipping address
              </p>
              <form action="" className="">
                <CustomInput
                  name="fullName"
                  placeholder="Type Name"
                  label="Full Name"
                  inputStyle="rounded-md "
                  customClassName="mb-3"
                  onChange={(e) =>
                    dispatch(
                      setSingleQuickOrder({
                        [e.target.name]: e.target.value,
                      })
                    )
                  }
                />
                <CustomInput
                  name="phoneNumber"
                  placeholder="+974"
                  label="Phone Number"
                  inputStyle="rounded-md"
                  customClassName="mb-3"
                  onChange={(e) =>
                    dispatch(
                      setSingleQuickOrder({
                        [e.target.name]: e.target.value,
                      })
                    )
                  }
                />
                <CustomInput
                  name="address"
                  placeholder="Delivey Address"
                  label="Address"
                  inputStyle="rounded-md"
                  customClassName="mb-3"
                  onChange={(e) =>
                    dispatch(
                      setSingleQuickOrder({
                        [e.target.name]: e.target.value,
                      })
                    )
                  }
                />
                <button
                  type="submit"
                  className="flex gap-1 items-center justify-center py-3 rounded-lg main-bg-color text-white w-full mt-9 md:mt-12 whitespace-nowrap"
                >
                  <span>
                    <IconBolt fill="#fff" stroke={2} width={22} height={22} />
                  </span>
                  CONFIRM ORDER - {grantTotalWithShipping} QAR
                </button>
              </form>
            </div>
          </div>
        </div>
      </GlobalModal>
    </div>
  );
};

export default SingleQuickOrder;
