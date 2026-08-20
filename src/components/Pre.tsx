"use client";

import React from "react";
import preloader from "../Assets/pre.svg";

function Pre({ load }: { load: boolean }) {
  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[999999] grid place-items-center bg-[#080A12] transition-opacity duration-500 ${
        load ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={preloader.src}
        alt=""
        className="h-24 w-24 animate-soft-pulse"
      />
    </div>
  );
}

export default Pre;
