import BestDeals from "@/components/bestDeals/BestDeals";
import DealOfTheDay from "@/components/DealOfTheDay/DealOfTheDay";
import Carousel from "@/components/carousel/Carousel";
import ShopByCategory from "@/components/ShopCategory/ShopByCategory";
import Hero from "@/components/hero/Hero";

const Home = () => {
  return (
    <main className="max-w-[1280px] mx-auto">
      <Hero />
      <Carousel />
      <ShopByCategory />

      <BestDeals />

      <DealOfTheDay />
    </main>
  );
};

export default Home;
