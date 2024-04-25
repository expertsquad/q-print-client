"use client";
import { imageUrl } from "@/constants/imageUrl";
import { useReviewByIdQuery } from "@/redux/features/review/reviewApi";
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

const ProductReview = ({ productId, averageRating }: string | any) => {
  const { data } = useReviewByIdQuery(productId);
  const reviewData = data?.data;
  console.log(reviewData, averageRating, "hello");

  // <== Calculating average rating ==>
  const totalRating = reviewData?.reduce(
    (acc: number, review: ReviewProps) => acc + review?.rating,
    0
  );
  // const averageRating = totalRating / reviewData?.length;
  // console.log(Math.round(averageRating));
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
          <option value="">Top Reviews</option>
          <option value="">Newest Review</option>
          <option>4 Star Rating</option>
          <option>3 Star Rating</option>
          <option>2 Star Rating</option>
          <option>1 Star Rating</option>
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
            {averageRating ? averageRating : 0}
          </h6>
          <div className="my-3 flex items-center justify-center">
            {/* <StarRating rating={averageRating} /> */}
          </div>
          <p>Customer Rating ({reviewData?.length})</p>
        </div>

        {/* ==Rating & Percentage== */}
        {/* <div className="">
          {reviewData?.map((review: ReviewProps, index: number) => (
            <div key={index} className="flex items-center justify-between">
              <div key={index} className="flex flex-col">
                <StarRating rating={5 - review?.rating} />
              </div>
              <div>
                <div className="bg-gray-300 rounded w-full h-1 ml-3">
                  <span
                    style={{ width: `${100}%` }}
                    className="h-full rounded main-bg-color w-full"
                  ></span>
                </div>
              </div>
            </div>
          ))}
        </div> */}
        <div className="flex items-center">
          <div className="flex flex-col gap-y-3">
            <StarRating rating={5} />
            <StarRating rating={4} />
            <StarRating rating={3} />
            <StarRating rating={2} />
            <StarRating rating={1} />
          </div>
          <div className="flex flex-col">
            <span>1</span>
            <span>1</span>
            <span>1</span>
            <span>1</span>
            <span>1</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductReview;
