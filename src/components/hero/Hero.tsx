import Image from "next/image";
import ShopNowButton from "../UI/btn/ShopNowButton";
import HeroItemSlide from "./HeroItemSlide";

const Hero = () => {
  return (
    <section className="flex w-full md:flex-row lg:flex-row flex-col gap-7">
      <div className="md:w-8/12 lg:w-8/12 w-full">
        {/* hero item */}
        <HeroItemSlide />
      </div>
      {/* right side card */}
      <div className="flex flex-col gap-4  h-full md:h-auto lg:h-auto rounded-lg">
        {/* top one card */}
        <div className="bg-[#F2F4F5] flex justify-center items-center p-5 gap-4 rounded-lg flex-1">
          <div className="">
            <Image
              src="https://www.transparentpng.com/thumb/printer/iqV2Vo-printer-free-download-transparent.png"
              alt="Hero discount item"
              height={150}
              width={150}
            ></Image>
          </div>
          <div className="">
            <h2 className="[font-size:_clamp(1em,5vw,1.5em)]">
              New Hp Cartridge
            </h2>
            <h3 className="main-text-color font-bold">2900 QR</h3>
            <ShopNowButton />
          </div>
        </div>

        {/* second one card */}
        <div className="bg-[#3a42aa8e] flex justify-center items-center p-5 gap-4 rounded-lg flex-1">
          <div className="">
            <h2 className="[font-size:_clamp(1em,5vw,1.5em)]">
              New Hp Cartridge
            </h2>
            <h3 className="main-text-color font-bold">2900 QR</h3>
            <ShopNowButton />
          </div>

          <div className="">
            <Image
              src="https://www.transparentpng.com/thumb/printer/TdXPfS-canon-printer-icon.png"
              alt="Hero discount item"
              height={150}
              width={150}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
