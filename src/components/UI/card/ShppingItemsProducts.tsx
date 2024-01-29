import { IconMinus, IconPlus } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const ShppingItemsProducts = () => {
  return (
    <div>
      {/* product 1 */}
      <div className="flex gap-5">
        <div className=" ">
          <Image
            src="https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={56}
            height={56}
            loading="lazy"
            alt="Product image"
            className="rounded-lg h-16 w-16 p-2  border object-cover  "
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-base ">
            Brother HL-L3270CDW Single Function Color Laser Printer{" "}
          </div>
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              {/* increment and decrement button */}
              <div className="flex items-center gap-2">
                <button className="border p-1 rounded-full">
                  {""}
                  <IconMinus width={14} height={14} />
                </button>
                <span>4</span>
                <button className="border p-1 rounded-full">
                  {""}
                  <IconPlus width={14} height={14} />
                </button>
                <span className="text-[12px]">x</span>
                <span>300 QAR</span>
              </div>

              <b className="main-text-color">450 QAR</b>
            </div>
          </div>
        </div>
      </div>
      {/* product 2 */}
      <div className="flex gap-5">
        <div className=" ">
          <Image
            src="https://images.pexels.com/photos/17758065/pexels-photo-17758065/free-photo-of-a-tote-bag-with-writing-on-it-in-the-sand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Product Image"
            width={56}
            height={56}
            loading="lazy"
            className="rounded-lg h-16 w-16 p-2  border object-cover  "
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-base ">
            Brother HL-L3270CDW Single Function Color Laser Printer{" "}
          </div>
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              {/* increment and decrement button */}
              <div className="flex items-center gap-2">
                <button className="border p-1 rounded-full">
                  {""}
                  <IconMinus width={14} height={14} />
                </button>
                <span>4</span>
                <button className="border p-1 rounded-full">
                  {""}
                  <IconPlus width={14} height={14} />
                </button>
                <span className="text-[12px]">x</span>
                <span>300 QAR</span>
              </div>

              <b className="main-text-color">450 QAR</b>
            </div>
          </div>
        </div>
      </div>
      {/* product 3 */}
      <div className="flex gap-5">
        <div className=" ">
          <Image
            src="https://images.pexels.com/photos/162164/chicks-chicken-small-poultry-162164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={56}
            height={56}
            loading="lazy"
            alt=" Product image"
            className="rounded-lg h-16 w-16 p-2  border object-cover  "
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-base ">
            Brother HL-L3270CDW Single Function Color Laser Printer{" "}
          </div>
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              {/* increment and decrement button */}
              <div className="flex items-center gap-2">
                <button className="border p-1 rounded-full">
                  {""}
                  <IconMinus width={14} height={14} />
                </button>
                <span>4</span>
                <button className="border p-1 rounded-full">
                  {""}
                  <IconPlus width={14} height={14} />
                </button>
                <span className="text-[12px]">x</span>
                <span>300 QAR</span>
              </div>

              <b className="main-text-color">450 QAR</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShppingItemsProducts;
