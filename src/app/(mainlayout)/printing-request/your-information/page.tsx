"use client";
import PringtingRequestOrderCard from "@/components/PrintingRequest/PringtingRequestOrderCard";
import ReturnToCardButton from "@/components/PrintingRequest/ReturnToCardButton";
import CustomInput from "@/components/shared/CustomInput";
import { setShippingData } from "@/redux/features/user/shippingAddressSlice";
import {
  useAddShippingAddressMutation,
  useGetUserAddressQuery,
  useGetUserQuery,
} from "@/redux/features/user/user";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { isLoggedIn } from "@/services/auth.service";
import { IconUser } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

const YourInformation = () => {
  const isUserLoggedIn = isLoggedIn();
  const [addNewShipping, setAddNewShipping] = useState(false);

  const [addShippingInfo] = useAddShippingAddressMutation();
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.updateShippingInfo);
  console.log(data?._id, "select from");

  const handleAddShipping = () => {
    setAddNewShipping((prevState) => !prevState);
  };

  // <== Get User Address ==>
  const { data: address, isLoading } = useGetUserAddressQuery("");
  const defaultAddress = address?.data?.find(
    (address: any) => address.isDefault
  );

  // <== Get User Personal Information ==>
  const { data: personalInformation } = useGetUserQuery("");

  // <== Update shipping address ==>
  const updateShippingInformation = async (event: any) => {
    event.preventDefault();

    try {
      const res = await addShippingInfo({ data: data, id: data?._id });
      console.log(res, "data");
    } catch (err: any) {
      console.log(err.errorMessages);
    }
  };
  return (
    <section className="lg:max-w-[1280px] w-full mx-auto  mb-7">
      <div className="mb-7">
        <h3 className="[font-size:_clamp(1.2em,4vw,1.8em)] font-bold">
          Your Information
        </h3>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row gap-7 justify-between">
        <div className="flex flex-col w-full md:w-8/12 lg:w-8/12 -5 ">
          <div className=" border rounded-lg ">
            {/* == Click here to login btn == */}
            {!isUserLoggedIn && (
              <Link
                href="/login"
                className="flex items-center justify-center gap-2 border-b py-3 text-base text-gray-800"
              >
                <span className="flex items-center gap-2">
                  <IconUser width={20} height={20} /> <p>Click here to login</p>
                </span>
              </Link>
            )}

            <form
              action=""
              onSubmit={updateShippingInformation}
              className="p-4 md:p-7"
            >
              {/* == Personal Information == */}
              <p className="text-base text-gray-500 mb-5">
                Contact information
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-7 gap-5 w-full mb-8">
                <CustomInput
                  label="Email"
                  type="email"
                  value={personalInformation?.data?.email}
                  placeholder="Enter Your Email"
                />
                <CustomInput
                  label="Phone Number"
                  type="number"
                  value={personalInformation?.data?.phoneNumber}
                  placeholder="Enter Your Number"
                />
              </div>

              {/* == Existing User Address == */}
              {isUserLoggedIn && (
                <>
                  {isLoading ? (
                    <p>Loading...</p>
                  ) : (
                    <div className="flex flex-col mb-5 border p-3 rounded-md">
                      <span className="text-black-opacity-60">
                        Shipping Address
                      </span>
                      <span className="mt-2.5">
                        {defaultAddress?.streetAddress}
                      </span>
                      <span>{defaultAddress?.phoneNumber}</span>
                    </div>
                  )}
                </>
              )}

              {/* == If user logged in then dropdown for new shipping address, else create an account == */}
              {isUserLoggedIn && (
                <div className="mb-5 flex gap-1.5 items-center">
                  <input
                    onClick={handleAddShipping}
                    title="radio"
                    type="radio"
                    className="checked"
                  />
                  <span>Add new shipping address</span>
                </div>
              )}

              {/* == shipping address or shipping information == */}
              {addNewShipping && (
                <div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-7 gap-5 w-full">
                    <CustomInput
                      label="First Name"
                      type="text"
                      name="firstName"
                      value={data?.firstName}
                      placeholder={"First Name"}
                      onChange={(e) =>
                        dispatch(
                          setShippingData({ [e.target.name]: e.target.value })
                        )
                      }
                    />
                    <CustomInput
                      label="Last Name"
                      type="text"
                      name="lastName"
                      value={data?.lastName}
                      placeholder={"Last Name"}
                      onChange={(e) =>
                        dispatch(
                          setShippingData({ [e.target.name]: e.target.value })
                        )
                      }
                    />
                    <CustomInput
                      label="Phone Number"
                      type="text"
                      name="phoneNumber"
                      value={data?.phoneNumber}
                      placeholder={"Phone Number"}
                      onChange={(e) =>
                        dispatch(
                          setShippingData({ [e.target.name]: e.target.value })
                        )
                      }
                    />
                    <CustomInput
                      label="Street Address"
                      type="text"
                      name="streetAddress"
                      value={data?.streetAddress}
                      placeholder="Your Street Address"
                      onChange={(e) =>
                        dispatch(
                          setShippingData({ [e.target.name]: e.target.value })
                        )
                      }
                    />
                    <CustomInput
                      label="State"
                      type="text"
                      name="state"
                      value={data?.state}
                      placeholder="Your State"
                      onChange={(e) =>
                        dispatch(
                          setShippingData({ [e.target.name]: e.target.value })
                        )
                      }
                    />
                    <CustomInput
                      label="Country"
                      type="text"
                      name="country"
                      value={data?.country}
                      placeholder={"Country"}
                    />
                    <CustomInput
                      label=" Company Name ( Optional )"
                      type="text"
                      name="companyName"
                      value={data?.companyName}
                      placeholder="Company Name"
                      onChange={(e) =>
                        dispatch(
                          setShippingData({ [e.target.name]: e.target.value })
                        )
                      }
                    />
                    <CustomInput
                      label="ZipCode"
                      type="text"
                      name="zipCode"
                      value={data?.zipCode}
                      placeholder="Your ZipCode"
                      onChange={(e) =>
                        dispatch(
                          setShippingData({
                            [e.target.name]: Number(e.target.value),
                          })
                        )
                      }
                    />
                  </div>
                  <div className="mb-3 flex gap-1.5 items-center mt-7">
                    <input name="isDefault" title="inputradio" type="radio" />
                    <span>Use as default address</span>
                  </div>
                  <button type="submit">update</button>
                </div>
              )}
            </form>
          </div>

          {/* == Return to previous page == */}
          <div className="hidden md:block w-max mt-8">
            <ReturnToCardButton />
          </div>
        </div>

        {/* == Total Amount Card == */}
        <div className="w-full md:w-4/12 lg:w-4/12">
          <PringtingRequestOrderCard
            // handleOrder={updateShippingInformation}
            buttonText={"Continue to Payment"}
            href={"/printing-request/payment"}
          />
        </div>

        {/* == Return to previous page == */}
        <div className="block md:hidden w-full ">
          <ReturnToCardButton />
        </div>
      </div>
    </section>
  );
};

export default YourInformation;
