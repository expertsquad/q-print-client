import CategoryGridProductView from "@/components/CategoryViewPage/CategoryGridProductView";
import CategoryLeftSideWidget from "@/components/CategoryViewPage/CategoryLeftSideWidget";
import React from "react";

const CategoryViewPage = () => {
  return (
    <section className="flex gap-5 max-w-[1280px] mx-auto">
      {/* category filter and widget start */}
      <div>
        <CategoryLeftSideWidget />
      </div>

      {/* product grid view started */}
      <section>
        <CategoryGridProductView />
      </section>
    </section>
  );
};

export default CategoryViewPage;
