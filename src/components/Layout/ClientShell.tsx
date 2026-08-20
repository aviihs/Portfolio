"use client";

import { ReactNode } from "react";
import Footer from "../Footer";
import NavBar from "../Navbar";

function ClientShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

export default ClientShell;
