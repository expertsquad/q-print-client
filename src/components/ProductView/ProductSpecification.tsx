// Jaker Hossain
//Product View page product specification
import { productViewSpecification } from "@/constants";

const ProductSpecification = () => {
  return (
    <div>
      <div className="border rounded-lg">
        {productViewSpecification.map((category) => (
          <div key={category._id}>
            <h2 className="main-text-color [font-size:_clamp(16px,4vw,20px)] py-2 pl-4 border-b-[1px]">
              {category.title}
            </h2>
            <div className="">
              {category.specifications.map((spec) => (
                <div
                  key={spec._id}
                  className="flex justify-between items-center border-b"
                >
                  <h6 className="bg-[#F8F8F8] py-2 pl-4 [font-size:_clamp(13px,2vw,15px)] w-36 md:w-60 ">
                    {spec.name}
                  </h6>{" "}
                  <p className="w-full [font-size:_clamp(13px,5vw,15px)] text-wrap pl-5">
                    {spec.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSpecification;
