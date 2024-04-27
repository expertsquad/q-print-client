"use client";
import { useLayoutEffect, useState } from "react";
import GlobalModal from "../UI/modal/GlobalModal";
import ModalCloseBtn from "../shared/ModalCloseBtn";
import {
  IconBolt,
  IconMinus,
  IconPlus,
  IconTrash,
  IconX,
} from "@tabler/icons-react";
import CustomInput from "../shared/CustomInput";
import Image from "next/image";
import { imageUrl } from "@/constants/imageUrl";
import { useDispatch } from "react-redux";
import TotalAndSubtTotalCard from "./TotalAndSubtTotalCard";
import {
  addToCart,
  removeFromCart,
  removeOneFromCart,
} from "@/redux/features/cart/productCartSlice";
import { useAppSelector } from "@/redux/hook";
import { useQuickOrderMutation } from "@/redux/features/quick-order/quickOrderApi";
import { setMultipleQuickOrder } from "@/redux/features/quick-order/multipleQuickOrder";

const MultipleQuickOrder = ({ products, subTotal, handleCloseDrawer }: any) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const data = useAppSelector((state) => state.multipleQuickOrder);

  const [quickOrder] = useQuickOrderMutation();

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // set products data to state
  useLayoutEffect(() => {
    dispatch(setMultipleQuickOrder({ orderItems: products }));
  }, [products, dispatch]);

  const shippingFee = 50;

  // handle submit
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const value = {
      orderItems: data?.orderItems,
      buyer: {
        fullName: data?.fullName,
        phoneNumber: data?.phoneNumber,
        address: data?.address,
      },
    };

    console.log(value, "My value");

    try {
      const res = await quickOrder(value);
      console.log(res, "from res");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="uppercase flex items-center justify-center gap-1 main-bg-color text-white py-3 rounded-[5px] w-full whitespace-nowrap text-sm"
      >
        <IconBolt stroke={1} width={18} height={18} fill="#fff" /> Quick Order
      </button>
      {/* == Here is a single quick order modal == */}
      <GlobalModal
        isVisible={showModal}
        onClose={handleCloseModal}
        mainClassName="w-full md:w-[760px] h-full md:h-auto"
      >
        <div className=" w-full bg-white p-7 rounded-lg relative">
          <div className="absolute top-5 right-5 text-black text-opacity-70">
            <ModalCloseBtn handleClose={handleCloseModal} />
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center w-full">
            {/* == Product info & balance container == */}
            <div className="flex-1 w-full">
              <div className="flex flex-col overflow-y-scroll  no-scrollbar gap-5 border-b mb-5 md:h-[380px] h-auto">
                {products?.map((product: any) => (
                  <div key={product?._id} className="flex gap-5 border-b">
                    <div className="h-[70px] w-[70px] relative shrink-0">
                      <Image
                        src={`${imageUrl}${product?.productPhotos[0]}`}
                        alt="Product Image"
                        fill
                        objectFit="cover"
                        className="w-full h-full top-0 left-0 object-cover border p-1.5 rounded-md"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <p className="text-black text-opacity-90 text-[16px] line-clamp-1">
                          {product?.productName}
                        </p>
                        <span onClick={() => dispatch(removeFromCart(product))}>
                          <IconTrash stroke={1} width={18} height={18} />
                        </span>
                      </div>

                      <div className="my-1">
                        <p className="text-black-opacity-70 text-[12px]">
                          {product?.brand?.brandName}
                        </p>
                      </div>
                      <div className="flex items-center justify-between gap-2 mb-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => dispatch(removeOneFromCart(product))}
                            className="border p-1 rounded-full"
                          >
                            {""}
                            <IconMinus width={14} stroke={2} height={14} />
                          </button>
                          <span className="text-sm">
                            {product?.orderQuantity}
                          </span>
                          <button
                            onClick={() => dispatch(addToCart(product))}
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
                          {product?.price * product?.orderQuantity}{" "}
                          <small>QAR</small>
                        </b>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* ==shipping, subtotal, and total== */}
              <div>
                <TotalAndSubtTotalCard
                  subTotal={subTotal}
                  shippingFee={shippingFee}
                />
              </div>
            </div>
            {/* == Buyer information container == */}
            <div className="flex-1 md:pl-5 w-full">
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
                      setMultipleQuickOrder({
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
                      setMultipleQuickOrder({
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
                      setMultipleQuickOrder({
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
                  CONFIRM ORDER - {subTotal + shippingFee} QAR
                </button>
              </form>
            </div>
          </div>
        </div>
      </GlobalModal>
    </div>
  );
};

export default MultipleQuickOrder;
