"use client";

import { useEffect, useState } from "react";
import logo from "../Assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function scrollHandler() {
      updateNavbar(window.scrollY >= 20);
    }

    scrollHandler();
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const navItems = [
    {
      path: "/",
      label: "Home",
      icon: <AiOutlineHome style={{ marginBottom: "2px" }} />,
    },
    {
      path: "/about",
      label: "About",
      icon: <AiOutlineUser style={{ marginBottom: "2px" }} />,
    },
    {
      path: "/project",
      label: "Projects",
      icon: (
        <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />
      ),
    },
    {
      path: "/blogs",
      label: "Blogs",
      icon: <CgFileDocument style={{ marginBottom: "2px" }} />,
    },
    {
      path: "/resume",
      label: "Resume",
      icon: <CgFileDocument style={{ marginBottom: "2px" }} />,
    },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        navColour
          ? "border-b border-white/10 bg-ink/75 shadow-2xl shadow-black/20 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-3 text-white no-underline"
          onClick={() => updateExpanded(false)}
        >
          <img src={logo.src} className="h-9 w-auto" alt="Shiva Bhusal" />
          <span className="hidden text-sm font-black tracking-[0.18em] sm:inline">
            SHIVA
          </span>
        </Link>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-white md:hidden"
          aria-label="Toggle navigation"
          onClick={() => updateExpanded((prev) => !prev)}
        >
          <span className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-white transition ${
                expand ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition ${
                expand ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition ${
                expand ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        <div
          className={`absolute left-4 right-4 top-[76px] rounded-2xl border border-white/10 bg-ink/95 p-3 shadow-glow backdrop-blur-xl transition md:static md:block md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            expand
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0 md:pointer-events-auto md:translate-y-0 md:opacity-100"
          }`}
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-center">
            {navItems.map((item) => {
              const active = pathname === item.path;

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => updateExpanded(false)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold no-underline transition ${
                    active
                      ? "bg-mintGlass text-ink"
                      : "text-white/75 hover:bg-white/[0.07] hover:text-white"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              );
            })}

            <a
              href="https://github.com/aviihs/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-violetMist/40 bg-violetMist/15 px-4 py-2 text-sm font-bold text-white no-underline transition hover:bg-violetMist/25"
              aria-label="Open Shiva Bhusal portfolio repository on GitHub"
            >
              <CgGitFork className="text-lg" />
              <AiFillStar className="text-lg" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
