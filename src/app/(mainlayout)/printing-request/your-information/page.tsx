"use client";
import PringtingRequestOrderCard from "@/components/PrintingRequest/PringtingRequestOrderCard";
import ReturnToCardButton from "@/components/PrintingRequest/ReturnToCardButton";
import CustomInput from "@/components/shared/CustomInput";
import { useGetUserQuery } from "@/redux/features/user/user";
import { isLoggedIn } from "@/services/auth.service";
import { IconUser } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

const YourInformation = () => {
  const isUserLoggedIn = isLoggedIn();

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = () => {
    setSelectedOption((prevSelected) =>
      prevSelected === "select" ? null : "select"
    );
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
                  className="grid grid-cols-1 lg:grid-cols-2 lg:gap-7 gap-5  w-full pb-10 border-b"
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

                  {isUserLoggedIn ? (
                    ""
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
                        <span className="ml-2 font-bold ">
                          Create an account
                        </span>
                      </label>
                    </div>
                  )}
                </form>
              </div>
            </div>
            {/* shipping Information  */}
            <div>
              <div className="px-7">
                <div className="">
                  <p className="text-base text-gray-500 mb-5">
                    Shipping Address
                  </p>
                  <form className="grid grid-cols-1 lg:grid-cols-2 lg:gap-7 gap-5  w-full pb-10 ">
                    <CustomInput
                      label="First Name"
                      type="text"
                      placeholder=""
                      value={""}
                    />
                    <CustomInput
                      label="Last Name"
                      type="text"
                      placeholder=""
                      value={""}
                    />
                    <CustomInput
                      label="Street Address"
                      type="text"
                      placeholder=""
                      value={""}
                    />
                    <CustomInput
                      label="City"
                      type="text"
                      placeholder=""
                      value={""}
                    />
                    <CustomInput
                      label="Country / Region"
                      type="text"
                      placeholder=""
                      value={""}
                    />
                    <CustomInput
                      label="Company Name (optional)"
                      type="text"
                      placeholder=""
                      value={""}
                    />
                    <CustomInput
                      label="Zip Code"
                      type="text"
                      placeholder=""
                      value={""}
                    />
                    <CustomInput
                      label="Phone Number"
                      type="text"
                      placeholder=""
                      value={""}
                    />
                  </form>
                </div>
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
