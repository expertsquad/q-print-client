"use client";
import CustomInput from "../shared/CustomInput";
import { useAddShippingAddressMutation } from "@/redux/features/user/user";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setShippingData } from "@/redux/features/user/shippingAddressSlice";

const ShippingAddress = () => {
  const [addShippingInfo] = useAddShippingAddressMutation();
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.updateShippingInfo);

  const handleUpdateShippingInfo = async (event: any) => {
    event.preventDefault();

    try {
      const res = await addShippingInfo({ data: data, id: data?._id });
    } catch (err: any) {
      console.log(err.errorMessages);
    }
  };

  return (
    <div>
      <h1 className="text-black text-xl mb-5 md:mb-8 lg:mb-8 ">
        Shipping Information {}
      </h1>
      <form onSubmit={handleUpdateShippingInfo}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
          <CustomInput
            label="Country"
            type="text"
            name="country"
            value={data?.country}
            placeholder={""}
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
          <span className="main-bg-color px-5 py-1.5 text-white rounded-md">
            Update
          </span>
        </button>
      </form>
    </div>
  );
};

export default ShippingAddress;
