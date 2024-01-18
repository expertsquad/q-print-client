import Link from "next/link";
import React from "react";

const Specification = () => {
  const menus = ["Specification", "Warranty", "Description", "Customer Review"];
  return (
    <section>
      <div className="overflow-x-auto flex no-scrollbar mb-12 border-b">
        {menus.map((item) => (
          <Link
            className="text-[16px] md:text-[18px] text-black opacity-70 focus:text-fuchsia-600 active:text-fuchsia-600 mr-7 hover:text-fuchsia-600 hover:border-fuchsia-600 hover:border-b-2 shrink-0 overflow-scroll text-nowrap no-scrollbar"
            key={item}
            href={"#"}
            // href={`/${item.toLocaleLowerCase()}`} //for id
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="flex">
        <div className="left side">
          <div id="specification">
            <h2 className="text-[18px] md:text-[24px] font-semibold">
              Specification
            </h2>
          </div>
          <div className="warranty">
            <h2 className="text-[18px] md:text-[24px] font-semibold">
              Warranty
            </h2>
            <h6 className="main-text-color text-[14px] md:text-[18px]">
              Apple I phone 14 pro 2 Year Warranty Support
            </h6>
            <p className="text-[14px] md:text-[18px]">
              our Warranty Policy page for detailed information about our
              warranty coverage
            </p>
          </div>
          <div className="description">
            <h2 className="text-[18px] md:text-[24px] font-semibold">
              Description
            </h2>
            <p className="text-wrap">
              Lorem ipsum dolor sit amet consectetur. Consequat eu at in non.
              Condimentum et aliquam dignissim est. Donec nibh suspendisse non
              egestas. Vel amet sodales in in sapien. Viverra consectetur cursus
              tempor tellus lorem. Tempor in leo ut at justo feugiat fames leo.
              Mi urna nec ultricies nibh pellentesque donec. Urna pretium
              elementum sodales tortor tortor non. Turpis tellus nunc proin
              tellus cursus volutpat orci dignissim enim. Nisi dui ante duis
              cras. Diam diam et gravida consectetur dui turpis egestas. Nulla
              sodales eu et ultricies. Pulvinar tortor vitae morbi quis vitae.
              Hendrerit enim arcu egestas cras facilisis. Nunc mauris cursus
              integer ornare ultrices turpis suspendisse. Accumsan purus
              ullamcorper neque morbi phasellus vitae libero. Quis risus
              senectus id aliquam eget consectetur morbi viverra justo.{" "}
            </p>
          </div>
        </div>
        <div className="right hidden md:block side  shadow-xl p-7">
          <div className="w-[320px] h-[375px]">
            <h2 className="md:text-[16px] text-wrap text-black opacity-80">
              {/* //{title} */}
              Brother HL - L3270CDW Single Function Color Laser Printer
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specification;
