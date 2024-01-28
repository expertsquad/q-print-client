import BillingAddress from "@/components/PrintingRequest/BillingAddress";
import EditButton from "@/components/PrintingRequest/EditButton";
import PaymentMethod from "@/components/PrintingRequest/PaymentMethod";
import PrintingRequestTotalOrder from "@/components/PrintingRequest/PrintingRequestTotalOrder";
import { IconMail } from "@tabler/icons-react";
import { IconPhone } from "@tabler/icons-react";
import { IconMapPin } from "@tabler/icons-react";

const Payment = () => {
  return (
    <section className="lg:w-[1280px] w-full mx-auto  ">
      <div className="mb-7">
        <h3 className="[font-size:_clamp(1.2em,4vw,1.8em)] font-bold">
          Request for a Printing
        </h3>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row gap-7 justify-between">
        {/* contact email phone number  */}

        <div className="w-full md:w-8/12 lg:w-8/12 border rounded-l-lg  py-5 ">
          {/* email */}
          <div className="   px-5 md:px-10">
            <div className="flex items-center justify-between pb-5 border-b">
              <div className="text-gray-500 ">Contact </div>
              <div className="flex gap-5 flex-col md:flex-row lg-flex-row ">
                <div className="flex justify-center items-center gap-2">
                  <IconMail className="text-gray-400" />{" "}
                  <p>zayed120@gmail.com</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <IconPhone className="text-gray-400" /> <p>01612849451</p>
                </div>
              </div>
              <div>
                <EditButton />
              </div>
            </div>
          </div>

          {/* shipping  */}
          <div className="flex items-center justify-between pt-5 px-5 md:px-10 border-b w-full pb-10 ">
            <div className="text-gray-500">Ship to </div>
            <div className="flex gap-5">
              <div className="flex justify-center items-center gap-2">
                <IconMapPin className="text-gray-400" />{" "}
                <p>
                  Noakhali Chaprashirhat Road No. 13/x, House no. 1320/C, Flat
                  No. 5D
                </p>
              </div>
            </div>
            <div>
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

        <div className="w-full md:w-4/12 lg:w-4/12">
          <PrintingRequestTotalOrder />
        </div>
      </div>
    </section>
  );
};

export default Payment;
