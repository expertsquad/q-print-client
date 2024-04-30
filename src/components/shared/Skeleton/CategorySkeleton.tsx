import React from 'react';
import placeHolder from "@/assets/Placeholder_view_vector.svg"
import Image from 'next/image';

const CategorySkeleton = () => {
    return (
        <div className="bg-gray-300 animate-pulse w-52 md:w-64 lg:w-96 rounded-xl md:h-[340px] h-[160px] overflow-hidden">
            <Image src={placeHolder} alt="carousel-loader" className='md:w-[250px] w-[120px] h-[135px] md:h-[250px] rounded-md mx-auto' />
            <div className='flex flex-col gap-3 px-5 md:mt-5'>
                <div className='bg-gray-400 rounded-full h-3 w-28'></div>
                <div className='bg-gray-400 rounded-full h-3 w-36'></div>
            </div>
        </div>
    );
};

export default CategorySkeleton;