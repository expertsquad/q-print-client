"use client";
import { imageUrl } from "@/constants/imageUrl";
import { useReviewByIdQuery } from "@/redux/features/review/reviewApi";
import Image from "next/image";
import StarRating from "../product/StarRating";
import { formatDateShorting } from "@/constants/formatDate";
import { useAppSelector } from "@/redux/hook";
import ReviewFilter from "./ReviewFilter";

interface ReviewProps {
  _id: string;
  orderId: string;
  reviewer: {
    fullName: string;
    profilePhoto: string;
    email: string;
    userId: string;
  };
  product: {
    productName: string;
    brandName: string;
    productPhoto: string;
    productId: string;
  };
  rating: number | any;
  comment: string;
  reviewPhotos: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  reply: string;
}

const ProductReview = ({ productId }: string | any) => {
  const { filteredData } = useAppSelector(
    (state) => state.filteredProductByReview
  );
  const { data } = useReviewByIdQuery(
    `product.productId=${productId}&${
      filteredData ? `rating=${filteredData}` : ""
    }`
  );
  const reviewData = data?.data;

  // <== Calculating average rating ==>
  const avgTotalRating = reviewData?.reduce(
    (tr: number, review: ReviewProps) => tr + review?.rating,
    0
  );

  const averageRatingForStar = Number(avgTotalRating / reviewData?.length);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {/* ==Customer Review== */}
      <div id="customerreview" className="order-1 md:order-1 mb-7">
        <h2 className="text-black text-[17px] md:text-2xl font-semibold">
          Customer Review
        </h2>
      </div>
      {/* ==Filter== */}
      <ReviewFilter />
      {/* ==Reviewer Info== */}
      <div className="order-4 md:order-3 ">
        {reviewData?.map((review: ReviewProps) => (
          <div className="border-b-[1px] mb-5" key={review?._id}>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[45px] w-[45px] relative shrink-0">
                <Image
                  src={`${imageUrl}${review?.reviewer?.profilePhoto}`}
                  alt="user Photo"
                  fill
                  objectFit="cover"
                  className="w-full h-full top-0 left-0 object-cover rounded-full"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold">
                    {review?.reviewer?.fullName}
                  </h3>
                  <span className="w-[6px] h-[6px] rounded-full bg-slate-400"></span>
                  <span className="text-xs">
                    {formatDateShorting(review?.createdAt)}
                  </span>
                </div>
                <div className="flex">
                  <StarRating rating={Math.round(review?.rating)} />
                </div>
              </div>
            </div>
            <p className="text-xs md:text-sm text-black-opacity-70 mb-5 italic">
              {review?.comment}
            </p>
          </div>
        ))}
      </div>
      {/* == Summary Charts == */}
      <div className="order-2 md:order-4 mb-7 ml-0 md:ml-5">
        <div className="w-full md:max-w-[290px] bg-fuchsia-100 rounded-lg p-8 text-center mb-11">
          <h6 className="text-4xl md:text-[56px]">
            {avgTotalRating ? avgTotalRating : 0}
          </h6>
          <div className="my-3 flex items-center justify-center">
            <StarRating rating={averageRatingForStar} />
          </div>
          <p>Customer Rating ({reviewData?.length})</p>
        </div>
      </div>
    </section>
  );
};

export default ProductReview;
