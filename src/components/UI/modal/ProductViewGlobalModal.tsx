"use client";
import { IconEye, IconX } from "@tabler/icons-react";
import { useState } from "react";
import GlobalModal from "./GlobalModal";
import ProductViewDescEtc from "@/components/ProductView/ProductViewDescEtc";
import ProductViewImage from "@/components/ProductView/ProductViewImage";
import { productViewImage } from "@/constants";
import Image from "next/image";

const ProductViewGlobalModal = ({ product }: any) => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [selectedImage, setSelectedImage] = useState(productViewImage[0]);
  const handleChangePhoto = (item: any) => {
    setSelectedImage(item);
  };

  return (
    <>
      <div>
        <button
          onClick={() => setShowModal(true)}
          className="border border-[#F2F2F2] rounded-full p-2.5 text-black text-opacity-50"
        >
          <IconEye width={17} height={17} />
          {""}
        </button>
      </div>
      <GlobalModal
        isVisible={showModal}
        onClose={handleCloseModal}
        modalController="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center backdrop-blur-sm z-50"
      >
        <div className="md:max-w-[1000px] bg-white p-7 rounded-lg relative">
          {/* //Close Modal BTN */}
          <div className="absolute top-5 right-5 text-black text-opacity-70">
            <button
              onClick={handleCloseModal}
              className="text-black text-opacity-70"
            >
              <IconX width={20} height={20} />
              {""}
            </button>
          </div>
          {/* {/|* ==main container of modal data== *|/} */}
          <div className="flex">
            {/* -left side content */}
            <div className="flex-1">
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-center">
                  {selectedImage && (
                    <div className="flex items-center justify-center rounded-lg w-[420px] h-[400px] border">
                      <Image
                        className="object-contain"
                        src={selectedImage.picture}
                        alt="photo"
                        width={300}
                        height={300}
                      />
                    </div>
                  )}
                </div>
                <div className=" flex justify-center gap-3">
                  {productViewImage.map((item) => (
                    <div
                      key={item._id}
                      className={`p-2 border cursor-pointer rounded-lg flex items-center justify-center overflow-hidden ${
                        selectedImage._id === item._id
                          ? "border-fuchsia-700 shadow-2xl"
                          : ""
                      }`}
                      onClick={() => handleChangePhoto(item)}
                    >
                      <div className="flex flex-row items-center justify-center ">
                        <Image
                          className="object-contain"
                          src={item.picture}
                          alt="demo Printer"
                          width={60}
                          height={60}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* -right side content */}
            <div className="flex-1">
              <ProductViewDescEtc />
            </div>
          </div>
        </div>
      </GlobalModal>
    </>
  );
};

export default ProductViewGlobalModal;
