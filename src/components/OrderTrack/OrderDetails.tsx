import {
  IconUser,
  IconMapPin,
  IconMail,
  IconPhone,
  IconCash,
  IconTruckDelivery,
} from "@tabler/icons-react";
import OrderedItemData from "./OrderedItemData";

const OrderDetails = () => {
  return (
    <div className="rounded-xl mb-7">
      {/* ==order-details order-summary order-items== */}
      <div className="flex md:flex-row flex-col justify-between gap-5">
        <div className="flex flex-col w-full">
          <div className="border rounded-lg">
            <h5 className="border-b pl-6 py-5 font-medium text-[16px] md:text-[18px]">
              Order Details
            </h5>
            <ul className="user-details pl-5 py-5">
              {[
                { icon: <IconUser />, text: "Virat Kohli" },
                {
                  icon: <IconMapPin />,
                  text: "Noakhali Chaprashirhat Road No. 13/x, House no. 1320/C, Flat No. 5D",
                },
                { icon: <IconMail />, text: "virat@king.gmail.com" },
                { icon: <IconPhone />, text: "01850711231" },
                { icon: <IconCash />, text: "Cash on Delivery" },
                { icon: <IconTruckDelivery />, text: "Outside Dhaka" },
              ].map(({ icon, text }, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-[16px] md:text-[18px] text-black text-opacity-80 mb-4 text-wrap"
                >
                  {icon} {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="border mt-7 rounded-lg">
            <h5 className="text-[16px] md:text-[18px] font-medium pl-6 py-5 border-b">
              Items
            </h5>
            <div>
              <OrderedItemData />
            </div>
          </div>
        </div>
        {/* ==order summary== */}
        <div className="w-full h-full md:max-w-[438px] border rounded-lg">
          <h5 className="text-[16px] md:text-[18px] font-medium pl-6 py-5 border-b">
            Order Summary
          </h5>
          <ul className="px-5 md:px-7">
            {[
              { label: "Sub Total", amount: 1500 },
              { label: "Shipping", amount: 15 },
              { label: "Discount", amount: -15, borderBottom: true },
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
              1500.00 <small>QAR</small>
            </span>
          </div>
          <p className="px-5 md:px-7 text-[#5F6C72] mb-5 md:mb-7">
            6 Item, 3 Package
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
