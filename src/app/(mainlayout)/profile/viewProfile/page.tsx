import ProfileViewPersonalInformation from "@/components/Profile/ProfileViewPersonalInformation";
import ProfileViewShippingInfo from "@/components/Profile/ProfileViewShippingInfo";
import ViewProfilleEdit from "@/components/Profile/ViewProfilleEdit";
import React from "react";

const ViewProfile = () => {
  return (
    <section className=" w-full flex flex-col gap-7 mb-7">
      <ViewProfilleEdit />
      <ProfileViewPersonalInformation />
      <ProfileViewShippingInfo />
    </section>
  );
};

export default ViewProfile;
