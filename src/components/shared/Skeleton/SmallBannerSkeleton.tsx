import Image from 'next/image';
import React from 'react';
import placeHolder from "@/assets/Placeholder_view_vector.svg"

const SmallBannerSkeleton = ({ index }: any) => {
    return (
        <div className={`bg-gray-300 animate-pulse rounded-custom-10px md:w-[445px] w-full md:h-[217px] h-[160px] flex ${index === 1 && "flex-row-reverse"} items-center justify-between gap-3.5 px-5`}>

            <div className="overflow-hidden rounded-md">
                <Image className='md:w-[170px] w-[220px] h-[120px]' src={placeHolder} alt="small banner loading" />
            </div>
            <div className='flex flex-col  gap-5'>
                <div className='flex flex-col gap-2.5'>
                    <div className="bg-gray-400 md:w-28 w-20 h-2 rounded-full"></div>
                    <div className="bg-gray-400 md:w-40 w-28 h-3 rounded-full"></div>
                    <div className="bg-gray-400 md:w-48 w-28 h-2 rounded-full"></div>
                </div>
                <div className="bg-gray-400 w-[150px] md:w-[120px] rounded md:h-[39px] h-[36px]"></div>
            </div>

        </div>
    );
};

export default SmallBannerSkeleton;