import BrandLeftSideWidget from "@/components/brand/BrandLeftSideWidget";
import BrandProductGridView from "@/components/brand/BrandProductGridView";

const BrandViewPage = ({ params }: { params: { slug: string } }) => {
  return (
    <section className="flex gap-5 max-w-[1280px] mx-auto">
      {/* category filter and widget start */}
      <div className="hidden md:block">
        <BrandLeftSideWidget />
      </div>

      {/* product grid view started */}
      <section className="w-full">
        <BrandProductGridView />
      </section>
    </section>
  );
};

export default BrandViewPage;
