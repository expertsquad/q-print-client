"use client";
import GlobalModal from "../UI/modal/GlobalModal";
import { useGetProductByIdQuery } from "@/redux/features/products/productsApi";
import QuickViewImage from "./QuickViewImage";
import QuickViewDescription from "./QuickViewDescription";
import ModalCloseBtn from "../shared/ModalCloseBtn";

const QuickProductViewModal = ({ handleCloseModal, showModal, id }: any) => {
  const { data } = useGetProductByIdQuery(id);

  return (
    <div>
      <GlobalModal
        isVisible={showModal}
        onClose={handleCloseModal}
        mainClassName="md:max-w-[850px] h-full md:h-auto w-full"
      >
        <div className=" bg-white p-7 rounded-lg">
          <div className="flex justify-end ">
            <ModalCloseBtn handleClose={handleCloseModal} />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 mb-16 md:gap-3 gap-7">
            <QuickViewImage product={data?.data} />
            <QuickViewDescription product={data?.data} />
          </div>
        </div>
      </GlobalModal>
    </div>
  );
};

export default QuickProductViewModal;
