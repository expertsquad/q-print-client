const ProfilePhotoAndNameSkeleton = () => {
    return (
        <div className="flex items-center gap-3.5 animate-pulse">
            <div className="md:w-[100px] w-[80px] md:h-[100px] h-[80px] bg-gray-200 rounded-full"></div>
            <div className="flex flex-col gap-2">
                <div className="h-2 w-20 rounded-full bg-gray-300"> </div>
                <div className="h-2 w-40 rounded-full bg-gray-300"> </div>
            </div>
        </div>
    );
};

export default ProfilePhotoAndNameSkeleton;