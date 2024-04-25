"use client";
import {
  useGetUserAddressQuery,
  useGetUserQuery,
} from "@/redux/features/user/user";

interface thankYouPageProps {
  contact: string;
  streetAddress: string;
  payment: string;
}

const ThankYouPageContact = ({
  streetAddress,
  contact,
  payment,
}: thankYouPageProps) => {
  return (
    <div className="border p-5 md:p-10 lg:p-10 rounded-lg flex flex-col gap-5">
      <div className="text-base flex items-center justify-start pb-5 gap-5 border-b ">
        <span className="text-gray-500">Contact</span>

        <span className="text-gray-800">{contact}</span>
      </div>
      <div className="text-base flex items-center justify-start pb-5 gap-5  border-b ">
        <p className="text-gray-500">Address</p>{" "}
        <span className="text-gray-800">{streetAddress}</span>
      </div>
      <div className="text-base flex items-center justify-start gap-5 ">
        <p className="text-gray-500">Payment</p>{" "}
        <p className="text-gray-800">{payment}</p>
      </div>
    </div>
  );
};

export default ThankYouPageContact;
