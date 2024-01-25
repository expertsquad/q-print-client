import React from "react";

const ProfileViewPersonalInformation = () => {
  return (
    <div className="border rounded-lg lg:p-8 p-2.5">
      <h1 className="lg:text-xl text-base text-black  mb-5">
        Personal Information
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 ">
        <div className="flex flex-col justify-start gap-4 ">
          <small className="text-gray-400 text-base"> First Name</small>
          <p className="text-base text-black">Zayed</p>
        </div>
        <div className="flex flex-col justify-start gap-4 ">
          <small className="text-gray-400 text-base"> Last Name</small>
          <p className="text-base text-black">Hossain</p>
        </div>
        <div className="flex flex-col justify-start gap-4 ">
          <small className="text-gray-400 text-base"> Email</small>
          <p className="text-base text-black">zayedhossain120@gmail.com</p>
        </div>
        <div className="flex flex-col justify-start gap-4 ">
          <small className="text-gray-400 text-base"> Phone Number</small>
          <p className="text-base text-black">01612849451</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileViewPersonalInformation;
