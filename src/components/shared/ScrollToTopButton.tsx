"use client"
import React, { useState, useEffect } from 'react';
import { IconArrowNarrowUp } from '@tabler/icons-react';

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      {showButton && (
        <div
          onClick={scrollToTop}
          className='fixed flex items-center justify-center w-[60px] h-[60px] right-10 bottom-[100px] rounded-full  bg-white  text-black  border group cursor-pointer '
        >
          <IconArrowNarrowUp className="text-black group-hover:text-fuchsia-800" width={30} height={30} stroke={1} />

        </div>
      )}
    </div>
  );
}

export default ScrollToTopButton;
