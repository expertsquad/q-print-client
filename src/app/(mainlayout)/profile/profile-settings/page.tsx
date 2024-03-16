"use client";
import PersonalInformation from "@/components/Profile/PersonalInformation";
import ShippingAddress from "@/components/Profile/ShippingAddress";
import { useGetUserQuery } from "@/redux/features/user/user";

const ProfileSettings = () => {
  // <== Get User Personal Information ==>
  const { data, isError, isLoading } = useGetUserQuery(undefined);
  console.log(data, "Profile setting");
  return (
    <div className="lg:border rounded-lg lg:p-7 flex flex-col gap-8 mb-7">
      <PersonalInformation
        personalInformation={data?.data?.defaultAddress?.addressId}
      />
      <ShippingAddress
        shippingInformation={data?.data?.billingAddress?.addressId}
      />
    </div>
  );
};

export default ProfileSettings;
