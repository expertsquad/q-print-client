import Image from "next/image";

const Carousel = () => {
  const images = [
    "https://freepngimg.com/thumb/logo/62837-instagram-icons-photography-computer-logo-icon.png",
    "https://freepngimg.com/thumb/logo/62859-logo-twitter-computer-icons-free-transparent-image-hq.png",
    "https://freepngimg.com/thumb/logo/62866-logo-whatsapp-computer-icons-free-download-png-hq.png",
    "https://freepngimg.com/thumb/logo/61746-graphic-priyanka-brand-chopra-design-graphics-logo.png",
    "https://freepngimg.com/thumb/logo/62841-social-logo-computer-icons-free-clipart-hq.png",
  ];

  return (
    <div className=" w-full overflow-hidden">
      <div className="  whitespace-nowrap overflow-hidden  flex">
        {[...images, ...images, ...images].map((brand, index) => (
          <div key={index} className=" animated-carousel p-4 min-w-100">
            <Image
              className=" "
              src={brand}
              alt="carousel brands logo"
              width={70}
              height={50}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
