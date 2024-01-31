"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const LogoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment index in a circular manner
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the interval as needed

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="logo-carousel">
      <div className="logo-wrapper">
        {images.map((logo, index) => (
          <div
            key={index}
            className={`logo-item ${index === currentIndex ? "active" : ""}`}
          >
            <Image src={logo} alt={`Logo ${index}`} height={70} width={120} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
