import React from 'react';

const BrandViewSkeleton = () => {
    return (
        <div className='flex items-center animate-pulse  gap-3.5'>
            <div>
                <div className='bg-gray-300 w-10 h-10 skeleton rounded-full'></div>
            </div>
            <div className="flex flex-col gap-2.5 w-full">
                <div className='bg-gray-300 h-2 rounded-full skeleton w-2/3'></div>
                <div className='bg-gray-300 h-2 rounded-full skeleton w-full'></div>
            </div>

        </div>
    );
};

export default BrandViewSkeleton;