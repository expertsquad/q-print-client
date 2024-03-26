import OrderTrack from "@/components/OrderTrack/OrderTrack";

const page = ({ params }: any) => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <OrderTrack id={params?.id} />
    </div>
  );
};

export default page;
