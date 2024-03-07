import Image from "next/image";
import React from "react";
import ProfileEditButton from "./ProfileEditButton";
import { imageUrl } from "@/constants/imageUrl";

const ViewProfilleEdit = ({ profileInfo }: any) => {
  // console.log(profileInfo, "Profile Info");
  return (
    <div className="border rounded-lg py-9 lg:px-10 px-5 flex justify-between items-center">
      <div className="flex items-center justify-between lg:gap-8 gap-2">
        <Image
          width={100}
          height={100}
          className="lg:w-24 w-20 lg:h-24 h-20 rounded-full object-cover"
          src={`${imageUrl}${profileInfo?.profilePhoto}`}
          alt="Profile picture"
        />
        <h1 className="text-black lg:text-2xl text-base font-medium">
          {profileInfo?.fullName}
        </h1>
      </div>

      <ProfileEditButton />
    </div>
  );
};

export default ViewProfilleEdit;
