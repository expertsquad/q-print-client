"use client";
import React, { useMemo, useState } from "react";
import { useGetOnlineOrderQuery } from "@/redux/features/online-order/online-orderApi";
import { useGetUserQuery } from "@/redux/features/user/user";
import OrderHistoryOrderPlacedLayout from "@/components/Profile/OrderHistoryOrderPlacedLayout";
import OrderHistoryDetails from "@/components/Profile/OrderHistoryDetails";

const OrderHistory = () => {
  const [timePeriod, setTimePeriod] = useState("All Order");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const { data } = useGetUserQuery("");

  // Update query parameters when startDate or endDate changes
  const { data: onlineOrder, isLoading } = useGetOnlineOrderQuery(
    timePeriod === "All Order"
      ? `buyer.userId=${data?.data._id}`
      : `createdAt[gte]=${startDate?.toISOString()}&createdAt[lte]=${endDate?.toISOString()}&buyer.userId=${data?.data._id
      }`
  );

  const currentDate = useMemo(() => new Date(), []);

  const handleTimePeriodChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedTimePeriod = event.target.value;
    setTimePeriod(selectedTimePeriod);

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
  };

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
                week
              </option>
              <option value="2 week" className=" text-gray-800">
                2 week
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

      <OrderHistoryDetails data={onlineOrder} isLoading={isLoading} />
    </div>
  );
};

export default OrderHistory;
