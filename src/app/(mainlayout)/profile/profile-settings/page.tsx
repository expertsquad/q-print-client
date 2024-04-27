"use client";
import PersonalInformation from "@/components/Profile/PersonalInformation";
import ShippingAddress from "@/components/Profile/ShippingAddress";
import { setShippingData } from "@/redux/features/user/shippingAddressSlice";
import {
  useGetUserAddressQuery,
  useGetUserQuery,
} from "@/redux/features/user/user";
import { useAppDispatch } from "@/redux/hook";
import { useLayoutEffect } from "react";

const ProfileSettings = () => {
  // <== Get User Personal Information ==>
  const { data: personalInformation } = useGetUserQuery("");
  const dispatch = useAppDispatch();

  // <== Get User Address ==>
  const { data: defaultAddress } = useGetUserAddressQuery("isDefault=true");

  useLayoutEffect(() => {
    dispatch(
      setShippingData({
        ...(defaultAddress?.data?.length
          ? { ...defaultAddress.data[0], addNewAddress: true }
          : { addNewAddress: false, isDefault: true }),
      })
    );
  }, [defaultAddress, dispatch]);

  return (
    <div className="lg:border rounded-lg lg:p-7 flex flex-col gap-8 mb-7">
      <PersonalInformation personalInformation={personalInformation?.data} />
      <ShippingAddress />
    </div>
  );
};

export default ProfileSettings;
