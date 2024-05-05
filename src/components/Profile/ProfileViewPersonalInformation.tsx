import ProfileInfoSkeleton from "../shared/Skeleton/ProfileInfoSkeleton";

const ProfileViewPersonalInformation = ({ personalInformation, isLoading }: any) => {
  return (
    isLoading ? (
      <div className="border rounded-lg lg:p-8 p-2.5 animate-pulse">
        <div className="bg-gray-200 rounded-full w-1/3 h-3"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 md:mt-10 mt-5">
          {
            [...Array(4)].map((_, index) => {
              return (
                <ProfileInfoSkeleton key={index} />
              )
            })

          }
        </div>

      </div>
    ) :
      <div className="border rounded-lg lg:p-8 p-2.5">
        <h1 className="lg:text-xl text-base text-black  mb-5">
          Personal Information
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 ">
          <div className="flex flex-col justify-start gap-4 ">
            <small className="text-gray-400 text-base"> First Name</small>
            <p className="text-base text-black">
              {personalInformation?.fullName}
            </p>
          </div>
          <div className="flex flex-col justify-start gap-4 ">
            <small className="text-gray-400 text-base"> Last Name</small>
            <p className="text-base text-black">
              {personalInformation?.fullName}
            </p>
          </div>
          <div className="flex flex-col justify-start gap-4 ">
            <small className="text-gray-400 text-base"> Email</small>
            <p className="text-base text-black">{personalInformation?.email}</p>
          </div>
          <div className="flex flex-col justify-start gap-4 ">
            <small className="text-gray-400 text-base"> Phone Number</small>
            <p className="text-base text-black">
              {personalInformation?.phoneNumber}
            </p>
          </div>
        </div>
      </div>
  );
};

export default ProfileViewPersonalInformation;
