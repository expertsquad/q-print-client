import Link from "next/link";
import React from "react";

const Specification = () => {
  const menus = ["Specification", "Warranty", "Description", "Customer Review"];
  return (
    // <section>
    //   <div className="overflow-x-scroll no-scrollbar">
    //     {menus.map((item) => (
    //       <Link key={item} href={`/${item.toLocaleLowerCase()}`}>
    //         {item}
    //       </Link>
    //     ))}
    //   </div>
    // </section>
    <section>
      <nav className="overflow-x-scroll no-scrollbar">
        <ul className="flex my-14">
          {menus.map((menu) => (
            <li
              key={menu}
              className="list-none flex flex-col items-center gap-3.5 group"
            >
              <Link href={`#${menu}`}>
                <p
                  id={`${menu}`}
                  className="text-sm lg:text-lg font-semibold hover:text-red-regular text-[#000000b3] line-clamp-1"
                >
                  {menu.replace(/-/g, " ")} {/* Convert hyphen to space */}
                </p>
              </Link>
              <span
                id={`${menu}_after`}
                className="md:w-40 w-24 h-[1px] invisible bg-red-regular"
              ></span>
            </li>
          ))}
        </ul>
      </nav>
      <h3>Specification</h3>
      {/* --small card-- */}
      <div className="card shadow-xl p-3">
        <div className="card-body">
          <h2 className="[font-size:_clamp(16px,5vw,20px)] text-wrap">
            {/* //{title} */}
            Brother HL - L3270CDW Single Function Color Laser Printer
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Specification;
