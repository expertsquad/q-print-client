import OrderDetailsCard from "@/components/PrintingRequest/OrderDetailsCard";
import PrintingOrderPlacesTop from "@/components/PrintingRequest/PrintingOrderPlacesTop";
import NeedHelp from "@/components/UI/card/NeedHelp";

const OrderPlaces = ({ params }: { params: string }) => {
  return (
    <section className="lg:max-w-[700px] w-full mx-auto  mb-7">
      <PrintingOrderPlacesTop id={params?.id} />
      <OrderDetailsCard />
      <NeedHelp />
    </section>
  );
};

export default OrderPlaces;
