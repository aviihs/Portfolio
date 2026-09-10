import { ReactNode } from "react";
import ChatWidget from "../Chat/ChatWidget";
import Footer from "../Footer";
import NavBar from "../Navbar";

function ClientShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <NavBar />
      {children}
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default ClientShell;
