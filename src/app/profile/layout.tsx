import ProfileNav from "@/components/Profile/ProfileNav";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="max-w-[1280px] mx-auto flex mt-16 ">
      <div>
        <ProfileNav />
      </div>
      <div>{children}</div>
    </section>
  );
};

export default ProfileLayout;
