import React from "react";
import CustomInput from "../shared/CustomInput";

const ShippingAddress = ({ shippingInformation }: any) => {
  return (
    <div>
      <h1 className="text-black text-xl mb-5 md:mb-8 lg:mb-8 ">
        Shipping Information
      </h1>
      <form>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-7 gap-5">
          <div className="w-full flex flex-col gap-2.5">
            <label htmlFor="country" className="text-base text-[#1a1a1ab3]">
              Country
            </label>

            <CustomInput
              type="text"
              name="country"
              value={shippingInformation?.country}
              placeholder=""
            />
          </div>
          <div className="w-full flex flex-col gap-2.5">
            <label htmlFor="state" className="text-base text-[#1a1a1ab3]">
              State
            </label>

            <CustomInput
              type="text"
              name="state"
              value={shippingInformation?.state}
              placeholder=""
            />
          </div>
          <div className="w-full flex flex-col gap-2.5">
            <label htmlFor="zip_code" className="text-base text-[#1a1a1ab3]">
              Zip Code
            </label>

            <CustomInput
              type="text"
              name="zipCode"
              value={shippingInformation?.zipCode}
              placeholder=""
            />
          </div>
          <div className="w-full flex flex-col gap-2.5">
            <label
              htmlFor="company_name"
              className="text-base text-[#1a1a1ab3]"
            >
              Company Name ( Optional )
            </label>
            <CustomInput
              type="text"
              name="companyName"
              // value={shippingInformation?.state}
              placeholder="Company Name"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2.5 mt-5">
          <label htmlFor="streetAddress" className="text-base text-[#1a1a1ab3]">
            Street Address
          </label>
          <CustomInput
            type="text"
            name="streetAddress"
            value={shippingInformation?.streetAddress}
            placeholder=""
          />
        </div>
      </form>
    </div>
  );
};

export default ShippingAddress;
