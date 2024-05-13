import { footerLinks } from "@/constants";
import Link from "next/link";

const FooterLinks = () => {
  return (
    <div className="flex md:flex-row flex-col md:gap-10 gap-3.5 justify-center">
      {footerLinks.map((link) => (
        <div
          className="border-b flex flex-col gap-5 border-b-gray-400 md:border-b-0"
          key={link.title}
        >
          <h3 className="text-white text-center md:text-start font-semibold ">{link.title}</h3>
          <div className="flex flex-col md:items-start items-center gap-3">
            {link.links.map((item) => (
              <Link href={`/${item?.url}`} key={item.title} className="text-[#999] mb-2 cursor-pointer">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
