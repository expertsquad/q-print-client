"use client";
import { imageUrl } from "@/constants/imageUrl";
import { useGetNotificationsQuery } from "@/redux/features/notifications/notificationsApi";
import { NotificationsTypes } from "@/types/notificationsType";
import Image from "next/image";
import demoImg from "@/assets/demo printer.svg";
import { formatDateShorting } from "@/constants/formatDate";
import NotificationSkeleton from "@/components/shared/Skeleton/NotificationSkeleton";

const Notifications = () => {
  const { data, isLoading } = useGetNotificationsQuery("");

  return (
    <div className="flex flex-col gap-5 border rounded-lg p-3 md:p-7 mb-14">
      <h4 className="text-xl text-black font-bold mb-2">Notification</h4>
      <h4 className="text-xl text-black font-medium">Today</h4>

      {
        isLoading ? (
          [...Array(4)].map((_, index) => {
            return (
              <NotificationSkeleton key={index} />
            )
          })
        ) :



          data?.data &&
          data?.data.map((notification: NotificationsTypes) => (
            <div
              key={notification?._id}
              className="flex gap-3 md:gap-0 items-center justify-between border-b py-3"
            >
              <div className="w-[40px] md:w-[60px] md:h-[60px] h-[40px] relative shrink-0 mr-2.5 md:mr-5">
                <Image
                  src={`${imageUrl}${notification?.productPhoto}`}
                  fill
                  objectFit="cover"
                  alt="Product Photo"
                  className="w-full h-full top-0 left-0 object-cover p-1.5 border rounded-md"
                />
              </div>
              <div className="flex flex-col md:gap-2 gap-1 w-3/5">
                <span className="text-black text-[13px] md:text-lg line-clamp-2">
                  {notification?.title}
                </span>

                <span className="md:text-sm text-xs text-gray-400 line-clamp-1">
                  {notification?.subTitle}
                </span>
              </div>
              <span className="md:flex items-center justify-center hidden text-lg font-medium text-black w-1/5 ">
                ${notification?.price}
              </span>
              <div className="flex flex-col items-end gap-3.5 w-1/5">
                <span className="text-xs lg:text-base text-gray-400 whitespace-nowrap">
                  {formatDateShorting(notification?.createdAt)}
                </span>
                <strong className="block md:hidden font-medium text-black text-sm">
                  ${notification?.price}
                </strong>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Notifications;
