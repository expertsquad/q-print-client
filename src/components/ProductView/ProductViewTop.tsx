// Jaker Hossain
//Product View page breadcrumbs

import Breadcrumbs from "../shared/Breadcrumbs";

const ProductViewTop = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "Category", href: "/category" },
    { label: "Printer", href: "/printer" },
    { label: "Brother", href: "/brother" },
  ];

  return (
    <div>
      <Breadcrumbs links={links} />
    </div>
  );
};

export default ProductViewTop;
