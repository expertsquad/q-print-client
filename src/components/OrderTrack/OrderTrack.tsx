import OrderTrackTop from "./OrderTrackTop";
import OrderDetails from "./OrderDetails";
import OrderedStep from "./OrderedStep";

const OrderTrack = ({ id }: any) => {
  return (
    <div className="">
      <OrderTrackTop id={id} />
      <OrderedStep />
      <OrderDetails id={id} />
    </div>
  );
};

export default OrderTrack;
