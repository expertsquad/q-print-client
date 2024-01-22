import { FC } from "react";
import {
  IconPackage,
  IconTruck,
  IconHeartHandshake,
  IconBook2,
} from "@tabler/icons-react";

interface StepProps {
  icon: JSX.Element;
  title: string;
  date: string;
  status?: "orderPlaced" | "packaging" | "orderShipped" | "orderReceived";
}

const Step: FC<StepProps> = ({ icon, title, date, status }) => {
  const isEvenStep = status === "packaging";
  // ||
  // status === "orderReceived" ||
  // status === "orderPlaced" ||
  // status === "orderShipped";

  return (
    <div
      className={`relative z-10 grid w-10 h-10 font-bold text-white transition-all duration-300 rounded-full place-items-center border border-dashed 
      ${
        isEvenStep ? "bg-white text-fuchsia-500" : "bg-fuchsia-500 text-white"
      }`}
    >
      <span>{icon}</span>
      <div className="absolute -bottom-[3rem] w-max text-center">
        <h6 className="text-[14px] md:text-[18px] text-black">{title}</h6>
        <p className="text-[12px] antialiased font-normal text-black opacity-50">
          {date}
        </p>
      </div>
    </div>
  );
};

const OrderedStep: FC = () => (
  <div className="md:w-full mb-20 py-4">
    <div className="relative flex items-center justify-between w-full">
      <div className="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-gray-300"></div>
      <div className="absolute left-0 top-2/4 h-1 w-full -translate-y-2/4 bg-fuchsia-100 transition-all duration-500"></div>

      <Step
        icon={<IconBook2 />}
        title="Order Placed"
        date="12 Dec 2024"
        status="orderPlaced"
      />
      <Step
        icon={<IconPackage />}
        title="Packaging"
        date="12 Dec 2024"
        status="packaging"
      />
      <Step
        icon={<IconTruck />}
        title="Order Shipped"
        date="12 Dec 2024"
        status="orderShipped"
      />
      <Step
        icon={<IconHeartHandshake />}
        title="Order Received"
        date="12 Dec 2024"
        status="orderReceived"
      />
    </div>
  </div>
);

export default OrderedStep;
