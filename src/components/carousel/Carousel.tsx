import Image from "next/image";

const Carousel = () => {
  const images = [
    "https://w7.pngwing.com/pngs/464/405/png-transparent-nike-just-do-it-logo-just-do-it-nike-swoosh-logo-brand-nike-logo-text-sticker-tagline-thumbnail.png",
    "https://freepngimg.com/thumb/logo/62859-logo-twitter-computer-icons-free-transparent-image-hq.png",
    "https://freepngimg.com/thumb/logo/62866-logo-whatsapp-computer-icons-free-download-png-hq.png",
    "https://freepngimg.com/thumb/logo/61746-graphic-priyanka-brand-chopra-design-graphics-logo.png",
    "https://freepngimg.com/thumb/logo/62841-social-logo-computer-icons-free-clipart-hq.png",
    "https://freepngimg.com/thumb/logo/62837-instagram-icons-photography-computer-logo-icon.png",
    "https://freepngimg.com/thumb/logo/62859-logo-twitter-computer-icons-free-transparent-image-hq.png",
    "https://freepngimg.com/thumb/logo/62866-logo-whatsapp-computer-icons-free-download-png-hq.png",
    "https://freepngimg.com/thumb/logo/61746-graphic-priyanka-brand-chopra-design-graphics-logo.png",
    "https://freepngimg.com/thumb/logo/62841-social-logo-computer-icons-free-clipart-hq.png",
  ];

  return (
    <div className=" w-full overflow-x-scroll ">
      <div className="  flex items-center justify-center h-[160px] md:h-[250px] overflow-x-scroll gap-10  ">
        {images.map((brand, index) => (
          <div key={index} className=" animated-carousel  ">
            <Image
              className="h-[100px] w-[70px]  "
              src={brand}
              alt="carousel brands logo"
              width={100}
              height={70}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
