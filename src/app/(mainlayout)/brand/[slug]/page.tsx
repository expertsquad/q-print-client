import BrandLeftSideWidget from "@/components/brand/BrandLeftSideWidget";
import CategoryGridProductView from "@/components/CategoryViewPage/CategoryGridProductView";
import CategoryLeftSideWidget from "@/components/CategoryViewPage/CategoryLeftSideWidget";
import React from "react";

const BrandViewPage = ({ params }: { params: { slug: string } }) => {
  console.log(params?.slug?.length, "from Brand Page");
  return (
    <section className="flex gap-5 max-w-[1280px] mx-auto">
      {/* category filter and widget start */}
      <div className=" hidden md:block   ">
        <BrandLeftSideWidget />
      </div>

      {/* product grid view started */}
      <section>
        <CategoryGridProductView />
      </section>
    </section>
  );
};

export default BrandViewPage;
