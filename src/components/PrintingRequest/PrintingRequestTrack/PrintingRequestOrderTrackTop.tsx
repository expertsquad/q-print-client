import OrderCancelledModal from "@/components/OrderTrack/OrderCancelledModal";
import { formatDate } from "@/constants/formatDate";
import { IconTruckDelivery } from "@tabler/icons-react";
import { useState } from "react";
import PrintingRequestOrderCancelledModal from "./PrintingRequestOrderCancelledModal";

type PrintingRequestOrderTrackTopProps = {
  orderId: string;
  createdAt: string;
  id: string;
  orderedData: any;
};
const PrintingRequestOrderTrackTop = ({
  orderId,
  createdAt,
  id,
  orderedData,
}: PrintingRequestOrderTrackTopProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section>
      <div className="mb-12">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-black text-opacity-70 text-xl md:text-3xl font-semibold">
            Order ID: {orderId}
          </h2>
          {orderedData?.orderStatus?.length <= 2 && (
            <button
              onClick={() => setShowModal(true)}
              className="border main-bg-color text-white font-bold py-1 w-28 rounded-md bg-transparent"
            >
              Cancel
            </button>
          )}
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
      {showModal && (
        <PrintingRequestOrderCancelledModal
          orderId={id}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </section>
  );
};

export default PrintingRequestOrderTrackTop;
