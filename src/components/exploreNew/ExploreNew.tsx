import React from "react";
import ProductGridView from "../product/ProductGridView";

const ExploreNew = () => {
  return (
    <section className="lg:my-20 md:my-20 my-8">
      <div className="flex items-center justify-center flex-col py-7">
        <small className="[font-size:_clamp(0.9em,4vw,1.1em)] main-text-color ">
          Explore Now
        </small>
        <h3 className="[font-size:_clamp(1em,5vw,1.6em)] font-bold">
          All Products
        </h3>
      </div>

      <ProductGridView />
    </section>
  );
};

export default ExploreNew;
