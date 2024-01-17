import React from "react";
import AddToCartButton from "../btn/AddToCartButton";

const ProductCard = () => {
  const productObject = [
    {
      images: [
        "https://freepngimg.com/thumb/logo/62837-instagram-icons-photography-computer-logo-icon.png",
        "https://freepngimg.com/thumb/logo/62859-logo-twitter-computer-icons-free-transparent-image-hq.png",
        "https://freepngimg.com/thumb/logo/62866-logo-whatsapp-computer-icons-free-download-png-hq.png",
        "https://freepngimg.com/thumb/logo/61746-graphic-priyanka-brand-chopra-design-graphics-logo.png",
      ],

      name: "Hp printer best quality printer",
      brandName: "Brother",
      price: 85,
      discount: 20,
      rating: 4,
    },
    {
      images: [
        "https://freepngimg.com/thumb/logo/62837-instagram-icons-photography-computer-logo-icon.png",
        "https://freepngimg.com/thumb/logo/62859-logo-twitter-computer-icons-free-transparent-image-hq.png",
        "https://freepngimg.com/thumb/logo/62866-logo-whatsapp-computer-icons-free-download-png-hq.png",
        "https://freepngimg.com/thumb/logo/61746-graphic-priyanka-brand-chopra-design-graphics-logo.png",
      ],

      name: "Priniter mb2589 ",
      brandName: "Brother",
      price: 89,
      discount: 12,
      rating: 1,
    },
    {
      images: [
        "https://freepngimg.com/thumb/logo/62837-instagram-icons-photography-computer-logo-icon.png",
        "https://freepngimg.com/thumb/logo/62859-logo-twitter-computer-icons-free-transparent-image-hq.png",
        "https://freepngimg.com/thumb/logo/62866-logo-whatsapp-computer-icons-free-download-png-hq.png",
        "https://freepngimg.com/thumb/logo/61746-graphic-priyanka-brand-chopra-design-graphics-logo.png",
      ],

      name: "Product demo titile here",
      brandName: "Brother",
      price: 20,
      discount: 8,
      rating: 3,
    },
    {
      images: [
        "https://freepngimg.com/thumb/logo/62837-instagram-icons-photography-computer-logo-icon.png",
        "https://freepngimg.com/thumb/logo/62859-logo-twitter-computer-icons-free-transparent-image-hq.png",
        "https://freepngimg.com/thumb/logo/62866-logo-whatsapp-computer-icons-free-download-png-hq.png",
        "https://freepngimg.com/thumb/logo/61746-graphic-priyanka-brand-chopra-design-graphics-logo.png",
      ],

      name: "Here is another demo title",
      brandName: "Brother",
      price: 89,
      discount: 50,
      rating: 3,
    },
    {
      images: [
        "https://freepngimg.com/thumb/logo/62837-instagram-icons-photography-computer-logo-icon.png",
        "https://freepngimg.com/thumb/logo/62859-logo-twitter-computer-icons-free-transparent-image-hq.png",
        "https://freepngimg.com/thumb/logo/62866-logo-whatsapp-computer-icons-free-download-png-hq.png",
        "https://freepngimg.com/thumb/logo/61746-graphic-priyanka-brand-chopra-design-graphics-logo.png",
      ],

      name: "More porer na ki likhum",
      brandName: "Brother",
      price: 112,
      discount: 23,
      rating: 5,
    },
    {
      images: [
        "https://freepngimg.com/thumb/logo/62837-instagram-icons-photography-computer-logo-icon.png",
        "https://freepngimg.com/thumb/logo/62859-logo-twitter-computer-icons-free-transparent-image-hq.png",
        "https://freepngimg.com/thumb/logo/62866-logo-whatsapp-computer-icons-free-download-png-hq.png",
        "https://freepngimg.com/thumb/logo/61746-graphic-priyanka-brand-chopra-design-graphics-logo.png",
      ],

      name: "Onk kicu likhte hobe",
      brandName: "Brother",
      price: 852,
      discount: 400,
      rating: 4,
    },
    {
      images: [
        "https://freepngimg.com/thumb/logo/62837-instagram-icons-photography-computer-logo-icon.png",
        "https://freepngimg.com/thumb/logo/62859-logo-twitter-computer-icons-free-transparent-image-hq.png",
        "https://freepngimg.com/thumb/logo/62866-logo-whatsapp-computer-icons-free-download-png-hq.png",
        "https://freepngimg.com/thumb/logo/61746-graphic-priyanka-brand-chopra-design-graphics-logo.png",
      ],

      name: "Ai j nen onek kicu likhlam",
      brandName: "Brother",
      price: 20,
      discount: 3,
      rating: 1,
    },
    {
      images: [
        "https://freepngimg.com/thumb/logo/62837-instagram-icons-photography-computer-logo-icon.png",
        "https://freepngimg.com/thumb/logo/62859-logo-twitter-computer-icons-free-transparent-image-hq.png",
        "https://freepngimg.com/thumb/logo/62866-logo-whatsapp-computer-icons-free-download-png-hq.png",
        "https://freepngimg.com/thumb/logo/61746-graphic-priyanka-brand-chopra-design-graphics-logo.png",
      ],

      name: "Awesome printer in qater",
      brandName: "Brother",
      price: 2589,
      discount: 256,
      rating: 5,
    },
    {
      images: [
        "https://freepngimg.com/thumb/logo/62837-instagram-icons-photography-computer-logo-icon.png",
        "https://freepngimg.com/thumb/logo/62859-logo-twitter-computer-icons-free-transparent-image-hq.png",
        "https://freepngimg.com/thumb/logo/62866-logo-whatsapp-computer-icons-free-download-png-hq.png",
        "https://freepngimg.com/thumb/logo/61746-graphic-priyanka-brand-chopra-design-graphics-logo.png",
      ],

      name: "Another Printer here ",
      brandName: "Brother",
      price: 458,
      discount: 203,
      rating: 3,
    },
    {
      images: [
        "https://freepngimg.com/thumb/logo/62837-instagram-icons-photography-computer-logo-icon.png",
        "https://freepngimg.com/thumb/logo/62859-logo-twitter-computer-icons-free-transparent-image-hq.png",
        "https://freepngimg.com/thumb/logo/62866-logo-whatsapp-computer-icons-free-download-png-hq.png",
        "https://freepngimg.com/thumb/logo/61746-graphic-priyanka-brand-chopra-design-graphics-logo.png",
      ],

      name: "Something coming very soon",
      brandName: "Brother",
      price: 896,
      discount: 205,
      rating: 4,
    },
  ];

  return (
    <div className="main-product-card">
      {productObject?.map((product, i) => (
        <div
          key={i}
          className=" border-[1px] hover:border-fuchsia-700 rounded-lg p-5 group "
        >
          <div>here is our img</div>
          <div>
            <h3 className="[font-size:_clamp(0.8em,4vw,1.2em)] font-bold line-clamp-2">
              {product?.name}
            </h3>
            <p className="text-md text-gray-500"> {product?.brandName}</p>
            <div>product review coming</div>

            <div className="flex items-center justify-start gap-2">
              <h4 className="[font-size:_clamp(0.8em,4vw,1.5em)] main-text-color font-md">
                {product?.price} QAR
              </h4>
              <del className="text-md text text-gray-500 ">
                {product?.discount} QAR
              </del>
            </div>
            <AddToCartButton />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
