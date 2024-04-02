import Image from "next/image";

const Notifications = () => {
  return (
    <div className="flex flex-col gap-6 border rounded-lg p-7 mb-7">
      <h4 className="text-xl text-black font-bold mb-2">Notification</h4>
      <h4 className="text-xl text-black font-medium">Today</h4>
      <div className="flex flex-col gap-5 lg:gap-6">
        <div className="flex items-center justify-between">
          <div className="flex lg:items-center gap-5">
            <div className="lg:w-[70px] lg:h-[70px] w-[60px] h-[60px]">
              <Image
                className="border rounded-lg p-2.5"
                src="https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div className="flex flex-col lg:gap-3 gap-1">
              <span className="text-black lg:text-lg text-base">
                Order collection date confirmed
              </span>

              <span className="lg:text-sm text-xs text-gray-400 line-clamp-1">
                Your order ID #126980 has confirmed
              </span>
            </div>
          </div>
          <span className="lg:block md:block hidden text-lg font-medium text-black">
            $150
          </span>
          <div className="flex flex-col items-start gap-3.5">
            <span className="text-xs lg:text-base text-gray-400 whitespace-nowrap">
              1d ago
            </span>
            <strong className="lg:hidden md:hidden text-base font-medium text-black">
              $150
            </strong>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <div className="flex lg:items-center gap-5">
            <div className="lg:w-[70px] lg:h-[70px] w-[60px] h-[60px] object-cover">
              <Image
                className="border rounded-lg p-2.5"
                src="https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div className="flex flex-col lg:gap-3 gap-1">
              <span className="text-black lg:text-lg text-base">
                Your Payment is successfull
              </span>

              <span className="lg:text-sm text-xs text-gray-400 line-clamp-1">
                transaction number is TDLXD34565545
              </span>
            </div>
          </div>
          <span className="lg:block md:block hidden text-lg font-medium text-black">
            $150
          </span>
          <div className="flex flex-col items-start gap-3.5">
            <span className="text-xs lg:text-base text-gray-400 whitespace-nowrap">
              1d ago
            </span>
            <strong className="lg:hidden md:hidden text-base font-medium text-black">
              $150
            </strong>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <div className="flex lg:items-center gap-5">
            <div className="lg:w-[70px] lg:h-[70px] w-[60px] h-[60px]">
              <Image
                className="border rounded-lg p-2.5"
                src="https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div className="flex flex-col lg:gap-3 gap-1">
              <span className="text-black lg:text-lg text-base">
                Your monthly coin update.
              </span>

              <span className="lg:text-sm text-xs text-gray-400 line-clamp-1">
                you have 530 coin expiring this month, use them now to get
                soothing get for your self.
              </span>
            </div>
          </div>

          <span className="text-xs lg:text-base text-gray-400 whitespace-nowrap">
            1d ago
          </span>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Notifications;
