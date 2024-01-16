import DealOfTheDay from "@/components/DealOfTheDay/DealOfTheDay";
import Carousel from "@/components/carousel/Carousel";
import Hero from "@/components/hero/Hero";

const Home = () => {
  return (
    <main className="max-w-[1280px] mx-auto">
      <Hero />
      <div className="mb-36">
        <Carousel />
      </div>
      <DealOfTheDay />
    </main>
  );
};

export default Home;
