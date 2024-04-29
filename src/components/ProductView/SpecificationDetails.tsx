import SpecificationCard from "./SpecificationCard";
import ProductSpecification from "./ProductSpecification";
import ProductReview from "./ProductReview";
import ProductViewSpecMenus from "./ProductViewSpecMenus";

const SpecificationDetails = ({ specification }: any) => {
  return (
    <section>
      <ProductViewSpecMenus />
      {/* == Short Description == */}
      <div
        dangerouslySetInnerHTML={{ __html: specification?.shortDescription }}
      />

      <div className="mt-12">
        <div>
          <h2 className="text-[18px] md:text-[24px] font-semibold mb-7">
            Specification
          </h2>
          <div
            id="specification"
            className="flex justify-between md:gap-7 gap-0 w-full"
          >
            <div id="specification" className="w-full">
              <ProductSpecification
                productSpecification={specification?.specifications}
              />
            </div>
            <div>
              <SpecificationCard specificationCard={specification} />
            </div>
          </div>
        </div>
        {/* == warranty == */}
        <div id="warranty" className="warranty my-14">
          <h2 className="text-[18px] md:text-[24px] font-semibold mb-7">
            Warranty
          </h2>
          <h6 className="main-text-color text-[14px] md:text-[16px] text-wrap">
            {specification?.productName} 2 Year Warranty Support
          </h6>
        </div>
        {/* == Description == */}
        <div id="description" className="description mb-7">
          <h2 className="text-[18px] md:text-[24px] font-semibold mb-7">
            Description
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: specification?.description }}
          />
        </div>
        <div>
          <ProductReview
            productId={specification?._id}
            averageRating={specification?.averageRating}
          />
        </div>
      </div>
    </section>
  );
};

export default SpecificationDetails;
