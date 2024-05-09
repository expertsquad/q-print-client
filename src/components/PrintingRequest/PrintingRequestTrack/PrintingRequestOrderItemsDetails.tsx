import React from "react";
import PrintingRequestOrderedUserDetails from "./PrintingRequestOrderedUserDetails";
import PrintingRequestOrderSummayCard from "./PrintingRequestOrderSummayCard";
import PrintingRequestOrderedItemsInfo from "./PrintingRequestOrderedItemsInfo";

const PrintingRequestOrderItemsDetails = ({ orderedData }: any) => {
  return (
    <div className="rounded-xl mb-7">
      {/* ==order-details order-summary order-items== */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5">
        {/* ==Ordered user data== */}
        <div className="border rounded-lg order-1 md:col-span-2">
          <h5 className="border-b pl-6 py-5 font-medium text-[16px] md:text-[18px]">
            Order Details
          </h5>
          <PrintingRequestOrderedUserDetails
            userAddress={orderedData?.buyer?.shippingAddress}
            email={orderedData?.buyer?.email}
          />
        </div>
        {/* ==order item data == */}
        <div className="border my-3 md:my-auto rounded-lg order-2 md:order-3 md:col-span-2">
          <h5 className="text-[16px] md:text-[18px] font-medium pl-6 py-5 border-b">
            Items
          </h5>
          <div className="">
            <PrintingRequestOrderedItemsInfo
              paperType={orderedData?.paperType}
              paperSize={orderedData?.paperSize}
              printingMode={orderedData?.printingColorMode}
              attachment={orderedData?.printingRequestFile}
              quantity={orderedData?.totalQuantity}
              totalPrice={orderedData?.totalPrice}
            />
          </div>
        </div>

        <div className="order-3 md:order-2 w-full h-full md:max-w-[438px]">
          <PrintingRequestOrderSummayCard orderedItem={orderedData} />
        </div>
      </div>
    </div>
  );
};

export default PrintingRequestOrderItemsDetails;
