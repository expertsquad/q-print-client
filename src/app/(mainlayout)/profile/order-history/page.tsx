"use client";
import React, { useMemo, useState, useEffect } from "react";
import { useGetOnlineOrderQuery } from "@/redux/features/online-order/online-orderApi";
import { useGetUserQuery } from "@/redux/features/user/user";
import OrderHistoryOrderPlacedLayout from "@/components/Profile/OrderHistoryOrderPlacedLayout";
import OrderHistoryDetails from "@/components/Profile/OrderHistoryDetails";

const OrderHistory = () => {
  const [timePeriod, setTimePeriod] = useState("All Order");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [limit, setLimit] = useState(10);
  const { data } = useGetUserQuery("");
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  // Update query parameters when startDate or endDate changes
  const { data: onlineOrder, isLoading } = useGetOnlineOrderQuery(
    timePeriod === "All Order"
      ? `buyer.userId=${data?.data._id}&limit=${limit}`
      : `createdAt[gte]=${startDate?.toISOString()}&createdAt[lte]=${endDate?.toISOString()}&buyer.userId=${
          data?.data._id
        }&limit=${limit}`
  );

  const currentDate = useMemo(() => new Date(), []);

  const handleTimePeriodChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedTimePeriod = event.target.value;
    setTimePeriod(selectedTimePeriod);
    setLoading(true); // Set loading state to true

    const newStartDate = new Date(); // Initialize with current date

    switch (selectedTimePeriod) {
      case "All Order":
        setStartDate(null);
        setEndDate(null);
        break;

      case "week":
        newStartDate.setDate(newStartDate.getDate() - 7);
        break;
      case "2 week":
        newStartDate.setDate(newStartDate.getDate() - 14);
        break;
      case "1 month":
        newStartDate.setMonth(currentDate.getMonth() - 1);
        break;
      case "Past 3 Month":
        newStartDate.setMonth(newStartDate.getMonth() - 3);
        break;
      case "Past 6 month":
        newStartDate.setMonth(currentDate.getMonth() - 6);
        break;
      case "1 years":
        newStartDate.setFullYear(currentDate.getFullYear() - 1);
        break;
      default:
        alert("this data not available");
        break;
    }

    setStartDate(newStartDate || null);
    setEndDate(new Date() || null); // Set end date as current date

    // Introduce a 1-second delay before setting loading to false
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false); // Set loading state to false
  };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      const scrollPosition = scrollTop + clientHeight;
      const buffer = 150; // Buffer zone in pixels

      // Check if there's available data and it hasn't reached the end
      if (
        onlineOrder?.data?.length < onlineOrder?.meta?.total &&
        scrollPosition >= scrollHeight - clientHeight - buffer &&
        !loadingMore &&
        !isLoading
      ) {
        setLoadingMore(true);
        setLimit((prevLimit) => prevLimit + 10); // Increase the limit
      } else if (onlineOrder?.data?.length >= onlineOrder?.meta?.total) {
        setLoadingMore(false); // Disable Load More if all data has been loaded
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loadingMore, isLoading, onlineOrder]);

  return (
    <div className="w-full mb-7">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <h3 className="[font-size:_clamp(1em,4vw,1.5em)] font-bold">
            Order History
          </h3>
          <span className="flex items-center bg-[#03a6091a] text-[#03A609] rounded-full px-2 py-1 [font-size:clamp(9px,3vw,13.5px)]">
            {onlineOrder?.meta?.total}
          </span>
        </div>
        <div>
          <span className="border md:py-3 py-2 px-3 rounded-lg  w-fit ">
            <select
              title="Month Filter"
              className="py-2 rounded-md outline-none border-none w-min bg-transparent text-gray-700 "
              name="timePeriod"
              value={timePeriod}
              onChange={handleTimePeriodChange}
            >
              <option value="All Order" className=" text-gray-800">
                All Order
              </option>
              <option value="week" className=" text-gray-800">
                7 days
              </option>
              <option value="2 week" className=" text-gray-800">
                14 days
              </option>
              <option value="1 month" className=" text-gray-800">
                1 month
              </option>
              <option value="Past 3 Month" className=" text-gray-800">
                Past 3 Month
              </option>
              <option value="Past 6 month" className=" text-gray-800">
                Past 6 Month
              </option>
              <option value="1 years" className=" text-gray-800">
                Last 1 year
              </option>
            </select>
          </span>
        </div>
      </div>

      {!isLoading && ( // Render only when initial loading is complete
        <OrderHistoryDetails
          data={onlineOrder}
          isLoading={isLoading || loading}
          loadingMore={loadingMore}
        />
      )}
    </div>
  );
};

export default OrderHistory;
