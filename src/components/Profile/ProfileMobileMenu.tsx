"use client"
import { IconChevronRight, IconHistory, IconPrinter, IconUser, IconBell, IconSettings, IconLock } from "@tabler/icons-react";
import ProfileMobileMenuDrawer from './ProfileMobileMenuDrawer';
import { usePathname } from "next/navigation";


const ProfileMobileMenu = ({ setOpenDrawer, handleModal, openMobileMenu }: any) => {

  const path = usePathname();



  return (
    <>
      <div onClick={() => handleModal()} className="flex items-center justify-between  border px-2.5 py-3.5 rounded-lg cursor-pointer">
        {path === "/profile" ?

          <div className="flex items-center gap-3">
            <span>
              <IconUser stroke={1} width={20} height={20} className="text-fuchsia-800" />
            </span>
            <span className="main-text-color text-base">My Profile</span>
          </div>
          :
          path === "/profile/view-profile" ?

            <div className="flex items-center gap-3">
              <span>
                <IconUser stroke={1} width={20} height={20} className="text-fuchsia-800" />
              </span>
              <span className="main-text-color text-base">My Profile</span>
            </div>
            : path === "/profile/order-history"
              ?
              <div className="flex items-center gap-3">
                <span>
                  <IconHistory stroke={1} width={20} height={20} className="text-fuchsia-800" />
                </span>
                <span className="main-text-color text-base">Order History</span>
              </div> : path === "/profile/printing-order-history"
                ?
                <div className="flex items-center gap-3">
                  <span>
                    <IconPrinter stroke={1} width={20} height={20} className="text-fuchsia-800" />
                  </span>
                  <span className="main-text-color text-base">Printing Order History</span>
                </div>
                : path === "/profile/profile-settings"
                  ?
                  <div className="flex items-center gap-3">
                    <span>
                      <IconSettings stroke={1} width={20} height={20} className="text-fuchsia-800" />
                    </span>
                    <span className="main-text-color text-base">Profile Settings</span>
                  </div>
                  : path === "/profile/notifications"
                    ?
                    <div className="flex items-center gap-3">
                      <span>
                        <IconBell stroke={1} width={20} height={20} className="text-fuchsia-800" />
                      </span>
                      <span className="main-text-color text-base">Notifications</span>
                    </div>
                    : path === "/profile/change-password"
                      ?
                      <div className="flex items-center gap-3">
                        <span>
                          <IconLock stroke={1} width={20} height={20} className="text-fuchsia-800" />
                        </span>
                        <span className="main-text-color text-base">Change Password</span>
                      </div>
                      : ""

        }
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