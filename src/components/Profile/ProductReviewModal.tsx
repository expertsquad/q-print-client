"use client";
import React, { useState } from "react";
import GlobalModal from "../UI/modal/GlobalModal";
import { IconArrowLeft, IconX } from "@tabler/icons-react";
import Image from "next/image";

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
      image:
        "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            {/* ==Product Content== */}
            <div className="border py-5 px-4 rounded-lg     ">
              {reviewData.map((data: any) => (
                <div key={data._id} className="">
                  <div className="flex gap-4">
                    <div className="border flex items-center justify-center h-[60px] w-[70px] rounded-md px-2">
                      <Image
                        className="object-contain"
                        src={data.image}
                        alt="Product Image"
                        width={70}
                        height={70}
                      />
                    </div>
                    <div>
                      <p className="line-clamp-2 text-black text-opacity-90 text-[16px] md:text-[18px]">
                        {data.title}
                      </p>

                      <p className="text-black text-opacity-60 text-sm md:text-[18px]">
                        {data.brand}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[16px] md:text-[18px] mb-2.5">
                      Select Product Rating
                    </p>
                    <span>Rating {data.rating} </span>
                  </div>
                </div>
              ))}
            </div>
            <form action="" className="mt-7">
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
              <button
                type="submit"
                className="main-bg-color text-white rounded-3xl w-full py-2  md:mt-9"
              >
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
