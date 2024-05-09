import React from "react";
import { IconX } from "@tabler/icons-react";

interface IProps {
  id?: string;
  unit?: string;
  orderId?: string;
  createdAt?: string | any;
  orderStatus?: string;
  paperSize?: {
    height: number;
    width: number;
  };
  paperType?: string;
  printingMode?: string;
  attachment?: string;
  quantity?: number;
  totalPrice?: number;
}

const PrintingRequestOrderedItemsInfo = ({
  unit,
  paperSize,
  paperType,
  printingMode,
  attachment,
  quantity,
  totalPrice,
}: IProps) => {
  return (
    <div className={`rounded-md p-4 md:p-[24px]`}>
      {/* == printing information == */}
      <div className="flex flex-col gap-y-2">
        <div className="flex gap-1.5 items-center">
          <span className="text-black-opacity-80 text-sm">Paper Size:</span>
          <div className="flex items-center gap-0.5 md:font-semibold text-base">
            <span className="text-sm md:text-base">{paperSize?.height}</span>
            <span>
              <IconX width={17} height={17} />
            </span>
            <span className="text-sm md:text-base">{paperSize?.width}</span>
            <span className="text-sm md:text-base">{unit}</span>
          </div>
        </div>
        <div className="flex gap-1.5 items-center">
          <span className="text-sm md:text-base text-black-opacity-80">
            Paper Type:
          </span>
          <span className="text-sm md:text-base md:font-semibold">
            {paperType}
          </span>
        </div>
        <div className="flex gap-1.5 items-center">
          <span className="text-sm md:text-base text-black-opacity-80">
            Printing Mode:
          </span>
          <span className="text-sm md:text-base md:font-semibold">
            {printingMode}
          </span>
        </div>
        <div className="flex gap-1.5 items-center">
          <span className="text-sm md:text-base text-black-opacity-80">
            Attachment:
          </span>
          <span className="text-sm md:text-base line-clamp-2 text-wrap md:font-semibold">
            {attachment}
          </span>
        </div>
      </div>
      <div className="border-t mt-3 pt-3 flex items-center gap-x-2">
        <span>{quantity} Items,</span>
        <span className="font-semibold main-text-color">
          Total: {totalPrice}
          <small> QAR</small>
        </span>
      </div>
    </div>
  );
};

export default PrintingRequestOrderedItemsInfo;
