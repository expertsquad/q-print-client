import { formatDate } from "@/constants/formatDate";
import { IconTruckDelivery } from "@tabler/icons-react";

type PrintingRequestOrderTrackTopProps = {
  orderId: string;
  createdAt: string;
};
const PrintingRequestOrderTrackTop = ({
  orderId,
  createdAt,
}: PrintingRequestOrderTrackTopProps) => {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-black text-opacity-70 text-xl md:text-3xl font-semibold">
          Order ID: {orderId}
        </h2>
      </div>
      <div className="flex md:flex-row flex-col md:items-center gap-x-1 flex-wrap mb-7">
        <div className="flex items-center whitespace-nowrap">
          <span>Order Date: </span>
          <span className="mx-1">{formatDate(createdAt)}</span>
        </div>
        <span className="hidden md:block">|</span>
        <div className="flex items-center whitespace-nowrap text-[#12B76A]">
          <IconTruckDelivery stroke={1} />

          <span> Estimated Delivery: </span>
          <span>Feb 20, 2024</span>
        </div>
      </div>
      <hr className="bg-black opacity-10 h-[2px] hidden md:block" />
    </div>
  );
};

export default PrintingRequestOrderTrackTop;
