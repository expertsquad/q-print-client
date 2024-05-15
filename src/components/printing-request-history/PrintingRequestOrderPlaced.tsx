import PringtingOrderHistoryTable from "./PringtingOrderHistoryTable";
import OrderHistorySkeleton from "@/components/shared/Skeleton/OrderHistorySkeleton";

const PrintingRequestOrderPlaced = ({ printingReqData, isLoading }: any) => {
  console.log(printingReqData, "From printing page");
  return (
    <div>
      {isLoading ? (
        <div>
          <OrderHistorySkeleton />
        </div>
      ) : (
        printingReqData &&
        printingReqData.map((element: any) => (
          <div key={element?._id}>
            <PringtingOrderHistoryTable
              totalPrice={element?.totalPayable}
              orderId={element?.orderId}
              createdAt={element?.createdAt}
              orderStatus={element?.orderStatus?.status}
              quantity={element?.totalQuantity}
              paperSize={element?.paperSize}
              paperType={element?.paperType}
              printingMode={element?.printingColorMode}
              attachment={element?.printingRequestFile}
              unit={element?.unit}
              id={element?._id}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default PrintingRequestOrderPlaced;
