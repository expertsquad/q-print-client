import React from 'react';
import placeHolder from "@/assets/Placeholder_view_vector.svg"
import Image from 'next/image';

const BestDealsSkeleton = () => {
    return (
        <div className='bg-gray-200 animate-pulse rounded-custom-10px  px-5 py-3.5'>

            <div className="flex items-center justify-between">
                <Image src={placeHolder} alt="best deals banner image" className="md:w-[250px] w-[80px] h-[80px] md:h-[300px] rounded-custom-10px" />
                <div className='flex flex-col items-center'>
                    <div className='flex flex-col items-center gap-2.5'>
                        <div className='bg-gray-300 h-2 rounded-full w-20'></div>
                        <div className='bg-gray-300 h-3 rounded-full w-52'></div>
                        <div className='bg-gray-300 h-3 rounded-full w-52'></div>
                    </div>



                    <div className='flex flex-col items-center gap-2.5 mt-10'>
                        <div className='bg-gray-300 h-2 rounded-full w-52'></div>
                        <div className='bg-gray-300 h-2 rounded-full w-40'></div>
                    </div>
                    <div className="flex items-center gap-4 mt-5">
                        {
                            [...Array(4)].map((_, index) => {
                                return (
                                    <div key={index} className='md:w-[70px] w-[46px] h-[46px] md:h-[70px] bg-gray-300 rounded-md'></div>
                                )
                            })
                        }
                    </div>
                </div>
                <Image src={placeHolder} alt="best deals banner image" className="md:w-[250px] w-[80px] h-[80px] md:h-[300px] rounded-custom-10px" />
            </div>

            <div className='flex items-center gap-5 overflow-x-auto'>
                {
                    [...Array(4)].map((_, index) => {
                        return (
                            <div key={index} className='bg-gray-300 rounded-custom-10px md:w-[290px] md:h-[70px] flex items-center justify-between px-3 py-1'>
                                <Image src={placeHolder} alt='best deals banner image' className='md:w-[60px] w-[50px] h-[80px] md:h-[60px] rounded-md' />
                                <div className='flex flex-col  gap-2.5 mt-10'>
                                    <div className='bg-gray-400 h-2 rounded-full w-20'></div>
                                    <div className='bg-gray-400 h-2 rounded-full md:w-40'></div>

                                </div>

                            </div>
                        )
                    })
                }

            </div>

        </div>
    );
};

export default BestDealsSkeleton;