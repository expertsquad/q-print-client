import Image from "next/image";
import adidasBrand from "@/assets/adidas brand.svg";
import { IconStar, IconHeart } from "@tabler/icons-react";
import { productViewImage } from "@/constants";
import ColorPickUp from "./ColorPickUp";
import PriceRangeEtc from "./PriceRangeEtc";

const ProductView = () => {
  return (
    <section className="grid sm:grid-cols-2 grid-cols-1 mb-16 gap-3">
      <div className="flex items-center gap-5">
        <div className="flex flex-col gap-3">
          {productViewImage.map((item) => (
            <div
              key={item._id}
              className="py-3 border border-fuchsia-700 cursor-pointer"
            >
              <Image
                src={item.picture}
                alt="demo Printer"
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center border border-gray-300 h-full">
          <div className="flex items-center justify-center ">
            {productViewImage.length > 0 && (
              <Image
                src={productViewImage[0].picture}
                alt="photo"
                width={400}
                height={350}
              />
            )}
          </div>
        </div>
      </div>
      {/* //=== */}
      <div className="right-side">
        <h2 className="[font-size:_clamp(12px,5vw,22px)]">
          {/* //{title} */}
          Brother HL - L3270CDW Single Function Color Laser Printer
        </h2>
        <div className="flex items-center my-5">
          <Image src={adidasBrand} alt="Adidas Brand" />
          <h6 className="text-[16px] text-black opacity-60 mr-5 ml-1">
            Brother
          </h6>
          <IconStar
            fill="currentColor"
            width={18}
            height={18}
            className="text-[#FF8A00] mr-1"
          />
          <p className="text-black opacity-50 text-[16px]">
            4.8 <span>(14 people)</span>
          </p>
        </div>
        <div className="flex items-center mb-5">
          <p className="[font-size:_clamp(14px,5vw,16px)] mr-3">
            Category: <span className="text-black opacity-70">Printer</span>
          </p>{" "}
          |
          <button className="flex items-center gap-2 ml-3 text-[#475156] [font-size:_clamp(13px,5vw,14px)]">
            <IconHeart className="text-[#E73C17]" />
            Add To Wishlist
          </button>
        </div>
        {/* //Color Section */}
        <div className="mb-5 flex">
          <ColorPickUp />
        </div>
        {/* //Range, Cart, Discount  */}
        <div>
          <PriceRangeEtc />
        </div>
      </div>
    </section>
  );
};

export default ProductView;
