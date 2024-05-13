import Contact from "./Contact";
import SocialLinks from "./SocialLinks";

const SocialAndContact = () => {
    return (
        <div className="flex  justify-between md:flex-col md:gap-12 gap-5">
            <Contact />
            <SocialLinks />
        </div>
    );
};

export default SocialAndContact;