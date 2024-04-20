"use client";
import React, { useEffect, useState } from "react";

interface CountdownProps {
  endDate?: Date;
}

const CountdownTimer: React.FC<CountdownProps> = ({ endDate }) => {
  const calculateTimeLeft = () => {
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
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="flex flex-col border p-3 rounded-lg items-center justify-center bg-white"
        >
          <span className="countdown [font-size:_clamp(0.9em,4vw,1.5em)]">
            {value}
          </span>
          <p className="[font-size:_clamp(0.6em,4vw,0.8em)] font-bold bg-gradient-to-r from-[#C83B62]  to-[#7F35CD]  text-transparent bg-clip-text">
            {unit.toUpperCase()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
