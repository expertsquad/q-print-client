"use client";
import { productViewCustomerReview } from "@/constants";
import { imageUrl } from "@/constants/imageUrl";
import { useReviewByIdQuery } from "@/redux/features/review/reviewApi";
import { IconStar } from "@tabler/icons-react";
import Image from "next/image";
import StarRating from "../product/StarRating";
import { formatDateShorting } from "@/constants/formatDate";

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
  const { data } = useReviewByIdQuery(productId);
  const reviewData = data?.data;

  // <== Calculating average rating ==>
  // const totalRating = data?.data?.reduce(
  //   (acc: number, review: ReviewProps) => acc + review.rating,
  //   0
  // );
  // const averageRating = totalRating / data.length;

  // console.log(averageRating, "Average");

  const ratingsData = [
    { value: 5.0, percentage: 86, totalCount: 94532 },
    { value: 4.0, percentage: 33, totalCount: 6177 },
    { value: 3.0, percentage: 16, totalCount: 714 },
    { value: 2.0, percentage: 8, totalCount: 152 },
    { value: 1.0, percentage: 6, totalCount: 643 },
  ];
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {/* ==Customer Review== */}
      <div id="customerreview" className="order-1 md:order-1 mb-7">
        <h2 className="text-black text-[17px] md:text-2xl font-semibold">
          Customer Review
        </h2>
      </div>
      {/* ==Filter== */}
      <div className="order-3 md:order-2 mb-7 flex-col md:flex  items-end justify-end">
        <h2 className="block md:hidden text-[18px] md:text-[24px] font-semibold mb-5">
          Customers Say
        </h2>
        <select
          title="Top Reviews"
          className="select w-full md:max-w-40 border border-gray-200  outline-none focus:border-none"
          defaultValue="Top Reviews"
        >
          {""}
          <option disabled defaultValue="" hidden>
            Top Reviews
          </option>
          <option>Strapi</option>
          <option>Ghost</option>
        </select>
      </div>
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
                  <StarRating rating={review?.rating} />
                </div>
              </div>
            </div>
            <p className="text-xs md:text-sm text-black opacity-60 mb-5 italic">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
      {/* ==Charts== */}
      <div className="order-2 md:order-4 mb-7 ml-0 md:ml-5">
        <div className="w-full md:max-w-[290px] bg-fuchsia-100 rounded-lg p-8 text-center mb-11">
          <h6 className="text-4xl md:text-[56px]">4.7</h6>
          <div className="flex items-center justify-center my-3">
            {[...Array(5)].map((_, index) => (
              <IconStar
                width={16}
                height={16}
                fill="currentColor"
                className="text-[#E73C17]"
                key={index}
              />
            ))}
          </div>
          <p>Customer Rating (934,516)</p>
        </div>

        {/* ==Rating & Percentage== */}
        <div className="">
          {ratingsData.map((rating, index) => (
            <div key={index} className="flex items-center justify-between">
              {[...Array(5)].map((_, starIndex) => (
                <span
                  key={starIndex}
                  className={`
                  ${
                    starIndex < rating.value
                      ? "text-[#E73C17]"
                      : "text-[#ccc] bg-transparent"
                  }
                `}
                >
                  <IconStar
                    fill={starIndex < rating.value ? "#E73C17" : "currentColor"}
                    className="w-3.5 h-3.5 md:w-4.5 md:h-4.5"
                  />
                </span>
              ))}

              <div className="bg-gray-300 rounded w-full h-1 ml-3">
                <div
                  style={{ width: `${rating.percentage}%` }}
                  className="h-full rounded main-bg-color w-full"
                >
                  {""}
                </div>
              </div>
              <div className="flex items-center">
                {" "}
                <p className="text-base text-[#333] font-bold ml-3">
                  {rating.percentage}%
                </p>
                <span className="hidden md:block">({rating.totalCount})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductReview;
