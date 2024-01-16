import BestDeals from "@/components/bestDeals/BestDeals";
import Carousel from "@/components/carousel/Carousel";
import ShopByCategory from "@/components/category/ShopByCategory";
import Hero from "@/components/hero/Hero";

const Home = () => {
  return (
    <main className="max-w-[1280px] mx-auto">
      <Hero />
      <Carousel />
      <ShopByCategory />

      <BestDeals />
    </main>
  );
};

export default Home;
