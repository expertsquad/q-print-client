"use client";
import PersonalInformation from "@/components/Profile/PersonalInformation";
import ShippingAddress from "@/components/Profile/ShippingAddress";
import DeleteGlobalModal from "@/components/shared/DeleteGlobalModal";
import { setShippingData } from "@/redux/features/user/shippingAddressSlice";
import {
  useGetUserAddressQuery,
  useGetUserQuery,
} from "@/redux/features/user/user";
import { useAppDispatch } from "@/redux/hook";
import { useLayoutEffect, useState } from "react";

const ProfileSettings = () => {
  // <== Get User Personal Information ==>
  const { data: personalInformation } = useGetUserQuery("");
  const dispatch = useAppDispatch();
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal((prevState) => !prevState);
  };

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
    <>
      <div className="">
        <div className="lg:border rounded-lg lg:p-7 flex flex-col gap-8 mb-7">
          <PersonalInformation
            personalInformation={personalInformation?.data}
          />
          <ShippingAddress />
        </div>

        {/* will be deleted */}
        <div className="my-10 text-center ">
          <button
            onClick={() => handleModal()}
            className="px-6 py-2 hover:bg-red-500 text-red-500 hover:text-white rounded-3xl border border-red-500  "
          >
            Delete my account
          </button>
        </div>
      </div>
      {openModal && <DeleteGlobalModal handleModal={handleModal} />}
    </>
  );
};

export default ProfileSettings;
