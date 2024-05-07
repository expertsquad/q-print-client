import React from 'react';

const NotificationSkeleton = () => {
    return (
        <div className="flex items-center justify-between md:gap-5 border-b  py-5">
            <div className="flex items-center gap-3.5">
                <div className="w-[60px] h-[60px] skeleton bg-gray-200 rounded-custom-10px"></div>
                <div className="flex flex-col gap-2">
                    <div className="bg-gray-200 h-2 skeleton md:w-44 w-28 rounded-full"></div>
                    <div className="bg-gray-200 h-2 skeleton md:w-32 w-20 rounded-full"></div>
                </div>
            </div>



            <div className="flex items-center justify-between md:gap-16">
                <div className="md:flex flex-col gap-2 hidden">
                    <div className="bg-gray-200 h-2 skeleton w-28 rounded-full"></div>
                    <div className="bg-gray-200 h-2 skeleton w-24 rounded-full"></div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="bg-gray-200 h-2 skeleton md:w-28 w-20 rounded-full"></div>
                    <div className="bg-gray-200 h-2 skeleton md:w-24 w-16 rounded-full"></div>
                </div>
            </div>


        </div>
    );
};

export default NotificationSkeleton;