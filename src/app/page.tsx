import Carousel from "@/components/carousel/Carousel";
import Hero from "@/components/hero/Hero";

const Home = () => {
  return (
    <main className="max-w-[1280px] mx-auto">
      <Hero />
      <div className="w-full">
        <Carousel />
      </div>
    </main>
  );
};

export default Home;
