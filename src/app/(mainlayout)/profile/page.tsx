import MyProfileCard from "@/components/Profile/MyProfileCard";
import OrderHistoryOrderPlacedLayout from "@/components/Profile/OrderHistoryOrderPlacedLayout";
import OrderHistoryPackagingLayout from "@/components/Profile/OrderHistoryPackagingLayout";
import OrderHistoryShippingLayout from "@/components/Profile/OrderHistoryShippingLayout";
import ProfileOrderHistory from "@/components/Profile/ProfileOrderHistory";
import React from "react";

const Profile = () => {
  return (
    <div className="w-full mb-7">
      <MyProfileCard />
      <div>
        <h3 className="font-bold py-5">Recent Orders</h3>

        <OrderHistoryOrderPlacedLayout />
        <OrderHistoryPackagingLayout />
        <OrderHistoryShippingLayout />
      </div>
    </div>
  );
};

export default Profile;
