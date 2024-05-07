import CustomGlobalDrawer from '../shared/CustomGlobalDrawer';
import ProfileNav from "@/components/Profile/ProfileNav";

const ProfileMobileMenuDrawer = ({ handleModal, setOpenDrawer }: any) => {

  return (
    <div>
      <CustomGlobalDrawer isVisible={handleModal} setOpenDrawer={setOpenDrawer} drawerController='w-[312px]'>
        <div className='py-14 '>
          <ProfileNav />
        </div>
      </CustomGlobalDrawer>
    </div>
  );
};

export default ProfileMobileMenuDrawer;