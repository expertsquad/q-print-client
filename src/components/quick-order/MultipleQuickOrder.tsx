"use client";
import { useLayoutEffect, useState } from "react";
import GlobalModal from "../UI/modal/GlobalModal";
import ModalCloseBtn from "../shared/ModalCloseBtn";
import { IconBolt } from "@tabler/icons-react";
import CustomInput from "../shared/CustomInput";

import { useDispatch } from "react-redux";
import TotalAndSubtTotalCard from "./TotalAndSubtTotalCard";
import { useAppSelector } from "@/redux/hook";
import { useQuickOrderMutation } from "@/redux/features/quick-order/quickOrderApi";
import {
  resetQuickOrder,
  setMultipleQuickOrder,
} from "@/redux/features/quick-order/multipleQuickOrder";
import QuickOrderCartItem from "./QuickOrderCartItem";
import { toast } from "react-toastify";
import { useGetQuickOrderSettingQuery } from "@/redux/features/settings/quickOrderSettings";
import Spinner from "../shared/Spinner";
import { useRouter } from "next/navigation";

const MultipleQuickOrder = ({ products, subTotal, handleCloseDrawer }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const { data: deliveryCharge } = useGetQuickOrderSettingQuery("");
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

  // <== handle submit quick order ==>
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const value = {
      orderItems: data?.orderItems,
      buyer: {
        fullName: data?.fullName,
        phoneNumber: data?.phoneNumber,
        address: data?.address,
      },
    };

    try {
      const res = await quickOrder(value);
      console.log(res, "Modasl");
      console.log(error, "eror");
      // @ts-ignore
      if ("data" in res) {
        toast.success(res?.data?.message);
        handleCloseModal();
        dispatch(resetQuickOrder());
        router.push(`/quick-order-places/${res?.data?.data?._id}`);
        handleCloseDrawer();
      }
    } catch (err: any) {
      setError(err?.data?.message);
      console.log(err);
    } finally {
      setLoading(false);
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
        mainClassName="w-full md:w-[900px] h-screen md:h-auto overflow-y-auto"
      >
        <div className="w-full bg-white p-7 rounded-lg relative no-scrollbar">
          {loading && <Spinner />}
          <div className="absolute top-5 right-5 text-black text-opacity-70">
            <ModalCloseBtn handleClose={handleCloseModal} />
          </div>
          <div className="flex flex-col-reverse md:justify-normal justify-between  md:flex-row items-center w-full">
            {/* == Product info & balance container == */}
            <div className="flex-1 w-full md:py-0 py-5">
              <span className="block md:hidden mb-5 text-base text-black-opacity-50">
                Item Lists
              </span>
              <div className="flex flex-col overflow-y-auto no-scrollbar gap-5 md:h-[380px] h-[200px] bg-white shadow-inner">
                {products?.map((product: any) => (
                  <QuickOrderCartItem key={product?._id} product={product} />
                ))}
              </div>
              {/* ==shipping, subtotal, and total== */}
              <div>
                <TotalAndSubtTotalCard
                  subTotal={subTotal}
                  shippingFee={deliveryCharge?.data?.deliveryCharge}
                />
              </div>
            </div>
            {/* == Buyer information container == */}
            <div className="flex-1 md:pl-5 w-full">
              <h4 className="text-black text-[18px] font-semibold mb-1 uppercase ">
                Cash on delivery
              </h4>
              <p className="text-black-opacity-60 text-[16px] mb-7 md:mb-9">
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
                  className="flex gap-1 items-center justify-center py-3 rounded-[5px] main-bg-color text-white w-full md:mt-12 whitespace-nowrap"
                >
                  <span>
                    <IconBolt fill="#fff" stroke={2} width={22} height={22} />
                  </span>
                  CONFIRM ORDER -{" "}
                  {(subTotal + deliveryCharge?.data?.deliveryCharge).toFixed(2)}{" "}
                  QAR
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
