import React from "react";

const OrderDetails = () => {
  return (
    <div className="border rounded-xl mb-7">
      <h4 className="border-b py-4 md:py-5 px-7">Order Details</h4>
      {/* ==order-details order-summary order-items== */}
      <div className="order-details order-summary order-items flex-col md:flex-col-reverse">
        <div className="flex flex-col bg-slate-500">
          <div className="user-details py-4 md:py-5 px-7">Order Details</div>
          <div>Order Items</div>
        </div>
        {/* ==order summary== */}
        <div className="bg-green-400">Order Summary</div>
      </div>
    </div>
  );
};

export default OrderDetails;
