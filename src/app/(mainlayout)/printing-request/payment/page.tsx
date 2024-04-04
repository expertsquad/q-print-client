"use client";
import BillingAddress from "@/components/PrintingRequest/BillingAddress";
import EditButton from "@/components/PrintingRequest/EditButton";
import PaymentMethod from "@/components/PrintingRequest/PaymentMethod";
import PringtingRequestOrderCard from "@/components/PrintingRequest/PringtingRequestOrderCard";
import PrintingRequestTotalOrder from "@/components/PrintingRequest/PrintingRequestTotalOrder";
import TotalOrderCard from "@/components/UI/card/TotalOrderCard";
import { IconMail } from "@tabler/icons-react";
import { IconPhone } from "@tabler/icons-react";
import { IconMapPin } from "@tabler/icons-react";

const Payment = () => {
  return (
    <section className="lg:max-w-[1280px] w-full mx-auto  mb-7 ">
      <div className="mb-7">
        <h3 className="[font-size:_clamp(1.2em,4vw,1.8em)] font-bold">
          Payment
        </h3>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row gap-7 justify-between">
        {/* contact email phone number  */}

        <div className="w-full md:w-8/12  border rounded-lg  pt-5 ">
          {/* email */}
          <div className="   px-5 md:px-10">
            <div className="flex items-center justify-start  pb-5 border-b gap-1">
              <div className="text-gray-500 w-3/12 md:w-2/12  ">Contact </div>
              <div className="flex  gap-5 flex-col md:flex-row lg-flex-row w-7/12 md:w-8/12 justify-start   text-sm md:text-base  ">
                {/* email and phone number start */}
                <div className="flex justify-start items-center gap-2 ">
                  <div>
                    {" "}
                    <IconMail className="text-gray-400 md:w-5 md:h-5 h-4 w-4" />
                  </div>
                  <p>zayed120@gmail.com</p>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <div>
                    <div>
                      {" "}
                      <IconPhone className="text-gray-400 md:w-5 md:h-5 h-4 w-4" />
                    </div>
                  </div>
                  <p>01612849451</p>
                </div>
                {/* email and phone number start */}
              </div>
              <div className="w-2/12">
                <EditButton />
              </div>
            </div>
          </div>

          {/* shipping  */}
          <div className="flex items-center justify-start pt-5 px-5 md:px-10 border-b w-full pb-10 gap-1 ">
            <div className="text-gray-500 w-3/12 md:w-2/12  ">Ship to </div>
            <div className="flex gap-5 w-7/12 md:w-8/12">
              <div className="flex justify-start items-center gap-2">
                <div>
                  {" "}
                  <IconMapPin className="text-gray-400 md:w-5 md:h-5 h-4 w-4" />{" "}
                </div>
                <p className="w-/12 line-clamp-3 text-sm md:text-base">
                  Noakhali Chaprashirhat Road No. 13/x, House no. 1320/C, Flat
                  No. 5D
                </p>
              </div>
            </div>
            <div className="w-2/12 ">
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
          <PringtingRequestOrderCard
            buttonText={"Place Order"}
            href={"order-track"}
          />
        </div>
      </div>
    </section>
  );
};

export default Payment;
