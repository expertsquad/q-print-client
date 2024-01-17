import ProductView from "@/components/ProductView/ProductView";
import ProductViewTop from "@/components/ProductView/ProductViewTop";
import QServices from "@/components/ProductView/QServices";

const page = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <ProductViewTop />
      <ProductView />
      <QServices />
    </div>
  );
};

export default page;
