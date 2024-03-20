"use client";
import PersonalInformation from "@/components/Profile/PersonalInformation";
import ShippingAddress from "@/components/Profile/ShippingAddress";
import {
  useGetUserLoggedQuery,
  useGetUserQuery,
} from "@/redux/features/user/user";
import { isLoggedIn } from "@/services/auth.service";
import { useLayoutEffect } from "react";
import { redirect } from "next/navigation";

const ProfileSettings = () => {
  useLayoutEffect(() => {
    const userLoggedCheck = isLoggedIn();

    if (!userLoggedCheck) {
      redirect("/");
    }
  }, []);

  // <== Get User Address ==>
  const { data: address } = useGetUserLoggedQuery("isDefault=true");
  return (
    <div className="lg:border rounded-lg lg:p-7 flex flex-col gap-8 mb-7">
      <PersonalInformation personalInformation={address?.data[0]} />
      <ShippingAddress shippingInformation={address?.data[0]} />
    </div>
  );
};

export default ProfileSettings;
