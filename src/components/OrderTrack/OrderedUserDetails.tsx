import {
  IconCash,
  IconMail,
  IconPhone,
  IconTruckDelivery,
} from "@tabler/icons-react";
import { IconMapPin, IconUser } from "@tabler/icons-react";
import React from "react";

const OrderedUserDetails = ({ details }: any) => {
  const userAddress = details?.shippingAddress;
  return (
    <ul className="user-details pl-5 py-5">
      {[
        {
          icon: (
            <IconUser
              stroke={1}
              width={20}
              height={20}
              className="text-[#808080]"
            />
          ),
          text: userAddress?.firstName,
        },
        {
          icon: (
            <IconMapPin
              stroke={1}
              width={20}
              height={20}
              className="text-[#808080]"
            />
          ),
          text: userAddress?.streetAddress,
        },
        {
          icon: (
            <IconMail
              stroke={1}
              width={20}
              height={20}
              className="text-[#808080]"
            />
          ),
          text: details?.email,
        },
        {
          icon: (
            <IconPhone
              stroke={1}
              width={20}
              height={20}
              className="text-[#808080]"
            />
          ),
          text: userAddress?.phoneNumber,
        },
        {
          icon: (
            <IconCash
              stroke={1}
              width={20}
              height={20}
              className="text-[#808080]"
            />
          ),
          text: "Cash on Delivery",
        },
        {
          icon: (
            <IconTruckDelivery
              stroke={1}
              width={20}
              height={20}
              className="text-[#808080]"
            />
          ),
          text: userAddress?.state,
        },
      ].map(({ icon, text }, index) => (
        <li
          key={index}
          className="flex items-center gap-2 text-[16px] md:text-[16px] text-black text-opacity-80 mb-4 text-wrap"
        >
          <span>{icon}</span>
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
};

export default OrderedUserDetails;
