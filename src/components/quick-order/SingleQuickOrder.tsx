"use client";
import { IconBolt, IconPlus, IconX } from "@tabler/icons-react";
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
  resetQuickOrder,
  setSingleQuickOrder,
} from "@/redux/features/quick-order/quickOrder";
import { useAppSelector } from "@/redux/hook";
import { useQuickOrderMutation } from "@/redux/features/quick-order/quickOrderApi";
import { toast } from "react-toastify";
import { useGetProductByIdQuery } from "@/redux/features/products/productsApi";
import { useGetQuickOrderSettingQuery } from "@/redux/features/settings/quickOrderSettings";

interface QuickOrderProps {
  variantName: string;
  productId: string;
  btnStyle: string;
  variantPrice: number;
}

const SingleQuickOrder = ({
  variantName,
  variantPrice,
  productId,
  btnStyle,
}: QuickOrderProps) => {
  // <== Get product by id ==>
  const { data: oneProduct } = useGetProductByIdQuery(`${productId}`);
  const singleProduct = oneProduct?.data;
  const { data: deliveryCharge } = useGetQuickOrderSettingQuery("");

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [orderQuantity, setOrderQuantity] = useState(1);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const [quickOrder] = useQuickOrderMutation();

  const data = useAppSelector((state) => state.singleQuickOrder);

  useLayoutEffect(() => {
    dispatch(setSingleQuickOrder(singleProduct));
  }, [singleProduct, dispatch]);

  const calculateSubTotal = Number(
    orderQuantity *
      (variantPrice
        ? variantPrice
        : singleProduct?.variants[0].discountedPrice
        ? singleProduct?.variants[0].discountedPrice
        : singleProduct?.variants[0].sellingPrice)
  );

  // <== Hanlde submit to send data into server ==>
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const value = {
      orderItems: [
        {
          productId: productId,
          variantName: variantName
            ? variantName
            : singleProduct?.variants[0]?.variantName,
          orderQuantity: orderQuantity,
        },
      ],
      buyer: {
        fullName: data?.fullName,
        phoneNumber: data?.phoneNumber,
        address: data?.address,
      },
    };
    try {
      const res = await quickOrder(value);
      console.log(res);
      toast.success(res?.message);
      dispatch(resetQuickOrder());
      handleCloseModal();
    } catch (error) {
      toast.error(error?.errorMessages);
    }
  };

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
                      src={`${imageUrl}${singleProduct?.productPhotos[0]}`}
                      alt="Product Image"
                      fill
                      sizes="(max-width: 80px) 10vw, (max-width: 100px) 10vw, 15vw"
                      className="w-full h-full top-0 left-0 object-cover border p-1.5 rounded-md"
                    />
                  </div>
                  <div>
                    <p className="text-black text-opacity-90 text-[16px] line-clamp-1">
                      {singleProduct?.productName}
                    </p>

                    <div className="my-1 flex items-center gap-2">
                      <p className="text-black-opacity-80 text-xs">
                        {singleProduct?.brand?.brandName}
                      </p>
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{
                          backgroundColor: variantName
                            ? variantName
                            : singleProduct?.variants[0]?.variantName,
                        }}
                      ></span>
                      <span className="text-xs">
                        {variantName
                          ? variantName
                          : singleProduct?.variants[0]?.variantName}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-2 mb-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            setOrderQuantity(Math.max(orderQuantity - 1, 1))
                          }
                          className="border p-1 rounded-full"
                        >
                          {""}
                          <IconMinus width={14} stroke={2} height={14} />
                        </button>
                        <span className="text-sm">{orderQuantity}</span>
                        <button
                          onClick={() => setOrderQuantity(orderQuantity + 1)}
                          className="border p-1 rounded-full"
                        >
                          {""}
                          <IconPlus width={14} stroke={2} height={14} />
                        </button>
                        <span className="text-[12px]">
                          <IconX stroke={1} width={14} height={14} />
                        </span>
                        <span className="text-xs">
                          {variantPrice
                            ? variantPrice
                            : singleProduct?.variants[0].discountedPrice
                            ? singleProduct?.variants[0].discountedPrice
                            : singleProduct?.variants[0].sellingPrice}
                          <small>QAR</small>
                        </span>
                      </div>
                      <b className="main-text-color ">
                        {calculateSubTotal}
                        <small>QAR</small>
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              {/* ==shipping, subtotal, and total== */}
              <TotalAndSubtTotalCard
                subTotal={calculateSubTotal}
                shippingFee={deliveryCharge?.data?.deliveryCharge}
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
              <form onSubmit={handleSubmit} action="" className="">
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
                  CONFIRM ORDER -{" "}
                  {calculateSubTotal + deliveryCharge?.data?.deliveryCharge} QAR
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
