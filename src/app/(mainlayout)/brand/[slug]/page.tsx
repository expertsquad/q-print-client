import BrandLeftSideWidget from "@/components/brand/BrandLeftSideWidget";
import BrandProductGridView from "@/components/brand/BrandProductGridView";

const BrandViewPage = ({ params }: { params: { slug: string } }) => {
  return (
    <section className="flex gap-5 max-w-[1280px] mx-auto">
      <div className="hidden md:block">
        <BrandLeftSideWidget />
      </div>

      <div className="w-full">
        <BrandProductGridView />
      </div>
    </section>
  );
};

export default BrandViewPage;
