"use client";

import React, { useEffect } from "react";

const Confetti = () => {
  useEffect(() => {
    const container = document.getElementById("confetti-container");

    if (!container) {
      console.error("Container element not found");
      return;
    }

    const createConfetti = () => {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;

      // Add different types of confetti
      const confettiTypes = ["type1", "type2", "type3"];
      const randomType =
        confettiTypes[Math.floor(Math.random() * confettiTypes.length)];
      confetti.classList.add(randomType);

      confetti.addEventListener("animationend", () => {
        confetti.remove();
      });

      container.appendChild(confetti);
    };

    const interval = setInterval(createConfetti, 500);

    return () => clearInterval(interval);
  }, []);

  return <div id="confetti-container" />;
};

export default Confetti;
