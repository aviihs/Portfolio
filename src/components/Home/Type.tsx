"use client";

import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-stack web developer",
          "React & Next.js engineer",
          "Mobile app developer",
          "Product-minded builder",
          "WordPress & API specialist",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
