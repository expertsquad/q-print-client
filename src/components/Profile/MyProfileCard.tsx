import Image from "next/image";
import { IconLogin2 } from "@tabler/icons-react";
import UserIcon from "@/assets/svgIcons/UserIcon";
import OrderIcon from "@/assets/svgIcons/OrderIcon";
import ReviewIcon from "@/assets/svgIcons/ReviewIcon";
import CompleteOrdersIcon from "@/assets/svgIcons/CompleteOrdersIcon";
import ProfileLogoutButton from "./ProfileLogoutButton";
import ProfileViewButton from "./ProfileViewButton";

const MyProfileCard = () => {
  return (
    <div className="border w-full p-10 rounded-lg ">
      {/* Profile image and logout section */}
      <div className="">
        <div className="flex justify-between items-center pb-5  md:border-b lg:border-b">
          <div className="flex gap-2  justify-center  items-center">
            <div>
              <Image
                src="https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="My profile image"
                height={100}
                width={100}
                className=" h-[75px] w-[75px] md:h-[100px] md:w-[100px] lg:h-[100px] lg:w-[100px] rounded-full overflow-hidden  border  object-cover"
              />
            </div>
            <div>
              <p>Hello,</p>
              <h3 className="font-bold">Zayed Hossain</h3>
            </div>
          </div>

          {/*  logout button */}

          <ProfileLogoutButton />
        </div>
      </div>
      <div className="grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-4 mt-5">
        {/* grid card 1 */}
        <div className=" border rounded-lg flex items-center justify-center flex-col p-5 gap-4 text-gray-500 ">
          <UserIcon />
          <p className="whitespace-nowrap text-gray-500">Profile Information</p>
          <div>
            <ProfileViewButton />
          </div>
        </div>
        {/* grid card 2 */}

        <div className=" border rounded-lg flex items-center justify-center flex-col p-5 gap-4 text-gray-500 ">
          <OrderIcon />
          <p className="whitespace-nowrap text-gray-500">Orders</p>
          <div className="font-bold">50</div>
        </div>

        {/* grid card 3 */}

        <div className=" border rounded-lg flex items-center justify-center flex-col p-5 gap-4 text-gray-500 ">
          <ReviewIcon />
          <p className="whitespace-nowrap text-gray-500">Review</p>
          <div className="font-bold">12</div>
        </div>

        {/* grid card 4 */}

        <div className=" border rounded-lg flex items-center justify-center flex-col p-5 gap-4 text-gray-500 ">
          <CompleteOrdersIcon />
          <p className="whitespace-nowrap text-gray-500">Complete Orders</p>
          <div className="font-bold">45</div>
        </div>
      </div>
    </div>
  );
};

export default MyProfileCard;
