import Link from "next/link";
import {
  IconHome,
  IconChevronRight,
  IconBrandFacebookFilled,
  IconBrandTwitterFilled,
  IconBrandPinterest,
  IconBrandInstagram,
} from "@tabler/icons-react";

const ProductViewTop = () => {
  return (
    <section className="flex flex-col gap-5 md:gap-0 md:flex-row justify-between mb-8 ">
      <div className="text-sm breadcrumbs">
        <ul className="flex items-center">
          <li className="">
            <Link href="/">
              <IconHome width={20} height={20} className="mr-1" />
              Home
            </Link>
          </li>
          <li>
            <Link href="/">Category</Link>
          </li>
          <li>
            <Link href="/">Printer</Link>
          </li>

          <li>
            <Link href="/">Brother</Link>
          </li>
        </ul>
      </div>
      {/* //----- */}
      <div className="flex items-center gap-5">
        <span className="[font-size:_clamp(12px,5vw,14px)]"> Share Item:</span>
        <IconBrandFacebookFilled
          width={25}
          height={25}
          className="text-[#4D4D4D]"
        />
        <IconBrandTwitterFilled
          width={25}
          height={25}
          className="text-[#4D4D4D]"
        />
        <IconBrandPinterest width={25} height={25} className="text-[#4D4D4D]" />
        <IconBrandInstagram width={25} height={25} className="text-[#4D4D4D]" />
      </div>
    </section>
  );
};

export default ProductViewTop;
