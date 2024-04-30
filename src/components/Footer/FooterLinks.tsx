import { footerLinks } from "@/constants";
import Link from "next/link";

const FooterLinks = () => {
  return (
    <div className="md:flex justify-between lg:flex">
      {footerLinks.map((link) => (
        <div
          className="border-b border-b-gray-400 md:border-b-0"
          key={link.title}
        >
          <h3 className="text-white font-semibold pb-2">{link.title}</h3>
          <div className="flex flex-col gap-1">
            {link.links.map((item) => (
              <Link href="/privacy-policy" key={item.title} className="text-[#999] mb-2 cursor-pointer">
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
