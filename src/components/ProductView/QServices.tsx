import { productViewStaticData } from "@/constants";
import Image from "next/image";
import freeShipping from "@/assets/free shipping.svg";
import customerSupport from "@/assets/customer support.svg";
import securePayment from "@/assets/secure payment.svg";
import moneyBack from "@/assets/money back.svg";

const QServices: React.FC = () => {
  return (
    <section className="border border-gray-300 mb-16 ">
      <div className="flex items-center justify-between md:flex-row flex-col px-5 ">
        {productViewStaticData.map((item) => (
          <div key={item._id} className="py-5 md:py-10">
            {item.type === "freeShipping" && (
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
                <Image src={freeShipping} alt="Free Shipping" />
                <div className="flex gap-1 flex-col">
                  <h3 className="[font-size:_clamp(14px,5vw,15px)] font-semibold text-center md:text-start">
                    {item.title}
                  </h3>
                  <p className="text-[#999] [font-size:_clamp(12px,5vw,14px)]">
                    {item.description}
                  </p>
                </div>
              </div>
            )}

            {item.type === "customerSupport" && (
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
                <Image src={customerSupport} alt="Customer Support" />
                <div className="flex gap-1 flex-col">
                  <h3 className="[font-size:_clamp(14px,5vw,15px)] font-semibold text-center md:text-start">
                    {item.title}
                  </h3>
                  <p className="text-[#999] [font-size:_clamp(12px,5vw,14px)]">
                    {item.description}
                  </p>
                </div>
              </div>
            )}

            {item.type === "securePayment" && (
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
                <Image src={securePayment} alt="Secure Payment" />

                <div className="flex gap-1 flex-col">
                  <h3 className="[font-size:_clamp(14px,5vw,15px)] font-semibold text-center md:text-start">
                    {item.title}
                  </h3>
                  <p className="text-[#999] [font-size:_clamp(12px,5vw,14px)]">
                    {item.description}
                  </p>
                </div>
              </div>
            )}

            {item.type === "guarantee" && (
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
                <Image src={moneyBack} alt="Money Back" />

                <div className="flex gap-1 flex-col">
                  <h3 className="[font-size:_clamp(14px,5vw,15px)] font-semibold text-center md:text-start">
                    {item.title}
                  </h3>
                  <p className="text-[#999] [font-size:_clamp(12px,5vw,14px)]">
                    {item.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default QServices;
