import CategoryGridProductView from "@/components/CategoryViewPage/CategoryGridProductView";
import CategoryLeftSideWidget from "@/components/CategoryViewPage/CategoryLeftSideWidget";
import React from "react";

const CategoryViewPage = () => {
  return (
    <section className="flex gap-5 max-w-[1280px] mx-auto">
      <div className="hidden md:block">
        <CategoryLeftSideWidget />
      </div>

      <section className="w-full">
        <CategoryGridProductView />
      </section>
    </section>
  );
};

export default CategoryViewPage;
