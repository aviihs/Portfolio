"use client";

import { ReactNode, useEffect, useState } from "react";
import Footer from "../Footer";
import NavBar from "../Navbar";
import Preloader from "../Pre";

function ClientShell({ children }: { children: ReactNode }) {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default ClientShell;
