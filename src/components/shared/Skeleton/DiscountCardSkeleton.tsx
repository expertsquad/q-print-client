import React from 'react';
import placeHolder from "@/assets/Placeholder_view_vector.svg"
import Image from 'next/image';

const DiscountCardSkeleton = () => {
    return (
        <div className="bg-gray-300 animate-pulse flex items-center justify-between md:flex-col flex-row px-3.5 md:px-5 py-5 rounded-custom-10px">
            <div className="flex flex-col items-center gap-3.5">
                <div className='bg-gray-400 rounded-md w-[77px] h-2 skeleton'></div>
                <div className="flex flex-col gap-2.5">
                    <div className='bg-gray-400 rounded-md h-2 skeleton md:w-80'></div>
                    <div className='bg-gray-400 rounded-md h-2 skeleton md:w-72'></div>
                </div>
                <div className='md:w-[145px] md:h-[44px] rounded-md skeleton bg-gray-400'></div>
            </div>
            <Image src={placeHolder} alt='placeholder image for discount card' className='md:w-[250px] md:h-[300px] h-[150px] w-[180px]' />
        </div>
    );
};

export default DiscountCardSkeleton;