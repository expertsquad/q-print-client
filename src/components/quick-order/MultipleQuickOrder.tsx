"use client";
import { useState } from "react";
import GlobalModal from "../UI/modal/GlobalModal";
import ModalCloseBtn from "../shared/ModalCloseBtn";
import { IconBolt } from "@tabler/icons-react";
import CustomInput from "../shared/CustomInput";

const MultipleQuickOrder = ({ products, subTotal }: any) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="uppercase flex items-center justify-center gap-1 main-bg-color text-white py-3 rounded-lg w-full whitespace-nowrap text-sm"
      >
        <IconBolt stroke={2} width={18} height={18} fill="#fff" /> Quick Order
      </button>
      {/* == Here is a single quick order modal == */}
      <GlobalModal
        isVisible={showModal}
        onClose={handleCloseModal}
        modalController="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center backdrop-blur-sm z-50 "
      >
        <div className="w-[768px] bg-white p-7 rounded-lg relative">
          <div className="absolute top-5 right-5 text-black text-opacity-70">
            <ModalCloseBtn handleClose={handleCloseModal} />
          </div>
          <div className="flex items-center w-full">
            {/* == Product info & balance container == */}

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
                  placeholder="Type Name"
                  label="Full Name"
                  inputStyle="rounded-md "
                  customClassName="mb-3"
                />
                <CustomInput
                  placeholder="+974"
                  label="Phone Number"
                  inputStyle="rounded-md"
                  customClassName="mb-3"
                />
                <CustomInput
                  placeholder="Delivey Address"
                  label="Address"
                  inputStyle="rounded-md"
                  customClassName="mb-3"
                />

                <button
                  type="submit"
                  className="flex gap-1 items-center justify-center py-3 rounded-lg main-bg-color text-white w-full mt-9 md:mt-12 whitespace-nowrap"
                >
                  <span>
                    <IconBolt fill="#fff" stroke={2} width={22} height={22} />
                  </span>
                  CONFIRM ORDER - {0} QAR
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
