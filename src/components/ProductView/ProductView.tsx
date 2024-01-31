// Jaker Hossain
//Product View main page
import QServices from "./QServices";
import ProductViewImage from "./ProductViewImage";
import SpecificationDetails from "./SpecificationDetails";
import RelatedProduct from "./RelatedProduct";

const ProductView = () => {
  return (
    <section className="px-2">
      <div className="">
        <ProductViewImage />
      </div>
      <div>
        <QServices />
      </div>
      <div>
        <RelatedProduct />
      </div>
      <div>
        <SpecificationDetails />
      </div>
    </section>
  );
};

export default ProductView;
