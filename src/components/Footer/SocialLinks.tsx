import React from 'react';
import CombinedComponent from './CombineComponent';
import Reddit from '@/assets/FooterSVG/Reddit';
import Youtube from '@/assets/FooterSVG/Youtube';
import WhatsApp from '@/assets/FooterSVG/WhatsApp';
import Pinterest from '@/assets/FooterSVG/Pinterest';
import Facebook from '@/assets/FooterSVG/Facebook';

const SocialLinks = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className="flex items-center gap-3.5">
                <CombinedComponent
                    type="social"
                    socialIcon={<Reddit />}
                    socialLinkHref="https://www.reddit.com"
                />
                <CombinedComponent
                    type="social"
                    socialIcon={<Youtube />}
                    socialLinkHref="https://www.Youtube.com"
                />
                <CombinedComponent
                    type="social"
                    socialIcon={<WhatsApp />}
                    socialLinkHref="https://www.whatsappp.com"
                />
                <CombinedComponent
                    type="social"
                    socialIcon={<Pinterest />}
                    socialLinkHref="https://www.pinterest.com"
                />
                <CombinedComponent
                    type="social"
                    socialIcon={<Facebook />}
                    socialLinkHref="https://www.facebook.com"
                />
            </div>

        </>
    );
};

export default SocialLinks;