import {
  IconPackage,
  IconTruck,
  IconHeartHandshake,
} from "@tabler/icons-react";

const OrderedStep = () => {
  return (
    // <div>
    //   <ul className="steps steps-horizontal w-full">
    //     <li className="step step-[#000]  relative">
    //       <span className="step-icon absolute top-2 z-20">
    //         <IconPackage className="w-6 h-6" />
    //       </span>
    //       Order Placed
    //     </li>
    //     <li className="step step-success">Packaging</li>
    //     <li className="step">To Ship</li>
    //     <li className="step">Order Received</li>
    //     <li data-content="?" className="step step-neutral">
    //       Step 1
    //     </li>
    //     <li
    //       data-content={<IconPackage className="w-6 h-6" />}
    //       className="step step-neutral"
    //     >
    //       Step 1
    //     </li>
    //   </ul>
    // </div>
    <div className="w-full mb-20 py-4">
      <div className="relative flex items-center justify-between w-full">
        <div className="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-gray-300"></div>
        <div className="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-gray-900 transition-all duration-500"></div>
        <div className="relative z-10 grid w-10 h-10 font-bold text-white transition-all duration-300 bg-gray-900 rounded-full place-items-center">
          <IconPackage />
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700">
              Order Placed
            </h6>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              Details about yout account.
            </p>
            I
          </div>
        </div>
        <div className="relative z-10 grid w-10 h-10 font-bold text-white transition-all duration-300 bg-gray-900 rounded-full place-items-center">
          <IconTruck />
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
              Step 2
            </h6>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
              Details about yout account.
            </p>
            iI
          </div>
        </div>
        <div className="relative z-10 grid w-10 h-10 font-bold text-gray-900 transition-all duration-300 bg-gray-300 rounded-full place-items-center">
          <IconHeartHandshake />
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700">
              Step 3
            </h6>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              Details about yout account.
            </p>
            I
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderedStep;
