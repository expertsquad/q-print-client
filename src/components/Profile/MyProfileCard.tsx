import Image from "next/image";
import { IconLogin2 } from "@tabler/icons-react";

const MyProfileCard = () => {
  return (
    <div className="border w-full p-10 rounded-lg ">
      {/* Profile image and logout section */}
      <div className="">
        <div className="flex justify-between items-center pb-5 border-b">
          <div className="flex gap-2  justify-center  items-center">
            <div>
              <Image
                src="https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="My profile image"
                height={100}
                width={100}
                className="h-[100px] w-[100px] rounded-full overflow-hidden  border border-fuchsia-700 object-cover"
              />
            </div>
            <div>
              <p>Hello,</p>
              <h3>Zayed Hossain</h3>
            </div>
          </div>
          <div>
            <button className="flex items-center justify-center gap-1 border py-2 px-4 rounded-lg ">
              <IconLogin2 /> <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-5">
        <div className="border p-3">Product</div>
        <div className="border p-3">Product</div>
        <div className="border p-3">Product</div>
        <div className="border p-3">Product</div>
      </div>
    </div>
  );
};

export default MyProfileCard;
