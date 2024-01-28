"use client";

import React from "react";
import { IconInfoCircle } from "@tabler/icons-react";

const NeedHelp = () => {
  return (
    <div className="flex items-center justify-center gap-2 py-7">
      <IconInfoCircle /> <p>Need Help?</p>{" "}
      <div
        className="main-text-color underline"
        onClick={(e) => {
          window.location.href = "mailto:example@email.com";
        }}
      >
        Contact Us
      </div>
    </div>
  );
};

export default NeedHelp;
