import Link from "next/link";
import React from "react";

const ProfileViewButton = () => {
  return (
    <Link
      href="/profile/view-profile"
      className=" py-1 px-4 border rounded-2xl  bg-gradient-to-r from-[#C83B62] to-[#7F35CD] text-transparent bg-clip-text hover:scale-105 hover:duration-500 hover:border-fuchsia-700 "
    >
      View
    </Link>
  );
};

export default ProfileViewButton;
