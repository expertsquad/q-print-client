"use client";
import CustomInput from "../shared/CustomInput";
import {
  useAddShippingAddressMutation,
  useUpdateMeMutation,
  useUpdateShippingAddressMutation,
} from "@/redux/features/user/user";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setShippingData } from "@/redux/features/user/shippingAddressSlice";
import { useState } from "react";
import Spinner from "@/components/shared/Spinner";
import { toast } from "react-toastify";

const ShippingAddress = () => {

  const [loading, setLoading] = useState(false);

  // add shipping address mutation
  const [addShippingInfo] = useAddShippingAddressMutation();
  // update shipping address mutation
  const [updateShippingInfo] = useUpdateShippingAddressMutation();
  // update user information
  const [updateMe] = useUpdateMeMutation();

  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.updateShippingInfo);

  const userData = useAppSelector((state) => state.profileEdit);
  const formData = new FormData();

  const handleUpdateShippingInfo = async (event: any) => {
    event.preventDefault();
    setLoading(true);

    try {
      for (const [key, value] of Object.entries(userData)) {
        formData.append(key, value);
      }

      if (data?.addNewAddress === true) {
        //updating shipping address
        const res = await updateShippingInfo({ data: formData, id: data?._id });

      } else {
        //adding new shipping address
        const res = await addShippingInfo({ data: formData });

      }
      // updating user info
      const updateUserInfo = await updateMe(formData);
      // @ts-ignore
      toast.success(updateUserInfo?.data?.message);
      console.log(updateUserInfo);
    } catch (err: any) {
      toast.error(err?.errorMessages)
      console.log(err.errorMessages);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {
        loading &&
        <Spinner />
      }
      <h1 className="text-black text-xl mb-5 md:mb-8 lg:mb-8 ">
        Shipping Information
      </h1>
      <form onSubmit={handleUpdateShippingInfo}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
          <CustomInput
            label="First Name"
            type="text"
            name="firstName"
            value={data?.firstName}
            placeholder={""}
            onChange={(e) =>
              dispatch(setShippingData({ [e.target.name]: e.target.value }))
            }
          />
          <CustomInput
            label="Last Name"
            type="text"
            name="lastName"
            value={data?.lastName}
            placeholder={""}
            onChange={(e) =>
              dispatch(setShippingData({ [e.target.name]: e.target.value }))
            }
          />
          <CustomInput
            label="Phone Number"
            type="text"
            name="phoneNumber"
            value={data?.phoneNumber}
            placeholder={""}
            onChange={(e) =>
              dispatch(setShippingData({ [e.target.name]: e.target.value }))
            }
          />

          <CustomInput
            label="Country"
            type="text"
            name="country"
            value={data?.country}
            placeholder={""}
            onChange={(e) =>
              dispatch(setShippingData({ [e.target.name]: e.target.value }))
            }
          />

          <CustomInput
            label="State"
            type="text"
            name="state"
            value={data?.state}
            placeholder=""
            onChange={(e) =>
              dispatch(setShippingData({ [e.target.name]: e.target.value }))
            }
          />

          <CustomInput
            label="ZipCode"
            type="text"
            name="zipCode"
            value={data?.zipCode}
            placeholder=""
            onChange={(e) =>
              dispatch(
                setShippingData({ [e.target.name]: Number(e.target.value) })
              )
            }
          />

          <CustomInput
            label=" Company Name ( Optional )"
            type="text"
            name="companyName"
            value={data?.companyName}
            placeholder="Company Name"
            onChange={(e) =>
              dispatch(setShippingData({ [e.target.name]: e.target.value }))
            }
          />

          <CustomInput
            label="Street Address"
            type="text"
            name="streetAddress"
            value={data?.streetAddress}
            placeholder=""
            onChange={(e) =>
              dispatch(setShippingData({ [e.target.name]: e.target.value }))
            }
          />
        </div>
        <button
          type="submit"
          className="flex items-start justify-start mt-5 md:mt-7"
        >
          <span className="main-bg-color px-7 py-2 text-white rounded-md">
            Update
          </span>
        </button>
      </form>
    </div>
  );
};

export default ShippingAddress;
