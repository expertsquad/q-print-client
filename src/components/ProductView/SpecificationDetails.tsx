import Link from "next/link";
import React from "react";
import SpecificationCard from "./SpecificationCard";
import { productViewMenus } from "@/constants";
import ProductSpecification from "./ProductSpecification";
import ProductReview from "./ProductReview";

const SpecificationDetails = () => {
  return (
    <section>
      <div className="overflow-x-auto flex no-scrollbar mb-12 border-b">
        {productViewMenus.map((item) => (
          <Link
            className="text-[16px] md:text-[18px] text-black opacity-70 focus:text-fuchsia-600 active:text-fuchsia-600 mr-7 hover:text-fuchsia-600 hover:border-fuchsia-600 shrink-0 overflow-scroll text-nowrap no-scrollbar border-b-2 border-transparent"
            key={item._id}
            href={item.hashtag}
            // href={`/${item.toLocaleLowerCase()}`} //for id
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div>
        <div className="flex justify-between">
          <div id="specification">
            <ProductSpecification />
          </div>
          <div className=" ">
            <SpecificationCard />
          </div>
        </div>

        {/* --warranty */}
        <div className="warranty mb-14">
          <h2 className="text-[18px] md:text-[24px] font-semibold mb-7">
            Warranty
          </h2>
          <h6 className="main-text-color text-[14px] md:text-[18px] text-wrap">
            Apple I phone 14 pro 2 Year Warranty Support
          </h6>
          <p className="text-[14px] md:text-[18px]">
            our Warranty Policy page for detailed information about our warranty
            coverage
          </p>
        </div>
        {/* --description */}
        <div className="description mb-7">
          <h2 className="text-[18px] md:text-[24px] font-semibold mb-7">
            Description
          </h2>
          <p className="text-wrap">
            Printing is a process for mass reproducing text and images using a
            master form or template. The earliest non-paper products involving
            printing include cylinder seals and objects such as the Cyrus
            Cylinder and the Cylinders of Nabonidus. Printing is a process for
            mass reproducing text and images using a master form or template.
            The earliest non-paper products involving printing include cylinder
            seals and objects such as the Cyrus Cylinder and the Cylinders of
            Nabonidus Printing is a process for mass reproducing text and images
            using a master form or template. The earliest non-paper products
            involving printing include cylinder seals and objects such as the
            Cyrus Cylinder and the Cylinders of NabonidusPrinting is a process
            for mass reproducing text and images using a master form or
            template. The earliest non-paper products involving printing include
            cylinder seals and objects such as the Cyrus Cylinder and the
            Cylinders of Nabonidus{" "}
          </p>
        </div>
        {/* --Product Review */}
        <div>
          <ProductReview />
        </div>
      </div>
    </section>
  );
};

export default SpecificationDetails;
