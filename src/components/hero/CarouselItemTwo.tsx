import React, { useState, useEffect } from "react";

const CarouselItemTwo = ({ item, index, sliderArray }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const sliderWrapper = document.querySelector(".slider-wrapper");
    if (sliderWrapper instanceof HTMLElement) {
      setCardWidth(item.length > 0 ? item[0].offsetWidth : 0);
      sliderWrapper.style.transform = `translateX(-${
        currentIndex * cardWidth
      }px)`;
    }
  }, [currentIndex, cardWidth, item]);

  const slideTo = (index: any) => {
    setCurrentIndex(index);
  };

  const slideNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % item.length);
  };
  return (
    <div className="slider">
      <div className="slider-wrapper">
        {item.map((card: any, index: any) => (
          <div key={index} className="card">
            {card}
          </div>
        ))}
      </div>
      <div className="indicators">
        {item.map((item: any, index: any) => (
          <button
            key={index}
            className={`indicator-btn ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => slideTo(index)}
          ></button>
        ))}
      </div>
      <button className="next-btn" onClick={slideNext}>
        Next
      </button>
    </div>
  );
};

export default CarouselItemTwo;
