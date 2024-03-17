"use client";
import ProfileViewPersonalInformation from "@/components/Profile/ProfileViewPersonalInformation";
import ProfileViewShippingInfo from "@/components/Profile/ProfileViewShippingInfo";
import ViewProfilleEdit from "@/components/Profile/ViewProfilleEdit";
import {
  useGetUserLoggedQuery,
  useGetUserQuery,
} from "@/redux/features/user/user";

const ViewProfile = () => {
  // <== Get User Personal Information ==>
  const { data, isError, isLoading } = useGetUserQuery(undefined);

  // <== Get User Address ==>
  const { data: address } = useGetUserLoggedQuery("isDefault=true");
  console.log(address, "address");

  return (
    <section className=" w-full flex flex-col gap-7 mb-7">
      <ViewProfilleEdit profileInfo={data?.data} />
      <ProfileViewPersonalInformation personalInformation={address?.data[0]} />
      <ProfileViewShippingInfo shippingInformation={address?.data[0]} />
    </section>
  );
};

export default ViewProfile;
