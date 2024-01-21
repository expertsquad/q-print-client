import Link from "next/link";
import {
  IconHome,
  IconBrandFacebookFilled,
  IconBrandTwitterFilled,
  IconBrandPinterest,
  IconBrandInstagram,
} from "@tabler/icons-react";

interface LinkItem {
  label: string;
  href: string;
}

interface GlobalBreadcrumbsProps {
  links: LinkItem[];
  showSocialIcons?: boolean;
}

const Breadcrumbs = ({
  links,
  showSocialIcons = true,
}: GlobalBreadcrumbsProps) => {
  return (
    <section className="flex flex-col gap-5 md:gap-0 md:flex-row justify-between mb-8">
      <div className="flex items-center breadcrumbs">
        <Link className="shrink-0" href="/">
          <IconHome width={20} height={20} className="mr-1" />
        </Link>
        <ul className="flex items-center breadcrumbs overflow-x-auto no-scrollbar">
          {links.map((link, index) => (
            <li key={index}>
              <Link className="shrink-0" href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {showSocialIcons && (
        <div className="flex items-center gap-5">
          <span className="[font-size:_clamp(12px,5vw,14px)]">
            {" "}
            Share Item:
          </span>
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
          <IconBrandPinterest
            width={25}
            height={25}
            className="text-[#4D4D4D]"
          />
          <IconBrandInstagram
            width={25}
            height={25}
            className="text-[#4D4D4D]"
          />
        </div>
      )}
    </section>
  );
};

export default Breadcrumbs;
