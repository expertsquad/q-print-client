import ProductView from "@/components/ProductView/ProductView";

const page = ({ params }: any) => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <ProductView id={params?.id} />
    </div>
  );
};

export default page;
