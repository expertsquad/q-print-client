import React from 'react';

const ProfileInfoSkeleton = () => {
    return (
        <div className="flex flex-col justify-start gap-4">
            <div className="h-2 bg-gray-200 rounded-full w-1/3"></div>
            <div className="h-2 bg-gray-200 rounded-full w-2/3"></div>
        </div>
    );
};

export default ProfileInfoSkeleton;