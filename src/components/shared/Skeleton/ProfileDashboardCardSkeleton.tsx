import React from 'react';

const ProfileDashboardCardSkeleton = () => {
  return (
    <div className="bg-gray-200 animate-pulse rounded-custom-10px py-10 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3.5">
        <div className="md:w-10 md:h-10 w-8 h-8 rounded-full bg-gray-300"> </div>
        <div className="flex items-center flex-col gap-1.5">
          <div className="h-2 w-40 rounded-full bg-gray-300"> </div>
          <div className="h-2 w-20 rounded-full bg-gray-300"> </div>
        </div>
      </div>

    </div>
  );
};

export default ProfileDashboardCardSkeleton;