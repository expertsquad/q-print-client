import { IconLogin2 } from "@tabler/icons-react";
import React from "react";

const ProfileLogoutButton = () => {
  return (
    <div>
      <div className=" hidden md:block lg:block">
        <button className="flex items-center justify-center gap-1 border py-2 px-4 rounded-lg hover:border-fuchsia-700 hover:scale-105 hover:duration-500  ">
          <IconLogin2 /> <span>Log Out</span>
        </button>
      </div>
      {/* sm logout button */}

      <div className=" block md:hidden lg:hidden">
        <button className="flex items-center justify-center gap-1 border py-2 px-4 rounded-lg hover:border-fuchsia-700 hover:scale-105 hover:duration-500  ">
          <IconLogin2 />
        </button>
      </div>
    </div>
  );
};

export default ProfileLogoutButton;
