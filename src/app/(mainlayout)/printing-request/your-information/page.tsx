"use client";

import PrintingRequestTotalOrder from "@/components/PrintingRequest/PrintingRequestTotalOrder";
import ReturnToCardButton from "@/components/PrintingRequest/ReturnToCardButton";
import { IconUser } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

const YourInformation = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = () => {
    setSelectedOption((prevSelected) =>
      prevSelected === "select" ? null : "select"
    );
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
            {/* click here to login */}
            <Link
              href="/login"
              className="flex items-center justify-center gap-2 border-b py-3 text-base text-gray-800 "
            >
              {" "}
              <IconUser /> <p>Click here to login</p>{" "}
            </Link>

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
                  <div className="w-full flex flex-col gap-2.5">
                    <label htmlFor="user_email" className="text-base ">
                      Email
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      id="user_email"
                      className="border outline-none block w-full py-3.5 rounded-md px-4 "
                      defaultValue="dianne.russell@gmail.com"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2.5">
                    <label
                      htmlFor="user_phone"
                      className="text-base text-[#1a1a1ab3]"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="user_phone"
                      id="user_phone"
                      className="border outline-none block w-full py-3.5 rounded-md px-4"
                      defaultValue="08801835550123"
                      required
                    />
                  </div>
                  {/* create an account */}

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
                      {/* <input
                        type="radio"
                        value="select"
                        checked={selectedOption === "select"}
                        onChange={() => {}} // This prevents default radio button behavior
                        className="hidden"
                      /> */}
                    </label>
                  </div>
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
                    <div className="w-full flex flex-col gap-2.5">
                      <label htmlFor="firstName" className="text-base ">
                        First name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="border outline-none block w-full py-3.5 rounded-md px-4 "
                        defaultValue="Zayed"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2.5">
                      <label htmlFor="lastName" className="text-base ">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="border outline-none block w-full py-3.5 rounded-md px-4"
                        defaultValue="Hossain"
                        required
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2.5">
                      <label htmlFor="address" className="text-base ">
                        Street Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        className="border outline-none block w-full py-3.5 rounded-md px-4 "
                        defaultValue="Noakhali Chaprashirhat Road No. 13/x, House no. 1320/C, Flat No. 5D"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2.5">
                      <label htmlFor="city" className="text-base ">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="border outline-none block w-full py-3.5 rounded-md px-4"
                        defaultValue="Dhaka"
                        required
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2.5">
                      <label htmlFor="country" className="text-base ">
                        Country / Region
                      </label>
                      <input
                        type="text"
                        name="country"
                        id="country"
                        className="border outline-none block w-full py-3.5 rounded-md px-4 "
                        defaultValue="Qater"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2.5">
                      <label
                        htmlFor="companyName"
                        className="text-base text-[#1a1a1ab3]"
                      >
                        Company Name (optional)
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        id="companyName"
                        className="border outline-none block w-full py-3.5 rounded-md px-4"
                        defaultValue="Q-Print"
                        required
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2.5">
                      <label htmlFor="zipCode" className="text-base ">
                        Zip Code
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        id="zipCode"
                        className="border outline-none block w-full py-3.5 rounded-md px-4 "
                        defaultValue="2005"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2.5">
                      <label htmlFor="phoneNumber" className="text-base ">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        className="border outline-none block w-full py-3.5 rounded-md px-4"
                        defaultValue="08801835550123"
                        required
                      />
                    </div>
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
          <PrintingRequestTotalOrder />
        </div>

        <div className="block md:hidden lg:hidden w-full ">
          <ReturnToCardButton />
        </div>
      </div>
    </section>
  );
};

export default YourInformation;
