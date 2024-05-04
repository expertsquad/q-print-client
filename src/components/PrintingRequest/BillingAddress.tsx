"use client";
import { setPrintingRequest } from "@/redux/features/printing-request/postPrintingRequestSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import React, { useState } from "react";
import CustomInput from "../shared/CustomInput";

const BillingAddress = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const data = useAppSelector((state) => state.printingRequestOrder);
  const dispatch = useAppDispatch();

  // handler herea

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div className="flex justify-start md:justify-start   gap-7 my-5 flex-col md:flex-row lg:flex-row">
        <label className="inline-flex items-center  ">
          <div
            className={`w-5 h-5 rounded-full bg-white  flex items-center justify-center border-fuchsia-700 border-2 ${
              selectedOption === "option1" ? "border-fuchsia-700 border-2" : ""
            }`}
          >
            {selectedOption === "option1" && (
              <div className="h-3 w-3 bg-gradient-to-r from-[#C83B62] to-[#7F35CD] rounded-full"></div>
            )}
          </div>
          <span className="ml-2">Same as shipping address</span>
          <input
            type="radio"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
            className="hidden"
          />
        </label>

        <label className="inline-flex items-center ">
          <div
            className={`w-5 h-5 rounded-full bg-white  flex items-center justify-center border-fuchsia-700 border-2 ${
              selectedOption === "option2" ? "border-fuchsia-700 border-2" : ""
            }`}
          >
            {selectedOption === "option2" && (
              <div className="h-3 w-3 bg-gradient-to-r from-[#C83B62] to-[#7F35CD]   rounded-full"></div>
            )}
          </div>
          <span className="ml-2">Use a different billing address</span>
          <input
            type="radio"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
            className="hidden"
          />
        </label>
      </div>
      {selectedOption === "option2" && (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-7 gap-5 w-full">
            <CustomInput
              label="First Name"
              type="text"
              name="firstName"
              value={data?.shippingAddress?.firstName}
              placeholder={"First Name"}
              onChange={(e) =>
                dispatch(
                  setPrintingRequest({
                    ...data,
                    shippingAddress: {
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
              value={data?.shippingAddress?.lastName}
              placeholder={"Last Name"}
              onChange={(e) =>
                dispatch(
                  setPrintingRequest({
                    ...data,
                    shippingAddress: {
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
              value={data?.shippingAddress?.phoneNumber}
              placeholder={"Phone Number"}
              onChange={(e) =>
                dispatch(
                  setPrintingRequest({
                    ...data,
                    shippingAddress: {
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
              value={data?.shippingAddress?.streetAddress}
              placeholder="Your Street Address"
              onChange={(e) =>
                dispatch(
                  setPrintingRequest({
                    ...data,
                    shippingAddress: {
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
              value={data?.shippingAddress?.state}
              placeholder="Your State"
              onChange={(e) =>
                dispatch(
                  setPrintingRequest({
                    ...data,
                    shippingAddress: {
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
              value={data?.shippingAddress?.country}
              placeholder={"Country"}
              onChange={(e) =>
                dispatch(
                  setPrintingRequest({
                    ...data,
                    shippingAddress: {
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
              value={data?.shippingAddress?.companyName}
              placeholder="Company Name"
              onChange={(e) =>
                dispatch(
                  setPrintingRequest({
                    ...data,
                    shippingAddress: {
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
              value={data?.shippingAddress?.zipCode}
              placeholder="Your ZipCode"
              onChange={(e) =>
                dispatch(
                  setPrintingRequest({
                    ...data,

                    shippingAddress: {
                      ...(data.shippingAddress || {}),
                      [e.target.name]: e.target.value,
                    },
                  })
                )
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BillingAddress;
