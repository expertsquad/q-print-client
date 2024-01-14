import { footerLinks } from "../../constants";

const FooterLinks = () => {
  return (
    <div className="md:flex justify-between lg:flex">
      {footerLinks.map((link) => (
        <div
          className="border-b border-b-gray-400 md:border-b-0"
          key={link.title}
        >
          <h3 className="text-white font-semibold pb-2">{link.title}</h3>
          <div className="">
            {link.links.map((item) => (
              <p key={item.title} className="text-[#999] mb-2">
                {item.title}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
