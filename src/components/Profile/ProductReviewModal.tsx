"use client";
import React, { useState } from "react";
import GlobalModal from "../UI/modal/GlobalModal";
import { IconArrowLeft, IconStarFilled, IconX } from "@tabler/icons-react";
import Image from "next/image";
import { useAddReviewMutation } from "@/redux/features/review/reviewApi";
import { useGetProductByIdQuery } from "@/redux/features/products/productsApi";
import { imageUrl } from "@/constants/imageUrl";
import ModalCloseBtn from "../shared/ModalCloseBtn";
import { toast } from "react-toastify";

const ProductReviewModal = ({
  orderId: reviewOrderId,
  productId: reviewProductId,
  isReviewed,
}: any) => {
  // <== Get Product By Product Id ==>
  const { data: product } = useGetProductByIdQuery(reviewProductId);

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [reviewText, setReviewText] = useState("");
  const [starRating, setStarRating] = useState(0);
  const [increaseRating, setIncreaseRating] = useState(0);

  const handleReviewChange = (event: any) => {
    const text = event.target.value;
    setReviewText(text);
  };

  // <== Handle Add Review ==>
  const [addReview] = useAddReviewMutation();

  const handleStarClick = (index: number) => {
    setStarRating(index);
    setIncreaseRating(index + 1);
  };

  // <== Sending review product data to server ==>
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("orderId", reviewOrderId);
    formData.append("productId", reviewProductId);
    formData.append("rating", increaseRating.toString());
    formData.append("comment", reviewText);

    try {
      const res = await addReview(formData);
      if ("data" in res) {
        toast.success((res as { data: any }).data.message);
      }
      if ("error" in res) {
        toast.error((res as { error: any }).error.message);
      }
    } catch (error) {
      console.log(error);
    }
    handleCloseModal();
  };

  return (
    <>
      <div>
        <button
          onClick={() => setShowModal(true)}
          className="border border-fuchsia-800 rounded-md py-1 px-2 md:px-3.5 main-text-color text-xs md:text-base"
        >
          {isReviewed ? "Edit Review" : "Review"}
        </button>
      </div>
      <GlobalModal
        isVisible={showModal}
        onClose={handleCloseModal}
        modalController=""
      >
        <div className="w-full h-screen md:w-[650px] md:h-auto  bg-white p-7 rounded-lg relative">
          {/* ||Handle close modal */}
          <div className="absolute top-5 right-5 text-black text-opacity-70 hidden md:block">
            <ModalCloseBtn handleClose={handleCloseModal} />
          </div>
          {/* ||Back btn */}
          <div className="absolute top-8 left-5 text-black text-opacity-70 block md:hidden">
            <ModalCloseBtn
              handleClose={handleCloseModal}
              icon={<IconArrowLeft />}
            />
          </div>

          {/* ==Main content== */}
          <div className="relative">
            <h1 className="text-center md:text-left text-black text-opacity-80 text-[18px] md:text-[24px] font-semibold mb-7">
              My Reviews
            </h1>

            {/* ==Product Content== */}
            <div className="border py-5 px-4 rounded-lg flex flex-col md:flex-row justify-between gap-3">
              <div className="flex gap-4">
                <div className="h-[70px] w-[70px] shrink-0 relative">
                  <Image
                    className="object-contain w-full h-full top-0 left-0 p-1.5 border rounded-md"
                    src={`${imageUrl}${product?.data?.productPhotos[0]}`}
                    alt="Product Image"
                    fill
                    objectFit="cover"
                  />
                </div>
                <div>
                  <p className="text-black text-opacity-90 text-base md:text-lg line-clamp-2 text-wrap">
                    {product?.data?.productName}
                  </p>

                  <p className="text-black text-opacity-60 text-sm">
                    {product?.data?.brand?.brandName}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-base mb-2">Select Product Rating</p>
                <div className="flex">
                  {[...Array(5)]?.map((_, index) => (
                    <IconStarFilled
                      key={index}
                      width={20}
                      height={20}
                      className={
                        index <= starRating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }
                      onClick={() => handleStarClick(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} action="" className="mt-7">
              <label className="text-sm md:text-[18px]" htmlFor="review">
                Add Written Review
              </label>

              <textarea
                className="border pt-2 pl-2 w-full outline-none rounded-lg text-black text-opacity-50 text-sm mt-2 resize-none"
                placeholder="Write Review Here.."
                name="review"
                id="review"
                cols={50}
                rows={4}
                maxLength={100}
                value={reviewText}
                onChange={handleReviewChange}
              ></textarea>
              <p className="text-right text-sm text-black text-opacity-80">
                {reviewText.length}/100
              </p>
              <button
                type="submit"
                className="main-bg-color text-white rounded-3xl w-full py-2 mt-5 md:mt-9"
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
