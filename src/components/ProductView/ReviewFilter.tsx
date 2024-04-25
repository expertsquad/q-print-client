"use client";
import { setFilteredReview } from "@/redux/features/review/filterProductReview";
import { useAppDispatch } from "@/redux/hook";

const ReviewFilter = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="order-3 md:order-2 mb-7 flex-col md:flex  items-end justify-end">
      <h2 className="block md:hidden text-[18px] md:text-[24px] font-semibold mb-5">
        Customers Say
      </h2>
      <select
        title="Top Reviews"
        className="p-2 rounded-md w-full md:max-w-40 border outline-none"
        name="filterReview"
        onChange={(e) => dispatch(setFilteredReview(e.target.value))}
      >
        <option value={""}>All Reviews</option>
        <option value={"5"}>5 Star Rating</option>
        <option value={"4"}>4 Star Rating</option>
        <option value={"3"}>3 Star Rating</option>
        <option value={"2"}>2 Star Rating</option>
        <option value={"1"}>1 Star Rating</option>
      </select>
    </div>
  );
};

export default ReviewFilter;
