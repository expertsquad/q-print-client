"use client";
import { productViewCustomerReview } from "@/constants";
import { IconStar } from "@tabler/icons-react";
import Image from "next/image";

const ProductReview = () => {
  const ratingsData = [
    { value: 5.0, percentage: 86, totalCount: 94532 },
    { value: 4.0, percentage: 33, totalCount: 6177 },
    { value: 3.0, percentage: 16, totalCount: 714 },
    { value: 2.0, percentage: 8, totalCount: 152 },
    { value: 1.0, percentage: 6, totalCount: 643 },
  ];
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 ">
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
          className="select w-full md:max-w-40 border border-gray-300 outline-none focus:border-none"
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
      <div className="order-4 md:order-3">
        {productViewCustomerReview.map((review) => (
          <div
            className="border-b-2 border-b-[#E4E7E9] mb-5"
            key={review.reviewer[0]._id}
          >
            <div className="flex items-center gap-3 mb-3">
              <Image
                src={review.reviewer[0].photo}
                alt="user Photo"
                width={48}
                height="48"
                className="rounded-full object-contain"
              />
              <div>
                <h3 className="text-sm font-semibold">
                  {review.reviewer[0].name}
                </h3>
                <div className="flex">
                  {[...Array(parseInt(review.rating))].map((_, index) => (
                    <IconStar
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="text-[#E73C17]"
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </div>
            {review.photos && review.photos.length > 0 && (
              <div className="flex gap-3">
                {review.photos.map((photo: any, index: any) => (
                  <Image
                    key={index}
                    src={photo}
                    alt="user Photo"
                    width={50}
                    height={50}
                    className="rounded-lg object-contain"
                  />
                ))}
              </div>
            )}
            <p className="text-sm text-black opacity-60 mb-5">
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
        <div className="">
          {ratingsData.map((rating, index) => (
            <div key={index} className="flex items-center">
              {[...Array(Math.round(rating.value))].map((starIndex) => (
                <IconStar
                  fill="currentColor"
                  className="text-[#E73C17]"
                  key={starIndex}
                />
              ))}

              <div className="bg-gray-300 rounded w-full h-1 ml-3">
                <div
                  style={{ width: `${rating.percentage}%` }}
                  className="h-full rounded main-bg-color"
                ></div>
              </div>
              <p className="text-base text-[#333] font-bold ml-3">
                {rating.percentage}%
              </p>
              <span>({rating.totalCount})</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductReview;
