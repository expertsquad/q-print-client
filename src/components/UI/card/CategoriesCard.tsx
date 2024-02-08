import { categories } from "@/constants";
import React from "react";

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
  return (
    <ul className="menu rounded-box shadow-md mt-5 ">
      <p className="pb-4 border-b px-4 text-[#00000066] font-semibold text-base ">
        CATEGORIES
      </p>
      {categories?.map((category, i: number) => (
        <li className="text-[#475156] text-base cursor-pointer" key={i}>
          <details>
            <summary>{category?.title}</summary>
            <ul className="text-[#475156] text-base cursor-pointer">
              <li>
                <a className="text-[#475156] text-base cursor-pointer">
                  Submenu 1
                </a>
              </li>
              <li>
                <a className="text-[#475156] text-base cursor-pointer">
                  Submenu 2
                </a>
              </li>
              <li></li>
            </ul>
          </details>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesCard;
