import { imageUrl } from "@/constants/imageUrl";
import { isLoggedIn } from "@/services/auth.service";
import { IconUser } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const UserProfileButton = ({ handleUserProfile, profilePhoto }: any) => {
  const userLoggedIn = isLoggedIn();

  return (
    <div className="cursor-pointer" onClick={handleUserProfile}>
      {userLoggedIn ? (
        profilePhoto ? (
          <div className="w-[30px] h-[30px] shrink-0 relative">
            <Image
              src={`${imageUrl}${profilePhoto}`}
              alt="profile"
              sizes="(max-width: 80px) 10vw, (max-width: 100px) 10vw, 15vw"
              fill
              priority={true}
              className="w-full h-full top-0 left-0 object-cover rounded-full"
            />
          </div>
        ) : (
          <div>
            <IconUser stroke={2} width={24} height={24} />
          </div>
        )
      ) : (
        <div>
          <IconUser stroke={2} width={24} height={24} />
        </div>
      )}
    </div>
  );
};

export default UserProfileButton;
