import { productViewSpecification } from "@/constants";

const ProductSpecification = () => {
  return (
    <div>
      <h2 className="text-[18px] md:text-[24px] font-semibold">
        Specification
      </h2>
      <div className="border rounded-lg">
        {productViewSpecification.map((category) => (
          <div key={category._id}>
            <h2 className="main-text-color [font-size:_clamp(16px,4vw,20px)] py-2 pl-4 border-b-[1px]">
              {category.title}
            </h2>
            <ul className="">
              {category.specifications.map((spec) => (
                <li
                  key={spec._id}
                  className="flex justify-between bg-slate-400 mb-2"
                >
                  <h6>{spec.name}:</h6> {spec.description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSpecification;
