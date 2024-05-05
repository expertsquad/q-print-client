import ProfileNav from "@/components/Profile/ProfileNav";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="max-w-[1280px] mx-auto flex md:flex-row flex-col mt-16  gap-6">
      <div className="hidden md:block">
        <ProfileNav />
      </div>

      <div className="w-full">{children}</div>
    </section>
  );
};

export default ProfileLayout;
