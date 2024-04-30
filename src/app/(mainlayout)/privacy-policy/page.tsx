
import PrivacyContent from '@/components/privacy-policy/PrivacyContent';
import { contactInfo, infoWeCollect, shareInfo, weUseInfo } from '@/constants/privacyPolicy';
import React from 'react';


const PrivacyPolicy = () => {
    return (
        <div className='max-w-[1280px] mx-auto mb-7'>
            <div className="flex flex-col items-center justify-self-center gap-2.5">
                <h1 className="font-semibold md:font-bold md:text-3xl text-2xl">Privacy Policy of <span className='main-text-color'> Q-Print</span></h1>
                <span>Last updated: 25 April 2024</span>
            </div>

            <div className="mt-16 ">
                <div className=' flex flex-col gap-2.5'>
                    <h2 className="font-bold md:text-xl text-lg">Introduction</h2>
                    <p>Welcome to Q-Print, your trusted source for printers and printer cartridges. We are committed to protecting the privacy of our customers and ensuring the security of their personal information. This Privacy Policy details how we collect, use, and safeguard the information you provide when you use our website and services.</p>
                </div>
            </div>

            <div>
                <h2 className='text-3xl font-bold'>Information We Collect</h2>

                {
                    infoWeCollect?.map((info: any, index: number) => {
                        return (
                            <PrivacyContent key={index} data={info} />
                        )

                    })
                }
            </div>

            <div>
                <h2 className='text-3xl font-bold'>How We Use Your Information</h2>

                {
                    weUseInfo?.map((info: any, index: number) => {
                        return (
                            <PrivacyContent key={index} data={info} />
                        )
                    })
                }
            </div>

            <div>
                <h2 className='text-3xl font-bold'>Sharing of Information</h2>

                {
                    shareInfo?.map((info: any, index: number) => {
                        return (
                            <PrivacyContent key={index} data={info} />
                        )
                    }

                    )
                }

            </div>


            <div>
                {
                    contactInfo?.map((info: any, index: number) => {
                        return (
                            <div key={index}>
                                <PrivacyContent data={info} />
                                <div className="flex flex-col ">
                                    <span>Email:{" "} <a href="mailto:someone@example.com" className="underline">{info?.email}</a></span>
                                    <span>Address: {" "} <span>{info?.address}</span></span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    );
};

export default PrivacyPolicy;