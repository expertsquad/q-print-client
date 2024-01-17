import { productViewStaticData } from "@/constants";
import Image from "next/image";
import freeShipping from "@/assets/free shipping.svg";
import customerSupport from "@/assets/customer support.svg";
import securePayment from "@/assets/secure payment.svg";
import moneyBack from "@/assets/money back.svg";

const QServices: React.FC = () => {
  return (
    <section className="border border-gray-300 mb-16 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 ">
        {productViewStaticData.map((item) => (
          <div key={item._id} className="py-10">
            {item.type === "freeShipping" && (
              <div className="flex items-center gap-6">
                <Image src={freeShipping} alt="Free Shipping" />
                <div className="flex gap-1 flex-col">
                  <h3 className="[font-size:_clamp(14px,5vw,15px)] font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-[#999] [font-size:_clamp(12px,5vw,14px)]">
                    {item.description}
                  </p>
                </div>
              </div>
            )}

            {item.type === "customerSupport" && (
              <div className="flex items-center gap-6">
                <Image src={customerSupport} alt="Customer Support" />
                <div className="flex gap-1 flex-col">
                  <h3 className="[font-size:_clamp(14px,5vw,15px)] font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-[#999] [font-size:_clamp(12px,5vw,14px)]">
                    {item.description}
                  </p>
                </div>
              </div>
            )}

            {item.type === "securePayment" && (
              <div className="flex items-center gap-6">
                <Image src={securePayment} alt="Secure Payment" />

                <div className="flex gap-1 flex-col">
                  <h3 className="[font-size:_clamp(14px,5vw,15px)] font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-[#999] [font-size:_clamp(12px,5vw,14px)]">
                    {item.description}
                  </p>
                </div>
              </div>
            )}

            {item.type === "guarantee" && (
              <div className="flex items-center gap-6">
                <Image src={moneyBack} alt="Money Back" />

                <div className="flex gap-1 flex-col">
                  <h3 className="[font-size:_clamp(14px,5vw,15px)] font-semibold">
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
