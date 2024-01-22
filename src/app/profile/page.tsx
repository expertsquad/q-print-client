import MyProfileCard from "@/components/Profile/MyProfileCard";
import ProfileOrderHistory from "@/components/Profile/ProfileOrderHistory";
import React from "react";

const Profile = () => {
  return (
    <div className="w-full">
      <MyProfileCard />
      <div>
        <h3 className="font-bold py-5">Recent Orders</h3>

        <ProfileOrderHistory />
      </div>
    </div>
  );
};

export default Profile;
