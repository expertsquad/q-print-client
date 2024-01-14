import { footerLinks } from "../../constants";

const FooterLinks = () => {
  return (
    <div className="flex justify-between">
      {footerLinks.map((link) => (
        <div className="sm:border-b-2 " key={link.title}>
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
