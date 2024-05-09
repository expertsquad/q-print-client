import PrintingReqOrderDetailsCard from "@/components/PrintingRequest/PrintingReqOrderDetailsCard";
import PrintingOrderPlacesTop from "@/components/PrintingRequest/PrintingOrderPlacesTop";
import NeedHelp from "@/components/UI/card/NeedHelp";

const OrderPlaces = ({ params }: { params: { id: string } }) => {
  return (
    <section className="lg:max-w-[700px] w-full mx-auto mb-7">
      <PrintingOrderPlacesTop id={params.id} />
      <PrintingReqOrderDetailsCard id={params.id} />
      <NeedHelp />
    </section>
  );
};

export default OrderPlaces;
