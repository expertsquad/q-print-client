import TabProductView from "./TabProductView";

const FeaturedProducts = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center w-full my-8 ">
        <h2 className="text-black [font-size:_clamp(1em,5vw,1.6em)] font-bold">
          FEATURED PRODUCTS
        </h2>
        <p className="text-gray-500 [font-size:_clamp(0.9em,5vw,1em)] ">
          Visit our shop to see amazing creations from our designers
        </p>

        {/* tabs start here */}

        {/* tabs end here */}

        <TabProductView />
        {/* Product card start here */}

        {/* Product card end */}
      </div>
    </section>
  );
};

export default FeaturedProducts;
