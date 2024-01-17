import Image from "next/image";
import adidasBrand from "@/assets/adidas brand.svg";
import { IconStar, IconHeart } from "@tabler/icons-react";

const ProductView = () => {
  return (
    <section className="grid sm:grid-cols-2 grid-cols-1 ">
      <div className="left-side">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestias
        nemo rem officiis cum assumenda omnis! Ea commodi aut nostrum quam
        labore officiis optio fugiat reiciendis? Expedita eligendi eos officiis
        facere exercitationem commodi vero tempore ipsa porro sapiente? Vero et
        quia odit distinctio, quidem earum consequatur numquam vitae! Doloremque
        laudantium cum quisquam, delectus at culpa! Similique nihil animi dolore
        ab, esse omnis tempora eum ipsam consequatur dolor facilis deleniti
        veniam doloribus rerum reiciendis ea harum rem vero iste, beatae odio
        explicabo? Ullam soluta minus iure accusantium sapiente quo quas quod,
        sequi eaque quis nobis atque sit ex deserunt molestiae sunt?
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
        <div className="flex items-center flex-wrap">
          <h3 className="main-text-color [font-size:_clamp(20px,5vw,26px)] font-semibold mr-2">
            {/* //Price */}
            1500.00 <small className="uppercase">qar</small>
          </h3>
          <del className="text-[#B3B3B3] [font-size:_clamp(14px,5vw,18px)] mr-5">
            1800.00 QAR
          </del>
          <span className="[font-size:_clamp(14px,5vw,16px)] text-white main-bg-color py-1 px-3 rounded-md">
            20% OFF
          </span>
        </div>
        {/* //range */}
        <div>
          <p>
            Buy <span>8</span> item more to get off <b>15% Extra!</b>
          </p>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductView;
