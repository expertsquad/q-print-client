import { IconChevronRight } from "@tabler/icons-react";

import NavigateItem from "./NavigateItem";
import { allCategoriesMenu } from "@/constants";
import MenuArrowIcon from "@/assets/svgIcons/MenuArrowIcon";

const Sidebar = () => {
  return (
    <div className="hidden md:flex">
      <div className="flex items-center gap-7">
        <div className="group relative cursor-pointer">
          <div className="bg-gradient-to-l from-[#c83b621a] to-[#7f35cd1a] py-3 px-4 rounded-3xl group flex items-center justify-between gap-2.5 group-open:bg-slate-900 ">
            <span className="menu-hover text-base font-medium main-text-color ">
              All Categories
            </span>
            <span className="group-hover:rotate-[-deg] rotate-[-90deg] main-text-color">
              <MenuArrowIcon />
            </span>
          </div>

          <div className="absolute z-50 w-64 bg-white  rounded-lg shadow-xl hidden group-hover:block">
            {allCategoriesMenu.map((item, index) => (
              <div key={index} className="group/item relative cursor-pointer">
                <div className="group flex items-center justify-between my-2 py-1 md:mx-2 hover:bg-gray-200 px-4 ">
                  <div>
                    <span className="menu-hover text-black text-opacity-70 text-sm hover:font-medium">
                      {item.categoryName}
                    </span>
                  </div>
                  <span className="group-hover/item:rotate-90 text-black text-opacity-70 hover:font-medium">
                    <IconChevronRight height={20} width={20} />
                  </span>
                </div>
                <div
                  className={`absolute bg-white shadow-md rounded-md right-[-148px] top-0 invisible group-hover/item:visible p-2`}
                >
                  {item.subcategory.map((subItem, index) => (
                    <div
                      key={index}
                      className="cursor-pointer hover:bg-gray-200"
                    >
                      <div className=" items-center justify-between my-2 py-1  md:mx-2">
                        <span className="menu-hover text-black text-opacity-70 text-sm">
                          {subItem.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <NavigateItem />
      </div>
    </div>
  );
};

export default Sidebar;
