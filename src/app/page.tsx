import BestDeals from "@/components/bestDeals/BestDeals";
import DealOfTheDay from "@/components/DealOfTheDay/DealOfTheDay";
import Carousel from "@/components/carousel/Carousel";
import ShopByCategory from "@/components/ShopCategory/ShopByCategory";
import Hero from "@/components/hero/Hero";

import ExploreNew from "@/components/exploreNew/ExploreNew";
import NewProduct from "@/components/newProduct/NewProduct";
import FeaturedProducts from "@/components/featuredProducts/FeaturedProducts";

const Home = () => {
  return (
    <main className="max-w-[1280px] mx-auto">
      <Hero />
      <Carousel />

      <ShopByCategory />

      <FeaturedProducts />

      <BestDeals />

      <DealOfTheDay />
      <NewProduct />

      <ExploreNew />
    </main>
  );
};

export default Home;
