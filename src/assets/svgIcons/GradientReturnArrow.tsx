import React from "react";

const GradientReturnArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M16.875 10H3.125"
        stroke="url(#paint0_linear_1291_3146)"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.75 4.375L3.125 10L8.75 15.625"
        stroke="url(#paint1_linear_1291_3146)"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1291_3146"
          x1="3.125"
          y1="10.5"
          x2="17.1133"
          y2="11.7542"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C83B62" />
          <stop offset="1" stop-color="#7F35CD" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1291_3146"
          x1="3.125"
          y1="10"
          x2="8.89345"
          y2="10.0188"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C83B62" />
          <stop offset="1" stop-color="#7F35CD" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GradientReturnArrow;
