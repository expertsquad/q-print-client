import React from "react";
import ProductCard from "./ProductCard";

const ProductGridView = () => {
  const productObject = [
    {
      images: [
        "https://www.transparentpng.com/thumb/printer/vqVm4v-laser-printer-lpt-paper-print-printer-printing-icon.png",
        "https://www.transparentpng.com/thumb/printer/hGdOI8-epson-printer-clipart-photos.png",
        "https://www.transparentpng.com/thumb/printer/TdXPfS-canon-printer-icon.png",
        "https://www.transparentpng.com/thumb/printer/7udIJT-canon-printer-transparent.png",
      ],

      name: "Hp printer best quality printer",
      brandName: "Brother",
      price: 85,
      discount: 20,
      rating: 4,
    },
    {
      images: [
        "https://www.transparentpng.com/thumb/printer/hGdOI8-epson-printer-clipart-photos.png",
        "https://www.transparentpng.com/thumb/printer/vqVm4v-laser-printer-lpt-paper-print-printer-printing-icon.png",
        "https://www.transparentpng.com/thumb/printer/7udIJT-canon-printer-transparent.png",
        "https://www.transparentpng.com/thumb/printer/TdXPfS-canon-printer-icon.png",
      ],

      name: "Priniter mb2589 ",
      brandName: "Brother",
      price: 89,
      discount: 12,
      rating: 1,
    },
    {
      images: [
        "https://www.transparentpng.com/thumb/printer/7udIJT-canon-printer-transparent.png",
        "https://www.transparentpng.com/thumb/printer/vqVm4v-laser-printer-lpt-paper-print-printer-printing-icon.png",
        "https://www.transparentpng.com/thumb/printer/hGdOI8-epson-printer-clipart-photos.png",
        "https://www.transparentpng.com/thumb/printer/TdXPfS-canon-printer-icon.png",
      ],

      name: "Hp printer best quality printer",
      brandName: "Brother",
      price: 85,
      discount: 20,
      rating: 4,
    },
    {
      images: [
        "https://www.transparentpng.com/thumb/printer/7udIJT-canon-printer-transparent.png",
        "https://www.transparentpng.com/thumb/printer/iqV2Vo-printer-free-download-transparent.png",
        "https://www.transparentpng.com/thumb/printer/TdXPfS-canon-printer-icon.png",
        "https://www.transparentpng.com/thumb/printer/iqV2Vo-printer-free-download-transparent.png",
      ],

      name: "Product demo titile here",
      brandName: "Brother",
      price: 20,
      discount: 8,
      rating: 3,
    },
    {
      images: [
        "https://www.transparentpng.com/thumb/printer/7udIJT-canon-printer-transparent.png",
        "https://www.transparentpng.com/thumb/printer/iqV2Vo-printer-free-download-transparent.png",
        "https://www.transparentpng.com/thumb/printer/TdXPfS-canon-printer-icon.png",
        "https://www.transparentpng.com/thumb/printer/iqV2Vo-printer-free-download-transparent.png",
      ],

      name: "Here is another demo title",
      brandName: "Brother",
      price: 89,
      discount: 50,
      rating: 3,
    },
    {
      images: [
        "https://www.transparentpng.com/thumb/printer/7udIJT-canon-printer-transparent.png",
        "https://www.transparentpng.com/thumb/printer/iqV2Vo-printer-free-download-transparent.png",
        "https://www.transparentpng.com/thumb/printer/TdXPfS-canon-printer-icon.png",
        "https://www.transparentpng.com/thumb/printer/iqV2Vo-printer-free-download-transparent.png",
      ],

      name: "Hp printer best quality printer",
      brandName: "Brother",
      price: 85,
      discount: 20,
      rating: 4,
    },
    {
      images: [
        "https://www.transparentpng.com/thumb/printer/7udIJT-canon-printer-transparent.png",
        "https://www.transparentpng.com/thumb/printer/iqV2Vo-printer-free-download-transparent.png",
        "https://www.transparentpng.com/thumb/printer/TdXPfS-canon-printer-icon.png",
        "https://www.transparentpng.com/thumb/printer/iqV2Vo-printer-free-download-transparent.png",
      ],

      name: "More porer na ki likhum",
      brandName: "Brother",
      price: 112,
      discount: 23,
      rating: 5,
    },
    {
      images: [
        "https://www.transparentpng.com/thumb/printer/7udIJT-canon-printer-transparent.png",
        "https://www.transparentpng.com/thumb/printer/iqV2Vo-printer-free-download-transparent.png",
        "https://www.transparentpng.com/thumb/printer/TdXPfS-canon-printer-icon.png",
        "https://www.transparentpng.com/thumb/printer/iqV2Vo-printer-free-download-transparent.png",
      ],

      name: "Onk kicu likhte hobe",
      brandName: "Brother",
      price: 852,
      discount: 400,
      rating: 4,
    },
    {
      images: [
        "https://www.transparentpng.com/thumb/printer/7udIJT-canon-printer-transparent.png",
        "https://www.transparentpng.com/thumb/printer/iqV2Vo-printer-free-download-transparent.png",
        "https://www.transparentpng.com/thumb/printer/TdXPfS-canon-printer-icon.png",
        "https://www.transparentpng.com/thumb/printer/iqV2Vo-printer-free-download-transparent.png",
      ],

      name: "Ai j nen onek kicu likhlam",
      brandName: "Brother",
      price: 20,
      discount: 3,
      rating: 1,
    },
    {
      images: [
        "https://www.transparentpng.com/thumb/printer/7udIJT-canon-printer-transparent.png",
        "https://www.transparentpng.com/thumb/printer/iqV2Vo-printer-free-download-transparent.png",
        "https://www.transparentpng.com/thumb/printer/TdXPfS-canon-printer-icon.png",
        "https://www.transparentpng.com/thumb/printer/iqV2Vo-printer-free-download-transparent.png",
      ],

      name: "Awesome printer in qater",
      brandName: "Brother",
      price: 2589,
      discount: 256,
      rating: 5,
    },
    {
      images: [
        "https://www.transparentpng.com/thumb/printer/7udIJT-canon-printer-transparent.png",
        "https://www.transparentpng.com/thumb/printer/iqV2Vo-printer-free-download-transparent.png",
        "https://www.transparentpng.com/thumb/printer/TdXPfS-canon-printer-icon.png",
        "https://www.transparentpng.com/thumb/printer/iqV2Vo-printer-free-download-transparent.png",
      ],

      name: "Another Printer here ",
      brandName: "Brother",
      price: 458,
      discount: 203,
      rating: 3,
    },
    {
      images: [
        "https://www.transparentpng.com/thumb/printer/7udIJT-canon-printer-transparent.png",
        "https://www.transparentpng.com/thumb/printer/iqV2Vo-printer-free-download-transparent.png",
        "https://www.transparentpng.com/thumb/printer/TdXPfS-canon-printer-icon.png",
        "https://www.transparentpng.com/thumb/printer/iqV2Vo-printer-free-download-transparent.png",
      ],

      name: "Something coming very soon",
      brandName: "Brother",
      price: 896,
      discount: 205,
      rating: 4,
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 w-full">
      {productObject?.map((product, i) => (
        <ProductCard key={i} product={product} />
      ))}
    </div>
  );
};

export default ProductGridView;
