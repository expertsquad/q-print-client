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
        <li
          key={i}
          className="hover:bg-gradient-to-r from-[#C83B62] to-[#7F35CD] hover:text-transparent hover:bg-clip-text"
        >
          <details>
            <summary>{category?.title}</summary>
            <ul>
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
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
