"use client";
import ProfileViewPersonalInformation from "@/components/Profile/ProfileViewPersonalInformation";
import ProfileViewShippingInfo from "@/components/Profile/ProfileViewShippingInfo";
import ViewProfilleEdit from "@/components/Profile/ViewProfilleEdit";
import {
  useGetUserAddressQuery,
  useGetUserQuery,
} from "@/redux/features/user/user";

const ViewProfile = () => {
  // <== Get User Personal Information ==>
  const { data: personalInformation } = useGetUserQuery("");

  // <== Get User Address ==>
  const { data: shippingInformation } =
    useGetUserAddressQuery("isDefault=true");

  return (
    <section className=" w-full flex flex-col gap-7 mb-7">
      <ViewProfilleEdit profileInfo={personalInformation?.data} />
      <ProfileViewPersonalInformation
        personalInformation={personalInformation?.data}
      />
      <ProfileViewShippingInfo
        shippingInformation={shippingInformation?.data}
      />
    </section>
  );
};

export default ViewProfile;
