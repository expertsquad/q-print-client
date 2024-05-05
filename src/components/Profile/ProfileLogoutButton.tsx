import { IconLogin2 } from "@tabler/icons-react";
import React from "react";

const ProfileLogoutButton = ({ handleLogout }: any) => {
  return (
    <button
      onClick={handleLogout}
      className="active:border-fuchsia-800 focus:border-fuchsia-800 flex items-center gap-3 border px-3 py-2 rounded-sm"
    >
      <span className="">
        <IconLogin2 stroke={1} className="text-black-opacity-80"  />
      </span>
      <span className="hidden md:block">Log Out</span>
    </button>
  );
};

export default ProfileLogoutButton;
