"use client";
import ReturnToCardButton from "@/components/PrintingRequest/ReturnToCardButton";
import CustomInput from "@/components/shared/CustomInput";
import ShoppingCartTotalItems from "@/components/UI/card/ShoppingCartTotalItems";
import { setPrintingRequest } from "@/redux/features/printing-request/postPrintingRequestSlice";
import {
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
  const dispatch = useAppDispatch();
  const [selectedOption, setSelectedOption] = useState(false);

  const data = useAppSelector((state) => state.printingRequestOrder);

  // <== Get User Address ==>
  const { data: address, isLoading } = useGetUserAddressQuery(`isDefault=true`);

  // <== Get User Personal Information ==>
  const { data: personalInformation } = useGetUserQuery("");

  const handleOptionChange = (event: any) => {
    setSelectedOption((prevState) => !prevState);
    console.log(event.target.value);
  };

  return (
    <section className="lg:w-[1280px] w-full mx-auto  mb-7">
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

            <div className="p-4 md:p-7">
              {/* == Personal Information == */}
              <p className="text-base text-gray-500 mb-5">
                Contact information
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-7 gap-5 w-full mb-8  ">
                <CustomInput
                  label="Email"
                  type="email"
                  value={personalInformation?.data?.email}
                  placeholder="Enter Your Email"
                  customClassName="opacity-80 "
                  inputStyle="focus:border-gray-200"
                  readonly
                />
                <CustomInput
                  label="Phone Number"
                  type="number"
                  value={personalInformation?.data?.phoneNumber}
                  placeholder="Enter Your Number"
                  customClassName="opacity-80 "
                  inputStyle="focus:border-gray-200"
                  readonly
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
                        {address?.data[0]?.streetAddress}
                      </span>
                      <span>{address?.data[0]?.phoneNumber}</span>
                    </div>
                  )}
                </>
              )}

              {/* == If user logged in then dropdown for new shipping address, else create an account == */}
              {isUserLoggedIn && (
                <div>
                  <label className="inline-flex items-center gap-2  ">
                    <div
                      className={`w-5 h-5 rounded-full bg-white  flex items-center justify-center border-fuchsia-700 border-2 ${
                        selectedOption ? "border-fuchsia-700 border-2" : ""
                      }`}
                    >
                      {selectedOption && (
                        <div className="h-3 w-3 bg-gradient-to-r from-[#C83B62] to-[#7F35CD] rounded-full"></div>
                      )}
                    </div>
                    <input
                      type="radio"
                      value="address"
                      checked={selectedOption}
                      onChange={handleOptionChange}
                      className="hidden"
                    />
                    <span className="">Add New Shipping Address</span>
                  </label>
                </div>
              )}

              {/* == shipping address or shipping information == */}
              {selectedOption && (
                <div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-7 gap-5 w-full">
                    <CustomInput
                      label="First Name"
                      type="text"
                      name="firstName"
                      // @ts-ignore
                      value={data?.shippingAddress?.firstName}
                      placeholder={"First Name"}
                      onChange={(e) =>
                        dispatch(
                          setPrintingRequest({
                            ...data,
                            shippingAddress: {
                              // @ts-ignore
                              ...data.shippingAddress,
                              [e.target.name]: e.target.value,
                            },
                          })
                        )
                      }
                    />
                    <CustomInput
                      label="Last Name"
                      type="text"
                      name="lastName"
                      // @ts-ignore
                      value={data?.shippingAddress?.lastName}
                      placeholder={"Last Name"}
                      onChange={(e) =>
                        dispatch(
                          setPrintingRequest({
                            ...data,
                            shippingAddress: {
                              // @ts-ignore
                              ...data.shippingAddress,
                              [e.target.name]: e.target.value,
                            },
                          })
                        )
                      }
                    />
                    <CustomInput
                      label="Phone Number"
                      type="text"
                      name="phoneNumber"
                      // @ts-ignore
                      value={data?.shippingAddress?.phoneNumber}
                      placeholder={"Phone Number"}
                      onChange={(e) =>
                        dispatch(
                          setPrintingRequest({
                            ...data,
                            shippingAddress: {
                              // @ts-ignore
                              ...data.shippingAddress,
                              [e.target.name]: e.target.value,
                            },
                          })
                        )
                      }
                    />
                    <CustomInput
                      label="Street Address"
                      type="text"
                      name="streetAddress"
                      // @ts-ignore
                      value={data?.shippingAddress?.streetAddress}
                      placeholder="Your Street Address"
                      onChange={(e) =>
                        dispatch(
                          setPrintingRequest({
                            ...data,
                            shippingAddress: {
                              // @ts-ignore
                              ...data.shippingAddress,
                              [e.target.name]: e.target.value,
                            },
                          })
                        )
                      }
                    />
                    <CustomInput
                      label="State"
                      type="text"
                      name="state"
                      // @ts-ignore
                      value={data?.shippingAddress?.state}
                      placeholder="Your State"
                      onChange={(e) =>
                        dispatch(
                          setPrintingRequest({
                            ...data,
                            shippingAddress: {
                              // @ts-ignore
                              ...data.shippingAddress,
                              [e.target.name]: e.target.value,
                            },
                          })
                        )
                      }
                    />
                    <CustomInput
                      label="Country"
                      type="text"
                      name="country"
                      // @ts-ignore
                      value={data?.shippingAddress?.country}
                      placeholder={"Country"}
                      onChange={(e) =>
                        dispatch(
                          setPrintingRequest({
                            ...data,
                            shippingAddress: {
                              // @ts-ignore
                              ...data.shippingAddress,
                              [e.target.name]: e.target.value,
                            },
                          })
                        )
                      }
                    />
                    <CustomInput
                      label=" Company Name ( Optional )"
                      type="text"
                      name="companyName"
                      // @ts-ignore
                      value={data?.shippingAddress?.companyName}
                      placeholder="Company Name"
                      onChange={(e) =>
                        dispatch(
                          setPrintingRequest({
                            ...data,
                            shippingAddress: {
                              // @ts-ignore
                              ...data.shippingAddress,
                              [e.target.name]: e.target.value,
                            },
                          })
                        )
                      }
                    />
                    <CustomInput
                      label="ZipCode"
                      type="text"
                      name="zipCode"
                      // @ts-ignore
                      value={data?.shippingAddress?.zipCode}
                      placeholder="Your ZipCode"
                      onChange={(e) =>
                        dispatch(
                          setPrintingRequest({
                            ...data,
                            // @ts-ignore
                            shippingAddress: {
                              ...(data.shippingAddress || {}),
                              [e.target.name]: parseFloat(e.target.value),
                            },
                          })
                        )
                      }
                    />
                  </div>
                  <div className="mb-3 flex gap-1.5 items-center mt-7">
                    <input
                      name="isDefault"
                      onChange={(e) =>
                        dispatch(
                          setPrintingRequest({
                            ...data,
                            shippingAddress: {
                              // @ts-ignore
                              ...data.shippingAddress,
                              // @ts-ignore
                              isDefault: !data.shippingAddress.isDefault,
                            },
                          })
                        )
                      }
                      title="inputradio"
                      type="checkbox"
                      // @ts-ignore
                      checked={data?.shippingAddress?.isDefault}
                    />

                    <span>Use as default address</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* return button */}

          <div className="hidden lg:block md:block w-max mt-8">
            <ReturnToCardButton />
          </div>
        </div>

        {/* total order card */}
        <div className="w-full md:w-4/12 lg:w-4/12">
          <ShoppingCartTotalItems
            btnText="Continue Payment"
            btnLink="payment"
          />
        </div>

        <div className="block md:hidden lg:hidden w-full ">
          <ReturnToCardButton />
        </div>
      </div>
    </section>
  );
};

export default YourInformation;
