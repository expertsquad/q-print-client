"use client";
import ProfileViewPersonalInformation from "@/components/Profile/ProfileViewPersonalInformation";
import ProfileViewShippingInfo from "@/components/Profile/ProfileViewShippingInfo";
import ViewProfilleEdit from "@/components/Profile/ViewProfilleEdit";
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

const ViewProfile = () => {
  // <== Get User Personal Information ==>
  const { data: personalInformation } = useGetUserQuery("");

  // <== Get User Address ==>
  const { data: address } = useGetUserAddressQuery("");
  const defaultAddress = address?.data?.find(
    (address: Address) => address.isDefault
  );

  return (
    <section className=" w-full flex flex-col gap-7 mb-7">
      <ViewProfilleEdit profileInfo={personalInformation?.data} />
      <ProfileViewPersonalInformation
        personalInformation={personalInformation?.data}
      />
      <ProfileViewShippingInfo shippingInformation={defaultAddress} />
    </section>
  );
};

export default ViewProfile;
