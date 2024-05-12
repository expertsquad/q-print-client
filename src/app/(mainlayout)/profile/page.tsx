"use client";
import MyProfileCard from "@/components/Profile/MyProfileCard";
import OrderHistoryOrderPlacedLayout from "@/components/Profile/OrderHistoryOrderPlacedLayout";
import { useGetUserQuery } from "@/redux/features/user/user";
import Link from "next/link";

const Profile = () => {
  const { data } = useGetUserQuery("");
  return (
    <div className="w-full mb-7">
      <MyProfileCard />
      <div>
        <h3 className="font-bold py-5">Recent Orders</h3>
        <OrderHistoryOrderPlacedLayout id={data?.data?._id} />
      </div>
      <div className="flex items-center justify-center mt-20">
        <Link
          href={"/profile/order-history"}
          className="border border-main-border-color inline-block px-3 py-1 main-text-color font-bold rounded-md"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default Profile;
