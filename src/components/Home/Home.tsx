"use client";

import React from "react";
import { motion } from "framer-motion";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://github.com/aviihs",
    label: "GitHub",
    icon: AiFillGithub,
  },
  {
    href: "https://www.youtube.com/@avihs010",
    label: "YouTube",
    icon: AiOutlineYoutube,
  },
  {
    href: "https://www.linkedin.com/in/shiva-bhusal-9409152a6/",
    label: "LinkedIn",
    icon: FaLinkedinIn,
  },
  {
    href: "https://www.instagram.com/av_ihs_",
    label: "Instagram",
    icon: AiFillInstagram,
  },
];

function Home() {
  return (
    <section className="overflow-hidden">
      <div
        className="relative min-h-screen px-4 pt-28 text-white sm:px-6 lg:px-8"
        id="home"
      >
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(88,230,198,0.16),transparent_30%),radial-gradient(circle_at_84%_12%,rgba(199,112,240,0.18),transparent_30%),linear-gradient(135deg,#080A12_0%,#111827_48%,#160B24_100%)]" />
        <Particle />
        <div className="mx-auto grid max-w-7xl items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
              <h1 className="text-2xl font-bold text-white/80 sm:text-3xl">
                Hi There!{" "}
                <span
                  className="inline-block origin-[70%_70%] animate-[wave_2.1s_infinite]"
                  role="img"
                  aria-labelledby="wave"
                >
                  👋🏻
                </span>
              </h1>

              <h2 className="mt-5 text-5xl font-black leading-tight sm:text-7xl lg:text-8xl">
                I'M
                <strong className="block bg-gradient-to-r from-mintGlass via-white to-violetMist bg-clip-text text-transparent">
                  Shiva Bhusal.
                </strong>
              </h2>

              <div className="mt-8 text-2xl font-bold text-mintGlass sm:text-3xl">
                <Type />

                  <a
                    href="https://www.upwork.com/freelancers/~0180edf192f8c7cba8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-9 inline-flex items-center justify-center rounded-full bg-mintGlass px-6 py-3 text-base font-black text-ink no-underline shadow-glow transition hover:-translate-y-1 hover:bg-white"
                  >
                    Start a Project
                  </a>
                  
                </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-8 rounded-full bg-violetMist/20 blur-3xl" />
              <img
                src={homeLogo.src}
                alt="home pic"
                className="relative mx-auto max-h-[460px] w-full max-w-md"
              />
          </motion.div>
        </div>
      </div>
      <Home2 />

      <div className="px-4 pb-20 pt-12 text-center text-white sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
            <h2 className="text-3xl font-black">Find Me On</h2>
            <p className="mt-3 text-white/60">
              Feel free to <span className="text-mintGlass">connect </span>with me
            </p>
            <ul className="mt-8 flex list-none flex-wrap justify-center gap-4 p-0">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-xl text-white transition hover:-translate-y-1 hover:border-mintGlass/50 hover:text-mintGlass"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
