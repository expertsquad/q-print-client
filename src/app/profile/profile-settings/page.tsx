import PersonalInformation from "@/components/Profile/PersonalInformation";
import ShippingAddress from "@/components/Profile/ShippingAddress";
import React from "react";

const ProfileSettings = () => {
  return (
    <div className="lg:border rounded-lg lg:p-7 flex flex-col gap-8 mb-7">
      <PersonalInformation />
      <ShippingAddress />
    </div>
  );
};

export default ProfileSettings;
