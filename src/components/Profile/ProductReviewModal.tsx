"use client";
import React, { useState } from "react";
import GlobalModal from "../UI/modal/GlobalModal";
import { IconArrowLeft, IconX } from "@tabler/icons-react";

const ProductReviewModal = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [reviewText, setReviewText] = useState("");

  const handleReviewChange = (event: any) => {
    const text = event.target.value;
    setReviewText(text);
  };

  //demo data
  const reviewData = [
    {
      _id: "HUDYFUFJFJFJFNdkfjdkfjdkfdkfdjf120",
      title: "Brother HL-L327 0CDW Single Function Color Laser Printer",
      rating: 3,
      brand: "Rocket X Native ",
    },
  ];

  return (
    <>
      <div>
        <button
          onClick={() => setShowModal(true)}
          className="border border-[#F2F2F2] rounded-full p-2.5 text-black text-opacity-50"
        >
          Review
          {""}
        </button>
      </div>
      <GlobalModal
        isVisible={showModal}
        onClose={handleCloseModal}
        modalController="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center backdrop-blur-sm z-50"
      >
        <div className="w-full h-screen md:h-auto md:max-w-[800px] md:max-h-w-[660px] bg-white p-7 rounded-lg relative">
          {/* ||Handle close modal */}
          <div className="absolute top-5 right-5 text-black text-opacity-70">
            <button
              onClick={handleCloseModal}
              className="text-black text-opacity-70 hidden md:block"
            >
              <IconX width={20} height={20} />
              {""}
            </button>
          </div>
          {/* ||Back btn */}
          <div className="absolute top-8 left-5 text-black text-opacity-70">
            <button
              onClick={handleCloseModal}
              className="text-black text-opacity-70 block md:hidden"
            >
              <IconArrowLeft width={24} height={24} />
              {""}
            </button>
          </div>

          {/* ==Main content== */}
          <div className="relative">
            <h1 className="text-center md:text-left text-black text-opacity-80 text-[18px] md:text-[24px] font-semibold mb-7">
              My Reviews
            </h1>
            <form action="">
              <label className="text-sm md:text-[18px]" htmlFor="review">
                Add Written Review
              </label>
              <textarea
                className="border pt-2 pl-2 w-full outline-none rounded-lg text-black text-opacity-50 text-sm mt-4 resize-none"
                placeholder="Write Review Here.."
                name="review"
                id="review"
                cols={50}
                rows={10}
                maxLength={100}
                value={reviewText}
                onChange={handleReviewChange}
              ></textarea>
              <p className="text-right text-sm text-black text-opacity-80">
                {reviewText.length}/100
              </p>
              <button className="main-bg-color text-white rounded-3xl w-full py-2  md:mt-9">
                Submit
              </button>
            </form>
          </div>
        </div>
      </GlobalModal>
    </>
  );
};

export default ProductReviewModal;
