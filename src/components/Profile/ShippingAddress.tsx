import React from "react";

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
            <input
              type="text"
              name="country"
              id="country"
              className="border outline-none block w-full py-3.5 rounded-md px-4"
              value={shippingInformation?.country}
              required
            />
          </div>
          <div className="w-full flex flex-col gap-2.5">
            <label htmlFor="state" className="text-base text-[#1a1a1ab3]">
              State
            </label>
            <input
              type="text"
              name="state"
              id="state"
              className="border outline-none block w-full py-3.5 rounded-md px-4"
              value={shippingInformation?.state}
              required
            />
          </div>
          <div className="w-full flex flex-col gap-2.5">
            <label htmlFor="zip_code" className="text-base text-[#1a1a1ab3]">
              Zip Code
            </label>
            <input
              type="number"
              name="zip_code"
              id="zip_code"
              className="border outline-none block w-full py-3.5 rounded-md px-4"
              value={shippingInformation?.zipCode}
              required
            />
          </div>
          <div className="w-full flex flex-col gap-2.5">
            <label
              htmlFor="company_name"
              className="text-base text-[#1a1a1ab3]"
            >
              Company Name ( Optional )
            </label>
            <input
              type="text"
              name="company_name"
              id="company_name"
              className="border outline-none block w-full py-3.5 rounded-md px-4"
              value="Sopne"
              required
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2.5 mt-5">
          <label htmlFor="streetAddress" className="text-base text-[#1a1a1ab3]">
            Street Address
          </label>
          <input
            type="text"
            name="streetAddress"
            id="streetAddress"
            className="border outline-none block w-full py-3.5 rounded-md px-4"
            value={shippingInformation?.streetAddress}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default ShippingAddress;
