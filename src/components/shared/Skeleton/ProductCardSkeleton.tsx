import Image from 'next/image';
import React from 'react';
import placeHolder from "@/assets/Placeholder_view_vector.svg"

const ProductCardSkeleton = () => {
    return (
        <div className="animate-pulse  rounded-custom-10px bg-gray-200 p-4 group max-w-[300px] w-[300px] h-[405px] max-h-max cursor-pointer relative">
            <div className="animate-pulse mx-auto relative overflow-hidden rounded-md">
                {/* <div className="flex flex-col gap-2 absolute left-2 top-5">
                    <div className="bg-gray-300 rounded-full md:w-10 md:h-10 w-5 h-5"></div>
                    <div className="bg-gray-300 rounded-full md:w-10 md:h-10 w-5 h-5"></div>
                </div> */}
                <Image src={placeHolder} alt='product loading image' className="animate-pulse w-[120px] h-[124px] md:w-[150px] md:h-[131px] mx-auto rounded-md" />
            </div>

            <div className="flex flex-col gap-2.5 mt-10">
                <div className='bg-gray-300 h-2 w-full rounded-full'></div>
                <div className='bg-gray-300 h-2 w-full rounded-full'></div>
                <div className='bg-gray-300 h-2 w-3/4 rounded-full'></div>
                <div className='bg-gray-300 h-2 w-1/2 rounded-full'></div>
                <div className='bg-gray-300 h-2 w-1/2 rounded-full'></div>
                <div className='bg-gray-300 h-2 w-1/2 rounded-full'></div>
            </div>

            <div className='bg-gray-300 h-10 w-[90%] rounded-md absolute bottom-5'></div>

        </div>
    );
};

export default ProductCardSkeleton;