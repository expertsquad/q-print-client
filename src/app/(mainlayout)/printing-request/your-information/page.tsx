"use client";
import PringtingRequestOrderCard from "@/components/PrintingRequest/PringtingRequestOrderCard";
import ReturnToCardButton from "@/components/PrintingRequest/ReturnToCardButton";
import CustomInput from "@/components/shared/CustomInput";
import {
  useGetUserAddressQuery,
  useGetUserQuery,
} from "@/redux/features/user/user";
import { isLoggedIn } from "@/services/auth.service";
import { IconUser } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

const YourInformation = () => {
  const isUserLoggedIn = isLoggedIn();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasDefaultAddress, setHasDefaultAddress] = useState(true);
  // <== Get User Address ==>
  const { data: address } = useGetUserAddressQuery("");
  const defaultAddress = address?.data?.find(
    (address: any) => address.isDefault
  );

  const handleOptionChange = () => {
    setSelectedOption((prevSelected) =>
      prevSelected === "select" ? null : "select"
    );
  };

  // addNewShippingAddress
  const addNewShippingAddress = () => {
    setHasDefaultAddress(false);
  };
  // <== Get User Personal Information ==>
  const { data: personalInformation } = useGetUserQuery("");
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
            {/* click here to login */}

            <div>
              {isUserLoggedIn ? (
                <>
                  <p></p>
                </>
              ) : (
                <Link
                  href="/login"
                  className="flex items-center justify-center gap-2 border-b py-3 text-base text-gray-800 "
                >
                  {" "}
                  <IconUser /> <p>Click here to login</p>
                </Link>
              )}
            </div>

            {/* personal Information  */}
            <div className="p-7">
              <div className="">
                <p className="text-base text-gray-500 mb-5">
                  Contact information
                </p>
                <form
                  onChange={() => console.log("change")}
                  className="grid grid-cols-1 lg:grid-cols-2 lg:gap-7 gap-5 w-full  mb-5"
                >
                  <CustomInput
                    label="Email"
                    type="email"
                    value={personalInformation?.data?.email}
                    placeholder=""
                  />
                  <CustomInput
                    label="Phone Number"
                    type="number"
                    value={personalInformation?.data?.phoneNumber}
                    placeholder=""
                  />
                </form>

                {isUserLoggedIn && (
                  <div className="flex flex-col mb-5 border p-3">
                    <span className="text-black-opacity-60 mb-3">
                      Default shipping address
                    </span>
                    <p>{defaultAddress?.streetAddress}</p>
                    <p>{defaultAddress?.phoneNumber}</p>
                  </div>
                )}

                {isUserLoggedIn ? (
                  <div className="h-10">
                    <label
                      onClick={addNewShippingAddress}
                      className="inline-flex items-center"
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-white flex items-center justify-center border-fuchsia-700 border-2 ${
                          selectedOption === "select"
                            ? "border-fuchsia-700 border-2"
                            : ""
                        }`}
                        onClick={handleOptionChange}
                      >
                        {selectedOption === "select" && (
                          <div className="h-3 w-3 bg-gradient-to-r from-[#C83B62] to-[#7F35CD] rounded-full"></div>
                        )}
                      </div>
                      <span className="ml-2 font-bold ">
                        Add new shipping address
                      </span>
                    </label>
                  </div>
                ) : (
                  <div className="h-10">
                    <label className="inline-flex items-center">
                      <div
                        className={`w-5 h-5 rounded-full bg-white flex items-center justify-center border-fuchsia-700 border-2 ${
                          selectedOption === "select"
                            ? "border-fuchsia-700 border-2"
                            : ""
                        }`}
                        onClick={handleOptionChange}
                      >
                        {selectedOption === "select" && (
                          <div className="h-3 w-3 bg-gradient-to-r from-[#C83B62] to-[#7F35CD] rounded-full"></div>
                        )}
                      </div>
                      <span className="ml-2 font-bold ">Create an account</span>
                    </label>
                  </div>
                )}
              </div>
            </div>
            {/* shipping Information  */}
            <div>
              <div className="px-7">
                {hasDefaultAddress ? (
                  <>
                    <div className="">
                      <p className="text-base text-gray-500 mb-5">
                        Shipping Address
                      </p>
                      <form className="grid grid-cols-1 lg:grid-cols-2 lg:gap-7 gap-5  w-full pb-10 ">
                        <CustomInput
                          label="First Name"
                          name="firstName"
                          type="text"
                          placeholder="Enter First Name"
                        />
                        <CustomInput
                          label="Last Name"
                          name="lastName"
                          type="text"
                          placeholder="Enter Last Name"
                        />
                        <CustomInput
                          label="Street Address"
                          name="streetAddress"
                          type="text"
                          placeholder="Your Address"
                        />
                        <CustomInput
                          label="City"
                          name="state"
                          type="text"
                          placeholder="Your City"
                        />
                        <CustomInput
                          label="Country / Region"
                          name="country"
                          type="text"
                          placeholder="Your Country"
                        />
                        <CustomInput
                          label="Company Name (optional)"
                          type="text"
                          placeholder="Enter Company Name"
                          value={""}
                        />
                        <CustomInput
                          label="Zip Code"
                          name="zipCode"
                          type="text"
                          placeholder="Your Zipcode"
                        />
                        <CustomInput
                          label="Phone Number"
                          name="phoneNumber"
                          type="text"
                          placeholder="Phone Number"
                        />
                      </form>
                      <div className="pb-3">
                        <label className="inline-flex items-center">
                          <div
                            className={`w-5 h-5 rounded-full bg-white flex items-center justify-center border-fuchsia-700 border-2 ${
                              selectedOption === "select"
                                ? "border-fuchsia-700 border-2"
                                : ""
                            }`}
                            onClick={handleOptionChange}
                          >
                            {selectedOption === "select" && (
                              <div className="h-3 w-3 bg-gradient-to-r from-[#C83B62] to-[#7F35CD] rounded-full"></div>
                            )}
                          </div>
                          <span className="ml-2 font-bold ">
                            Use as default address
                          </span>
                        </label>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="">
                      <p className="text-base text-gray-500 mb-5">
                        Shipping Address
                      </p>
                      <form className="grid grid-cols-1 lg:grid-cols-2 lg:gap-7 gap-5  w-full pb-10 ">
                        <CustomInput
                          label="First Name"
                          name="firstName"
                          type="text"
                          placeholder=""
                          value={defaultAddress?.firstName}
                        />
                        <CustomInput
                          label="Last Name"
                          name="lastName"
                          type="text"
                          placeholder=""
                          value={defaultAddress?.lastName}
                        />
                        <CustomInput
                          label="Street Address"
                          name="streetAddress"
                          type="text"
                          placeholder=""
                          value={defaultAddress?.streetAddress}
                        />
                        <CustomInput
                          label="City"
                          name="state"
                          type="text"
                          placeholder=""
                          value={defaultAddress?.state}
                        />
                        <CustomInput
                          label="Country / Region"
                          name="country"
                          type="text"
                          placeholder=""
                          value={defaultAddress?.country}
                        />
                        <CustomInput
                          label="Company Name (optional)"
                          type="text"
                          placeholder="Enter Company Name"
                          value={""}
                        />
                        <CustomInput
                          label="Zip Code"
                          name="zipCode"
                          type="text"
                          placeholder=""
                          value={defaultAddress?.zipCode}
                        />
                        <CustomInput
                          label="Phone Number"
                          name="phoneNumber"
                          type="text"
                          placeholder=""
                          value={defaultAddress?.phoneNumber}
                        />
                      </form>
                      <div className="pb-3">
                        <label className="inline-flex items-center">
                          <div
                            className={`w-5 h-5 rounded-full bg-white flex items-center justify-center border-fuchsia-700 border-2 ${
                              selectedOption === "select"
                                ? "border-fuchsia-700 border-2"
                                : ""
                            }`}
                            onClick={handleOptionChange}
                          >
                            {selectedOption === "select" && (
                              <div className="h-3 w-3 bg-gradient-to-r from-[#C83B62] to-[#7F35CD] rounded-full"></div>
                            )}
                          </div>
                          <span className="ml-2 font-bold ">
                            Use as default address
                          </span>
                        </label>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          {/* return button */}

          <div className="hidden lg:block md:block w-max mt-8">
            <ReturnToCardButton />
          </div>
        </div>

        {/* total order card */}
        <div className="w-full md:w-4/12 lg:w-4/12">
          {/* <PrintingRequestTotalOrder /> */}
          <PringtingRequestOrderCard
            buttonText={"Continue to Payment"}
            href={"/printing-request/payment"}
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
