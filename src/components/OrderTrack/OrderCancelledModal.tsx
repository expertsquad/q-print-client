"use client";
import { IconX } from "@tabler/icons-react";
import GlobalModal from "../UI/modal/GlobalModal";
import { useCancelOrderByStatusMutation } from "@/redux/features/online-order/online-orderApi";
import { useState } from "react";
import ModalCloseBtn from "../shared/ModalCloseBtn";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Spinner from "../shared/Spinner";

const OrderCancelledModal = ({ showModal, setShowModal, orderId }: any) => {
  const [comment, setComment] = useState("");
  const [cancelReason, setCancelReason] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [cancelOrder] = useCancelOrderByStatusMutation(orderId);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOrderCancel = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const cancelledOrderData = {
      id: orderId,
      status: "Cancelled",
      reasonOfCancellation: cancelReason,
      commentOnCancellation: comment,
    };

    try {
      const res = await cancelOrder(cancelledOrderData);
      if ("data" in res) {
        toast.success((res as { data: any }).data.message);
        router.push(`/profile/order-history`);
      }
    } catch (err: any) {
      toast.error(err.error.data.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <button onClick={() => setShowModal(true)}></button>
      <GlobalModal
        isVisible={showModal}
        onClose={handleCloseModal}
        mainClassName="w-full md:w-[600px] h-full md:h-auto"
      >
        <div className=" bg-white p-7 rounded-lg">
          <div className="flex justify-end ">
            <ModalCloseBtn handleClose={handleCloseModal} />
          </div>
          <h4 className="text-black text-opacity-80 text-[18px] font-semibold mb-7 md:mb-11 text-center">
            Cancellation Request
          </h4>

          <form action="" onSubmit={handleOrderCancel}>
            <label
              htmlFor="cancelation reason"
              className="text-black-opacity-70"
            >
              Cancellation Reason
            </label>
            <select
              className={`group w-full border mt-2 py-3 pl-3 rounded-lg outline-none main-text-color mb-7 appearance-none focus:border-main-border-color ${""}`}
              name="cancelation reason"
              id="cancelation reason"
              value={cancelReason}
              onChange={(e) => setCancelReason(e.target.value)}
            >
              {[
                "Select Reason",
                "Change of Mind",
                "Duplicate Order",
                "Change my location",
                "Change / Combine Order",
                "Delivery time is too long",
                "Shipping fees",
                "Change Payment method",
              ].map((opt, index) => (
                <option
                  key={opt}
                  value={opt}
                  selected={index === 0}
                  hidden={index === 0}
                  className="main-text-color dropdown-content:hover:bg-fuchsia-500 hover:text-white"
                >
                  {opt}
                </option>
              ))}
            </select>
            <p>
              {" "}
              <label htmlFor="comments" className="text-black-opacity-70">
                Comments
              </label>
            </p>
            <textarea
              className="border w-full pl-3 pt-3.5 rounded-lg resize-none outline-none focus:border-main-border-color text-black-opacity-70 mt-2"
              name="comments"
              id=""
              cols={30}
              rows={6}
              placeholder="(Comments)"
              maxLength={250}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <span className="text-right text-sm text-black text-opacity-80">
              {comment.length}/250
            </span>
            <button
              type="submit"
              className="main-bg-color text-white w-full py-2 rounded-3xl mt-7 md:mt-11"
            >
              Submit
            </button>
          </form>
        </div>
      </GlobalModal>
    </div>
  );
};

export default OrderCancelledModal;
