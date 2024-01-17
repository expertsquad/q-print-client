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

      name: "Product demo titile here",
      description: "Product demo titile here we will addd",
      price: 100,
      discount: 20,
      rating: 4,
    },
  ];

  return (
    <div className="main-product-card hover:border-[1px] hover:border-fuchsia-700 rounded-lg ">
      <div>here is our img</div>
      <div>
        <h3>Demo titel here </h3>
        <p> Here is our description for title</p>
        <div>product review coming</div>

        <div>
          <strong>86.33 QAR</strong>
          <p>100 QAR</p>
        </div>
        <AddToCartButton />
      </div>
    </div>
  );
};

export default ProductCard;
