import Logo from "@/assets/svgIcons/Logo";
import CombinedComponent from "./CombineComponent";
import ApplePay from "@/assets/FooterSVG/ApplePay";
import playStore from "@/assets/playstore.svg";
import appleStore from "@/assets/applestore.svg";
import Visa from "@/assets/FooterSVG/Visa";
import Discover from "@/assets/FooterSVG/Discover";
import Mastercard from "@/assets/FooterSVG/Mastercard";

import SocialAndContact from "./SocialAndContact";
import FooterLinks from "./FooterLinks";
import AppLinkAndPaymentMethod from "./AppLinkAndPaymentMethod";



const NewFooter = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1A1A1A]">
            <div className="max-w-[1280px] mx-auto px-5 md:py-10 py-7 relative">
                <div className="grid grid-cols-1 md:grid-cols-5  gap-5 ">
                    {/* 1 */}
                    <div className="flex flex-col gap-6 md:col-span-2">
                        <div className="flex flex-col gap-5 items-center md:items-start">
                            <div>
                                <Logo />
                            </div>
                            <p className="text-[#999999] text-sm leading-5 text-center md:text-start">
                                Welcome to Q Print, your one-stop destination for all your printing needs! From business cards to banners, weve got you covered with high-quality printing solutions.
                            </p>
                        </div>
                        <div className="md:block hidden">
                            <SocialAndContact />
                        </div>
                        <span className="text-[#999] text-center md:text-start hidden md:block">
                            Q-Print eCommerce © {`${currentYear}`}. All Rights Reserved
                        </span>

                    </div>
                    {/* 2 */}
                    <div className="md:col-span-2">
                        <FooterLinks />
                    </div>
                    {/* 3    */}
                    <div>
                        <AppLinkAndPaymentMethod />
                    </div>
                    <div className="flex flex-col items-center gap-2.5 md:hidden">
                        <SocialAndContact />
                        <span className="text-[#999] text-center md:text-start ">
                            Q-Print eCommerce © {`${currentYear}`}. All Rights Reserved
                        </span>
                    </div>
                </div>
                <div className="md:block hidden md:absolute right-5  md:bottom-5">
                    <div className="flex items-center justify-center gap-5 flex-wrap   ">
                        <CombinedComponent
                            type="payment"
                            paymentMethodComponents={<ApplePay />}
                        />
                        <CombinedComponent
                            type="payment"
                            paymentMethodComponents={<Visa />}
                        />
                        <CombinedComponent
                            type="payment"
                            paymentMethodComponents={<Discover />}
                        />
                        <CombinedComponent
                            type="payment"
                            paymentMethodComponents={<Mastercard />}
                        />

                        <CombinedComponent
                            type="payment"
                            isSecure={true}
                            secureButtonContent="Payment"
                        />
                    </div>
                </div>
            </div>

        </footer>
    );
}
export default NewFooter;