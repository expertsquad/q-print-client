"use client"

import React, { useState, useRef } from 'react';
import { IconBrandMessenger, IconBrandWhatsapp, IconMessageCircle2Filled, IconX } from '@tabler/icons-react';
import qPrintLogo from "@/assets/logo.svg";
import Image from "next/image";
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { useGetSocialMediaQuery } from '@/redux/features/social-media/socialMediaApi';

function QuickMessagePopup() {

    const { data, isLoading } = useGetSocialMediaQuery();


    const dispatch = useAppDispatch();
    const socialMediaData = useAppSelector((state) => state.socialMediaSlice);




    const [isOpen, setIsOpen] = useState(false);
    const [startY, setStartY] = useState(0);
    const popupRef = useRef(null);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const handleTouchStart = (e: any) => {
        setStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: any) => {
        const touchY = e.touches[0].clientY;
        const deltaY = touchY - startY;

        if (deltaY > 70) {
            setIsOpen(false);
        }
    };

    function isWhatsAppInstalled() {
        return navigator.userAgent.includes("WhatsApp");
    }




    return (
        <>
            <div className="fixed bottom-5 md:right-10 right-5 z-50">
                <button className="flex items-center justify-center w-[60px] h-[60px] rounded-full outline-none bg-main-bg-color group cursor-pointer z-40" onClick={togglePopup}>
                    {isOpen ? (
                        <IconX className="text-white" width={30} height={30} stroke={2} />
                    ) : (
                        <IconMessageCircle2Filled className="text-white" width={30} height={30} stroke={1} />
                    )}
                </button>
            </div>

            {isOpen && (
                <div
                    ref={popupRef}
                    className={`bg-white px-5 md:py-10 py-3 md:rounded-[10px] md:w-[350px] w-full rounded-t-[30px] z-50 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] fixed md:right-10 md:bottom-[100px] bottom-0 transition-all duration-1000 transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
                    <div className="md:hidden block mb-3.5 top-3 bg-[#00000017]  h-1.5 rounded-full w-[60px] mx-auto cursor-pointer" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onClick={togglePopup} ></div>
                    <div className="flex flex-col gap-12 md:mt-0 mt-10">
                        <div className="flex flex-col gap-3.5 items-center justify-center">
                            <div className="w-full h-auto items-center flex justify-center cursor-pointer">
                                <Image src={qPrintLogo} alt="Logo" width={250} height={250} priority={true} className="w-36" />
                            </div>
                            <span className="text-center text-black-opacity-60 text-sm">Best online ecommerce website<br /> for you</span>
                        </div>
                        <div className="flex flex-col gap-5 items-center w-full">

                            {
                                data?.data?.map((media: any, index: number) => {
                                    return (
                                        <Link
                                            href={
                                                media?.mediaName === "Messenger"
                                                    ? `https://m.me/${media?.userName}`
                                                    : media?.mediaName === "Whatsapp"
                                                        ? isWhatsAppInstalled()
                                                            ? `https://api.whatsapp.com/send?phone=${media?.phoneNumber}`
                                                            : `https://web.whatsapp.com/send?phone=${media?.phoneNumber}`
                                                        : ""
                                            }
                                            key={index}
                                            className={`flex items-center gap-3 justify-center py-3 px-3.5 ${media?.mediaName === "Messenger" ? "bg-[#097DFF]" : "bg-[#25D366]"} rounded-lg w-full`}
                                            target="_blank"
                                        >
                                            {
                                                media?.mediaName === "Messenger"
                                                    ? <IconBrandMessenger stroke={1} className="text-white" width={24} height={24} />
                                                    : media?.mediaName === "Whatsapp"
                                                        ? isWhatsAppInstalled()
                                                            ? <IconBrandWhatsapp stroke={1} className="text-white" width={24} height={24} />
                                                            : <IconBrandWhatsapp stroke={1} className="text-white" width={24} height={24} />
                                                        : ""
                                            }
                                            <span className="text-white text-base">{media?.mediaName}</span>
                                        </Link>

                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default QuickMessagePopup;
