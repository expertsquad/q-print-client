"use client";
import Image from "next/image";
import OrderIcon from "@/assets/svgIcons/OrderIcon";
import ReviewIcon from "@/assets/svgIcons/ReviewIcon";
import CompleteOrdersIcon from "@/assets/svgIcons/CompleteOrdersIcon";
import ProfileLogoutButton from "./ProfileLogoutButton";
import ProfileViewButton from "./ProfileViewButton";
import ProfileUserIcon from "@/assets/svgIcons/ProfileUserIcon";
import { IconCamera } from "@tabler/icons-react";
import { useGetUserQuery } from "@/redux/features/user/user";
import { removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";
import { imageUrl } from "@/constants/imageUrl";
import { useGetOnlineOrderQuery } from "@/redux/features/online-order/online-orderApi";
import { useGetReviewQuery } from "@/redux/features/review/reviewApi";

const MyProfileCard = () => {
  const router = useRouter();

  // <== User Logout Functionality ==>
  const userLogout = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  // <== Get data from user me ==>
  const { data, isError, isLoading } = useGetUserQuery(undefined);

  // <== Get Order Data by Online Order Query ==>
  const onlineOrderData = useGetOnlineOrderQuery(undefined).data;

  // <== Get review data by review Query ==>
  const reviewData = useGetReviewQuery(undefined).data;

  return (
    <div className="border w-full p-10 rounded-lg ">
      {/* Profile image and logout section */}
      <div className="">
        <div className="flex justify-between items-center pb-5  md:border-b lg:border-b">
          <div className="flex gap-2  justify-center  items-center">
            <div>
              <div className="relative">
                <Image
                  src={`${imageUrl}${data?.data?.profilePhoto}`}
                  alt="My profile image"
                  height={100}
                  width={100}
                  className="h-[75px] w-[75px] md:h-[100px] md:w-[100px] lg:h-[100px] lg:w-[100px] rounded-full overflow-hidden border object-cover"
                />
                <div className="h-8 w-8 rounded-full flex items-center justify-center bg-gradient-to-r from-[#7F35CD] to-[#C83B62] text-white absolute bottom-0 right-0">
                  <label htmlFor="profileFileInput">
                    <IconCamera />
                    <input
                      title="Upload Profile Photo"
                      id="profileFileInput"
                      className="hidden"
                      type="file"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div>
              <p>Hello,</p>
              {data?.data?.fullName ? (
                <h3 className="font-bold">{data?.data?.fullName}</h3>
              ) : (
                <h3 className="font-bold">User Name</h3>
              )}
            </div>
          </div>

          {/*  logout button */}

          <ProfileLogoutButton handleLogout={userLogout} />
        </div>
      </div>
      <div className="grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-4 mt-5">
        {/* grid card 1 */}
        <div className=" border rounded-lg flex items-center justify-center flex-col p-5 gap-4 text-gray-500 ">
          <ProfileUserIcon />
          <p className="whitespace-pre-wrap text-gray-500">
            Profile Information
          </p>
          <div>
            <ProfileViewButton />
          </div>
        </div>
        {/* grid card 2 */}

        <div className=" border rounded-lg flex items-center justify-center flex-col p-5 gap-4 text-gray-500 ">
          <h3 className="text-xl">
            {" "}
            <OrderIcon />
          </h3>
          <p className="whitespace-nowrap text-gray-500">Orders</p>
          <span className="font-bold">{onlineOrderData?.data?.length}</span>
        </div>

        {/* grid card 3 */}

        <div className=" border rounded-lg flex items-center justify-center flex-col p-5 gap-4 text-gray-500 ">
          <ReviewIcon />
          <p className="whitespace-nowrap text-gray-500">Review</p>
          <span className="font-bold">{reviewData?.data?.length}</span>
        </div>

        {/* grid card 4 */}

        <div className=" border rounded-lg flex items-center justify-center flex-col p-5 gap-4 text-gray-500 ">
          <CompleteOrdersIcon />
          <p className="whitespace-pre-wrap text-gray-500">Complete Orders</p>
          <div className="font-bold">45</div>
        </div>
      </div>
    </div>
  );
};

export default MyProfileCard;
