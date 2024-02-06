import TabProductView from "./TabProductView";

const FeaturedProducts = () => {
  return (
    <section className="w-full lg:mt-20 md:mt-20 mt-8">
      <div className="flex flex-col justify-center items-center w-full my-8 ">
        <h2 className="text-black [font-size:_clamp(1em,5vw,1.6em)] font-bold">
          FEATURED PRODUCTS
        </h2>
        <p className="text-gray-500 [font-size:_clamp(0.9em,5vw,1em)] ">
          Visit our shop to see amazing creations from our designers
        </p>

        {/* tabs start here */}
        <TabProductView />

        {/* tabs end here */}
      </div>
    </section>
  );
};

export default FeaturedProducts;
