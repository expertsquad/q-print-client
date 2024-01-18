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
    <section className="flex justify-between mb-8">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link href="/">
              <IconHome />
              Home
            </Link>
          </li>
          <li>
            <Link href="/">
              <IconChevronRight />
              Documents
            </Link>
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
