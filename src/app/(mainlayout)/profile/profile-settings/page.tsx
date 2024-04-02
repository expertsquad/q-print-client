"use client";
import PersonalInformation from "@/components/Profile/PersonalInformation";
import ShippingAddress from "@/components/Profile/ShippingAddress";
import {
  useGetUserAddressQuery,
  useGetUserQuery,
} from "@/redux/features/user/user";

interface Address {
  _id: string;
  isDefault: boolean;
  isBilling: boolean;
  firstName: string;
  lastName: string;
  state: string;
  country: string;
  streetAddress: string;
  phoneNumber: string;
  zipCode: number;
  userId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const ProfileSettings = () => {
  // <== Get User Personal Information ==>
  const { data: personalInformation } = useGetUserQuery("");

  // <== Get User Address ==>
  const { data: address } = useGetUserAddressQuery("");
  const defaultAddress = address?.data?.find(
    (address: Address) => address.isDefault
  );

  return (
    <div className="lg:border rounded-lg lg:p-7 flex flex-col gap-8 mb-7">
      <PersonalInformation personalInformation={personalInformation?.data} />
      <ShippingAddress shippingInformation={defaultAddress} />
      <button type="submit" className="flex items-start justify-start">
        <span className="main-bg-color px-5 py-1.5 text-white rounded-md">
          Update
        </span>
      </button>
    </div>
  );
};

export default ProfileSettings;
