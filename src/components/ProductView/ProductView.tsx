import ProductViewTop from "./ProductViewTop";
import QServices from "./QServices";
import ProductViewImage from "./ProductViewImage";
import Specification from "./Specification";

const ProductView = () => {
  return (
    <section className="px-2">
      <div>
        <ProductViewTop />
      </div>
      <div className="">
        <ProductViewImage />
      </div>
      <div>
        <QServices />
      </div>
      <div>
        <Specification />
      </div>
    </section>
  );
};

export default ProductView;
