import React from "react";
import { IconEdit } from "@tabler/icons-react";
import Link from "next/link";

const ProfileEditButton = () => {
  return (
    <div>
      <div className=" hidden md:block lg:block">
        <Link
          href="/profile/profileSettings"
          className="flex items-center justify-center gap-1 border py-2 px-4 rounded-lg hover:border-fuchsia-700 hover:scale-105 hover:duration-500  hover:text-gray-500 shadow-md "
        >
          <IconEdit /> <span>Edit</span>
        </Link>
      </div>
      {/* sm logout button */}

      <div className=" block md:hidden lg:hidden">
        <Link
          href="/profile/profileSettings"
          className="flex items-center justify-center gap-1 border py-2 px-4 rounded-lg hover:border-fuchsia-700 hover:scale-105 hover:duration-500  hover:text-gray-500 shadow-md  "
        >
          <IconEdit />
        </Link>
      </div>
    </div>
  );
};

export default ProfileEditButton;
