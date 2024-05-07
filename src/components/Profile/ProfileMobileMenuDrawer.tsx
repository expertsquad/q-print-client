import CustomGlobalDrawer from '../shared/CustomGlobalDrawer';
import ProfileNav from "@/components/Profile/ProfileNav";
import ModalCloseBtn from '../shared/ModalCloseBtn';
import { IconArrowLeft } from '@tabler/icons-react';

const ProfileMobileMenuDrawer = ({ handleModal, setOpenDrawer }: any) => {

  return (
    <div>
      <CustomGlobalDrawer isVisible={handleModal} setOpenDrawer={setOpenDrawer} drawerController='w-[312px]'>
        <div className=' relative'>
          <div className="top-5">
            <ModalCloseBtn
              handleClose={handleModal}
              icon={<IconArrowLeft />}
            />
          </div>

         <div className="py-10">
           <ProfileNav />
         </div>
        </div>
      </CustomGlobalDrawer>
    </div>
  );
};

export default ProfileMobileMenuDrawer;