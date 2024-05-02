import PurchagingOrderDetails from "@/components/thankYou/PurchagingOrderDetails";
import ThankYouPageContactInfo from "@/components/thankYou/ThankYouPageContactInfo";
import ThankYouPageTop from "@/components/thankYou/ThankYouPageTop";
import { IconInfoCircle } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const ThankYou = ({ param }: { param: string }) => {
  return (
    <div className="max-w-[800px] mx-auto">
      <ThankYouPageTop />
      <span className="flex items-center justify-center font-bold text-2xl mb-5">
        Order Details
      </span>
      <div>
        <PurchagingOrderDetails />
        <ThankYouPageContactInfo />
      </div>
      <div className="flex items-center justify-center my-5 md:my-10 whitespace-nowrap">
        <IconInfoCircle />
        <span className="ml-2 mr-0.5">Need help?</span>
        <Link className="main-text-color" href={"/"}>
          contact us
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
