import BestDeals from "@/components/bestDeals/BestDeals";
import DealOfTheDay from "@/components/DealOfTheDay/DealOfTheDay";
import Carousel from "@/components/carousel/Carousel";
import ShopByCategory from "@/components/ShopCategory/ShopByCategory";
import Hero from "@/components/hero/Hero";
import FeaturedProducts from "@/components/featuredProducts/featuredProducts";
import ExploreNew from "@/components/exploreNew/ExploreNew";

const Home = () => {
  return (
    <main className="max-w-[1280px] mx-auto">
      <Hero />
      <Carousel />
      <ShopByCategory />

      <FeaturedProducts />

      <BestDeals />

      <DealOfTheDay />

      <ExploreNew />
    </main>
  );
};

export default Home;
