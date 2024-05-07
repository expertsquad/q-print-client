"use client"
import { IconChevronRight, IconUser } from "@tabler/icons-react";
import ProfileMobileMenuDrawer from './ProfileMobileMenuDrawer';


const ProfileMobileMenu = ({ setOpenDrawer, handleModal, openMobileMenu }: any) => {


  return (
    <>
      <div onClick={() => handleModal()} className="flex items-center justify-between  border px-2.5 py-3.5 rounded-lg cursor-pointer">
        <div className="flex items-center gap-3">
          <span>
            <IconUser stroke={1} width={20} height={20} className="text-fuchsia-800" />
          </span>
          <span className="main-text-color text-base">My Profile</span>
        </div>
        <div>
          <IconChevronRight stroke={1} width={24} height={24} className="text-black-opacity-70" />
        </div>
      </div>

      {
        openMobileMenu && (
          <ProfileMobileMenuDrawer setOpenDrawer={setOpenDrawer} handleModal={handleModal} />
        )
      }
    </>
  );
};

export default ProfileMobileMenu;