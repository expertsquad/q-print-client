"use client";
import React, { useCallback, useEffect, useState } from "react";

interface CountdownProps {
  endDate?: Date;
}

const CountdownTimer: React.FC<CountdownProps> = ({ endDate }) => {
  const calculateTimeLeft = useCallback(() => {
    let now = new Date().getTime();
    let distance = 0;

    if (endDate instanceof Date) {
      now = new Date().getTime();
      distance = endDate.getTime() - now;
    }

    const days = Math.max(Math.floor(distance / (1000 * 60 * 60 * 24)), 0);
    const hours = Math.max(
      Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      0
    );
    const minutes = Math.max(
      Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      0
    );
    const seconds = Math.max(Math.floor((distance % (1000 * 60)) / 1000), 0);

    return { days, hours, minutes, seconds };
  }, [endDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate, calculateTimeLeft]);

  return (
    <div className="flex items-center gap-5 md:gap-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="flex flex-col border p-2 rounded-lg items-center justify-center bg-white"
        >
          <span className="countdown text-sm md:text-base">
            {isNaN(value) ? "00" : String(value).padStart(2, "0")}
          </span>
          <p className="text-xs md:text-base font-bold bg-gradient-to-r from-[#C83B62]  to-[#7F35CD]  text-transparent bg-clip-text">
            {unit.toUpperCase()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
