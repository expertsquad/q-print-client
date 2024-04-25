"use client";
import React, { useState } from "react";
import GlobalModal from "../UI/modal/GlobalModal";
import { IconArrowLeft, IconX } from "@tabler/icons-react";
import Image from "next/image";
import { useAddReviewMutation } from "@/redux/features/review/reviewApi";
import { useAppSelector } from "@/redux/hook";
import { useGetOnlineOrderByIdQuery } from "@/redux/features/online-order/online-orderApi";
import { useGetProductByIdQuery } from "@/redux/features/products/productsApi";
import { imageUrl } from "@/constants/imageUrl";
import StarRating from "../product/StarRating";

const ProductReviewModal = ({
  orderId: reviewOrderId,
  productId: reviewProductId,
}: any) => {
  // <== Get Onile Order By Order Id ==>
  const { data: order } = useGetOnlineOrderByIdQuery(reviewOrderId);

  // <== Get Product By Product Id ==>
  const { data: product } = useGetProductByIdQuery(reviewProductId);

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [reviewText, setReviewText] = useState("");

  const handleReviewChange = (event: any) => {
    const text = event.target.value;
    setReviewText(text);
  };

  // <== Handle Add Review ==>
  const [addReview] = useAddReviewMutation();
  const { orderId, productId, rating, comment, reviewPhotos } = useAppSelector(
    (state) => state.addReview
  );

  // = Functionality =
  const handleAddReviewSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("orderId", orderId);
    formData.append("productId", productId);
    formData.append("rating", rating ? rating.toString() : "");
    formData.append("comment", comment);
    if (reviewPhotos instanceof File || reviewPhotos instanceof Blob) {
      formData.append("reviewPhotos", reviewPhotos);
    }
  };

  return (
    <>
      <div>
        <button
          onClick={() => setShowModal(true)}
          className="border border-fuchsia-800 rounded-md py-1 px-2 md:px-3.5 main-text-color text-xs md:text-base"
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
            <div className="border py-5 px-4 rounded-lg flex justify-between">
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
                  <p className="text-black text-opacity-90 text-[16px] md:text-[18px] line-clamp-1">
                    {product?.data?.productName}
                  </p>

                  <p className="text-black text-opacity-60 text-sm md:text-[18px]">
                    {product?.data?.brand?.brandName}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[16px] md:text-[18px] mb-2">
                  Select Product Rating
                </p>
                <StarRating rating={5} />
              </div>
            </div>
            <form action="" className="mt-7">
              <span> product id{reviewProductId}</span>
              <label className="text-sm md:text-[18px]" htmlFor="review">
                Add Written Review
              </label>
              <span>order id: {reviewOrderId}</span>
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
