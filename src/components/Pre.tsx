"use client";

import React from "react";

function Pre({ load }: { load: boolean }) {
  return <div id={load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;
