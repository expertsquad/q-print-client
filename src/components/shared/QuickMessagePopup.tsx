"use client"
import React, { useState } from 'react';
import { IconMessageCircle2Filled, IconX } from '@tabler/icons-react';


function QuickMessagePopup() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed bottom-5 right-5">

            {
                isOpen && (
                    <div className="bg-white p-5 rounded-md border text-black">
                        <h1>Hi</h1>
                    </div>
                )

            }

            <button className=" flex items-center justify-center w-[60px] h-[60px]  rounded-full  bg-main-bg-color group cursor-pointer z-40" onClick={togglePopup}>
                {
                    isOpen ? (
                        <IconX className=" text-white" width={30} height={30} stroke={2} />

                    ) : (
                        <IconMessageCircle2Filled className="text-white" width={30} height={30} stroke={1} />
                    )
                }
            </button>
        </div>
    );
}

export default QuickMessagePopup;
