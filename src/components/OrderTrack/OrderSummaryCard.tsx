const OrderSummaryCard = ({ productInfo }: any) => {
  return (
    <div className="w-full h-full md:max-w-[438px] border rounded-lg">
      <h5 className="text-[16px] md:text-[18px] font-medium pl-6 py-5 border-b">
        Order Summary
      </h5>
      <ul className="px-5 md:px-7">
        {[
          { label: "Sub Total", amount: productInfo?.totalPrice },
          { label: "Shipping", amount: productInfo?.shippingCharge },
          {
            label: "Discount",
            amount: -productInfo?.totalDiscount,
            borderBottom: true,
          },
        ].map(({ label, amount, borderBottom }, index, array) => (
          <li
            key={index}
            className={`flex justify-between mt-5 text-[#5F6C72] ${
              borderBottom ? "border-b" : ""
            } ${
              index === array?.length - 1 && amount === -15
                ? "main-text-color"
                : ""
            }`}
          >
            {label}{" "}
            <span>
              {amount} <small>QAR</small>
            </span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between px-5 md:px-7 mt-5 mb-2">
        <h6 className="font-medium">Total</h6>
        <span className="text-[18px] font-medium main-text-color">
          {productInfo?.totalPrice +
            productInfo?.shippingCharge -
            productInfo?.totalDiscount}{" "}
          <small>QAR</small>
        </span>
      </div>
      <p className="px-5 md:px-7 text-[#5F6C72] mb-5 md:mb-7">
        {productInfo?.totalQuantity} Item, {productInfo?.orderItems?.length}{" "}
        Package
      </p>
    </div>
  );
};

export default OrderSummaryCard;
