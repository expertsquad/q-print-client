"use client";
import ProfileViewPersonalInformation from "@/components/Profile/ProfileViewPersonalInformation";
import ProfileViewShippingInfo from "@/components/Profile/ProfileViewShippingInfo";
import ViewProfilleEdit from "@/components/Profile/ViewProfilleEdit";
import { useGetUserQuery } from "@/redux/features/user/user";

const ViewProfile = () => {
  // <== Get User Personal Information ==>
  const { data, isError, isLoading } = useGetUserQuery(undefined);
  // console.log(data?.data, isError, "Undifined Data");

  return (
    <section className=" w-full flex flex-col gap-7 mb-7">
      <ViewProfilleEdit profileInfo={data?.data} />
      <ProfileViewPersonalInformation
        personalInformation={data?.data?.defaultAddress?.addressId}
      />
      <ProfileViewShippingInfo
        shippingInformation={data?.data?.billingAddress?.addressId}
      />
    </section>
  );
};

export default ViewProfile;
