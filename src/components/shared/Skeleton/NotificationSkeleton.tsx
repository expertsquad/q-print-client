import React from 'react';

const NotificationSkeleton = () => {
    return (
        <div  className="flex items-center justify-between border-b  py-5">
            <div className="flex items-center gap-3.5">
                <div className="w-[60px] h-[60px] bg-gray-200 rounded-custom-10px"></div>
                <div className="flex flex-col gap-2">
                    <div className="bg-gray-200 h-2 w-52 rounded-full"></div>
                    <div className="bg-gray-200 h-2 w-32 rounded-full"></div>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <div className="bg-gray-200 h-2 w-28 rounded-full"></div>
                <div className="bg-gray-200 h-2 w-24 rounded-full"></div>
            </div>

            <div className="flex flex-col gap-2">
                <div className="bg-gray-200 h-2 w-28 rounded-full"></div>
                <div className="bg-gray-200 h-2 w-24 rounded-full"></div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="bg-gray-200 h-2 w-28 rounded-full"></div>
                <div className="bg-gray-200 h-2 w-24 rounded-full"></div>
            </div>
            
        </div>
    );
};

export default NotificationSkeleton;