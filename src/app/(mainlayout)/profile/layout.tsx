"use client"
import ProfileMobileMenu from "@/components/Profile/ProfileMobileMenu";
import ProfileNav from "@/components/Profile/ProfileNav";
import React, { useState } from 'react';


const ProfileLayout = ({ children }: { children: React.ReactNode }) => {

   const [openMobileMenu, setOpenMobileMenu] = useState(false);


  const handleMobileMenu = () => {
    setOpenMobileMenu(prevState => !prevState);
  }


  return (
    <section className="max-w-[1280px] mx-auto flex md:flex-row flex-col mt-16  gap-6 ">
      <div className="hidden md:block ">
        <ProfileNav handleModal={handleMobileMenu} />
      </div>
      <div className="md:hidden block">
        <ProfileMobileMenu openMobileMenu={openMobileMenu} setOpenDrawer={setOpenMobileMenu} handleModal={handleMobileMenu} />
      </div>

      <div className="w-full">{children}</div>

    </section >
  );
};

export default ProfileLayout;
