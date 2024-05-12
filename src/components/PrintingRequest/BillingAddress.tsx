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
    dispatch(
      setPrintingRequest({
        ...data,
        billingAddress: {
          ...data.billingAddress,
          selectedOption: event.target.value,
        },
      })
    );
  };

  return (
    <div>
      <div className="flex justify-start md:justify-start   gap-7 my-5 flex-col md:flex-row lg:flex-row">
        <label className="inline-flex items-center  ">
          <div
            className={`w-5 h-5 rounded-full bg-white  flex items-center justify-center border-fuchsia-700 border-2 ${
              selectedOption === "sameAsShippingAddress"
                ? "border-fuchsia-700 border-2"
                : ""
            }`}
          >
            {selectedOption === "sameAsShippingAddress" && (
              <div className="h-3 w-3 bg-gradient-to-r from-[#C83B62] to-[#7F35CD] rounded-full"></div>
            )}
          </div>
          <span className="ml-2">Same as shipping address</span>
          <input
            type="radio"
            value="sameAsShippingAddress"
            checked={selectedOption === "sameAsShippingAddress"}
            onChange={handleOptionChange}
            className="hidden"
          />
        </label>

        <label className="inline-flex items-center ">
          <div
            className={`w-5 h-5 rounded-full bg-white  flex items-center justify-center border-fuchsia-700 border-2 ${
              selectedOption === "differentBillingAddress"
                ? "border-fuchsia-700 border-2"
                : ""
            }`}
          >
            {selectedOption === "differentBillingAddress" && (
              <div className="h-3 w-3 bg-gradient-to-r from-[#C83B62] to-[#7F35CD]   rounded-full"></div>
            )}
          </div>
          <span className="ml-2">Use a different billing address</span>
          <input
            type="radio"
            value="differentBillingAddress"
            checked={selectedOption === "differentBillingAddress"}
            onChange={handleOptionChange}
            className="hidden"
          />
        </label>
      </div>
      {selectedOption === "differentBillingAddress" && (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-7 gap-5 w-full">
            <CustomInput
              label="First Name"
              type="text"
              name="firstName"
              inputStyle={
                (data?.billingAddress?.selectedOption ===
                  "differentBillingAddress" &&
                  data?.billingAddress?.firstName === undefined) ||
                data?.billingAddress?.firstName === ""
                  ? "border border-red-500"
                  : " "
              }
              value={data?.billingAddress?.firstName}
              placeholder={"First Name"}
              onChange={(e) =>
                dispatch(
                  setPrintingRequest({
                    ...data,
                    billingAddress: {
                      ...data.billingAddress,
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
              inputStyle={
                (data?.billingAddress?.selectedOption ===
                  "differentBillingAddress" &&
                  data?.billingAddress?.lastName === undefined) ||
                data?.billingAddress?.lastName === ""
                  ? "border border-red-500"
                  : " "
              }
              value={data?.billingAddress?.lastName}
              placeholder={"Last Name"}
              onChange={(e) =>
                dispatch(
                  setPrintingRequest({
                    ...data,
                    billingAddress: {
                      ...data.billingAddress,
                      [e.target.name]: e.target.value,
                    },
                  })
                )
              }
            />
            <CustomInput
              label="Phone Number (Make sure Valid Number)"
              type="number"
              name="phoneNumber"
              inputStyle={
                (data?.billingAddress?.selectedOption ===
                  "differentBillingAddress" &&
                  data?.billingAddress?.phoneNumber === undefined) ||
                data?.billingAddress?.phoneNumber === ""
                  ? "border border-red-500"
                  : " "
              }
              value={data?.billingAddress?.phoneNumber}
              placeholder={"974*****"}
              onChange={(e) =>
                dispatch(
                  setPrintingRequest({
                    ...data,
                    billingAddress: {
                      ...data.billingAddress,
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
              inputStyle={
                (data?.billingAddress?.selectedOption ===
                  "differentBillingAddress" &&
                  data?.billingAddress?.streetAddress === undefined) ||
                data?.billingAddress?.streetAddress === ""
                  ? "border border-red-500"
                  : " "
              }
              value={data?.billingAddress?.streetAddress}
              placeholder="Your Street Address"
              onChange={(e) =>
                dispatch(
                  setPrintingRequest({
                    ...data,
                    billingAddress: {
                      ...data.billingAddress,
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
              inputStyle={
                (data?.billingAddress?.selectedOption ===
                  "differentBillingAddress" &&
                  data?.billingAddress?.state === undefined) ||
                data?.billingAddress?.state === ""
                  ? "border border-red-500"
                  : " "
              }
              value={data?.billingAddress?.state}
              placeholder="Your State"
              onChange={(e) =>
                dispatch(
                  setPrintingRequest({
                    ...data,
                    billingAddress: {
                      ...data.billingAddress,
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
              inputStyle={
                (data?.billingAddress?.selectedOption ===
                  "differentBillingAddress" &&
                  data?.billingAddress?.country === undefined) ||
                data?.billingAddress?.country === ""
                  ? "border border-red-500"
                  : " "
              }
              value={data?.billingAddress?.country}
              placeholder={"Country"}
              onChange={(e) =>
                dispatch(
                  setPrintingRequest({
                    ...data,
                    billingAddress: {
                      ...data.billingAddress,
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
              inputStyle={
                (data?.billingAddress?.selectedOption ===
                  "differentBillingAddress" &&
                  data?.billingAddress?.companyName === undefined) ||
                data?.billingAddress?.companyName === ""
                  ? "border border-red-500"
                  : " "
              }
              value={data?.billingAddress?.companyName}
              placeholder="Company Name"
              onChange={(e) =>
                dispatch(
                  setPrintingRequest({
                    ...data,
                    billingAddress: {
                      ...data.billingAddress,
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
              inputStyle={
                (data?.billingAddress?.selectedOption ===
                  "differentBillingAddress" &&
                  data?.billingAddress?.zipCode === undefined) ||
                data?.billingAddress?.zipCode === ""
                  ? "border border-red-500"
                  : " "
              }
              value={data?.billingAddress?.zipCode}
              placeholder="Your ZipCode"
              onChange={(e) =>
                dispatch(
                  setPrintingRequest({
                    ...data,

                    billingAddress: {
                      ...(data.billingAddress || {}),
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
