"use client";
import BillingAddress from "@/components/PrintingRequest/BillingAddress";
import EditButton from "@/components/PrintingRequest/EditButton";
import PaymentMethod from "@/components/PrintingRequest/PaymentMethod";
import ShoppingCartTotalItems from "@/components/UI/card/ShoppingCartTotalItems";
import { resetCart } from "@/redux/features/cart/productCartSlice";
import { useOnlineOrderPostMutation } from "@/redux/features/online-order/online-orderApi";
import {
  useAddShippingAddressMutation,
  useGetUserAddressQuery,
  useGetUserQuery,
} from "@/redux/features/user/user";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { IconMail } from "@tabler/icons-react";
import { IconPhone } from "@tabler/icons-react";
import { IconMapPin } from "@tabler/icons-react";
import { error } from "console";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const Payment = () => {
  const [loading, setLoading] = useState(false);

  // <== Get User Personal Information ==>
  const { data: personalInformation } = useGetUserQuery("");
  // getting default address
  const { data: address, isLoading } = useGetUserAddressQuery(`isDefault=true`);
  //cart items
  const { products } = useAppSelector((state) => state.productCartSlice);
  // shippinng and billing
  const data = useAppSelector((state) => state.printingRequestOrder);
  //if user select new shipping address and make it default
  const [addShippingInfo] = useAddShippingAddressMutation();
  // order mutation
  const [onlineOrder] = useOnlineOrderPostMutation();

  const dispatch = useAppDispatch();
  const router = useRouter();

  // zip code string to number
  const shippingAddress = {
    ...data?.shippingAddress,
    zipCode: parseInt(data?.shippingAddress?.zipCode),
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const value = {
      orderItems: products,
      shippingAddress:
        data?.shippingAddress?.oldAddress === false
          ? shippingAddress
          : address?.data[0],
      payment: data?.payment,
    };

    try {
      // updating shipping address
      if (
        data?.shippingAddress?.oldAddress === false &&
        data?.shippingAddress?.isDefault === true
      ) {
        const res = await addShippingInfo({ data: shippingAddress });
        console.log(res);
      }
      const res = await onlineOrder(value);
      console.log(res);
      if ("data" in res) {
        if (res?.data?.data?.payment?.paymentMethod === "COD") {
          toast.success((res as { data: any }).data.message);
          router.push(`/thank-you/${res?.data?.data?._id}`);
        } else {
          router.push(`${res?.data?.data?.resultObj?.payUrl}`);
        }
        dispatch(resetCart());
      }

      if ("error" in res) {
        toast.error((res as { error: any }).data.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className={`${
        loading && "opacity-50 pointer-events-none"
      } "lg:max-w-[1280px] w-full mx-auto  mb-7" `}
    >
      <div className="mb-7">
        <h3 className="[font-size:_clamp(1.2em,4vw,1.8em)] font-bold">
          Payment
        </h3>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row gap-7 justify-between">
        {/* contact email phone number  */}

        <div className="w-full md:w-8/12  border rounded-lg  pt-5 ">
          {/*== email ==*/}
          <div className="flex items-center justify-start pt-5 px-5 md:px-10 border-b w-full pb-10 gap-1">
            <span className="text-gray-500 w-3/12 md:w-2/12">Contact</span>
            <div className="flex items-center justify-start pb-5 border-b gap-1">
              <div className="flex flex-col lg:gap-5 lg:flex-row w-7/12 md:w-8/12 justify-start text-sm md:text-base">
                <div className="flex justify-start items-center gap-2">
                  <IconMail stroke={1} width={22} height={22} />
                  <span>{personalInformation?.data?.email}</span>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <IconPhone stroke={1} width={22} height={22} />
                  <span>{personalInformation?.data?.phoneNumber}</span>
                </div>
              </div>
            </div>
          </div>
          {/*== shipping to ==*/}

          <div className="flex items-center justify-start pt-5 px-5 md:px-10 border-b w-full pb-10 gap-1">
            <span className="text-gray-500 w-3/12 md:w-2/12">Ship to</span>
            <div className="flex w-7/12 md:w-8/12 justify-start items-center gap-1">
              <span>
                <IconMapPin width={22} height={22} stroke={1} />
              </span>
              <span className="w-/12 line-clamp-3 text-sm md:text-base">
                {data?.shippingAddress?.streetAddress
                  ? data?.shippingAddress?.streetAddress
                  : address?.data[0]?.streetAddress}
              </span>
            </div>
            <div className="w-2/12">
              <EditButton />
            </div>
          </div>

          {/* billing address  */}
          <div className=" pt-10   px-5 md:px-10">
            <div className=" pb-5 border-b">
              <div className="text-gray-500 ">Billing Address </div>
              <div>
                <BillingAddress />
              </div>
            </div>
          </div>
          {/* Payment Method */}
          <div className=" py-7   px-5 md:px-10">
            <div className=" pb-5 ">
              <div className="text-gray-500 ">Payment Method </div>
              <div>
                <PaymentMethod />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-4/12 ">
          <ShoppingCartTotalItems handleSubmit={handleSubmit} />
        </div>
      </div>
    </section>
  );
};

export default Payment;
