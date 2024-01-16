const FeaturedProducts = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-black [font-size:_clamp(1em,5vw,1.6em)] font-bold">
          FEATURED PRODUCTS
        </h2>
        <p className="text-gray-500 [font-size:_clamp(0.9em,5vw,1em)] ">
          Visit our shop to see amazing creations from our designers
        </p>

        {/* tabs start here */}
        <div role="tablist" className="tabs ">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Tab 1"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            Tab content 1
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Tab 2"
            checked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            Tab content 2
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Tab 3"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            Tab content 3
          </div>
        </div>
        {/* tabs end here */}
      </div>
    </section>
  );
};

export default FeaturedProducts;
