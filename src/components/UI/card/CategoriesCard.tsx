"use client";
import { categories } from "@/constants";
import { useGetCategoryQuery } from "@/redux/features/category/categories";

interface ISubmenu {
  title: string;
  url: string;
}

interface ICategory {
  title: string;
  url: string;
  submenus: ISubmenu[];
}

const CategoriesCard = () => {
  // <== Get Category & SubCategory ==>
  const { data } = useGetCategoryQuery(undefined);

  return (
    <ul className="menu rounded-box shadow-md mt-5 ">
      <p className="pb-4 border-b px-4 text-[#00000066] font-semibold text-base ">
        CATEGORIES
      </p>
      {data?.data?.map((category: any) => (
        <li
          className="text-[#475156] text-base cursor-pointer"
          key={category?._id}
        >
          <details>
            <summary>{category?.categoryName}</summary>
            <ul className="text-[#475156] text-base cursor-pointer">
              {category?.subcategories?.map((subcategory: any) => (
                <li key={subcategory?.subcategoryId}>
                  <a href="">{subcategory?.subcategoryName}</a>
                </li>
              ))}
            </ul>
          </details>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesCard;
