"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import BlogPrefetch from "../Blogs/BlogPrefetch";
import { fadeUp, scaleIn, viewportFadeUp } from "../../constants/animations";
import {
  SITE_AUTHOR,
  SOCIAL_LINKS,
  UPWORK_PROFILE_URL,
} from "../../constants/site";

function Home() {
  return (
    <section className="overflow-hidden">
      <BlogPrefetch />
      <div
        className="relative min-h-screen px-4 pt-28 text-white sm:px-6 lg:px-8"
        id="home"
      >
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(88,230,198,0.16),transparent_30%),radial-gradient(circle_at_84%_12%,rgba(199,112,240,0.18),transparent_30%),linear-gradient(135deg,#080A12_0%,#111827_48%,#160B24_100%)]" />
        <Particle />
        <div className="mx-auto grid max-w-7xl items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div {...fadeUp}>
              <div className="inline-flex items-center gap-2 rounded-full border border-mintGlass/20 bg-mintGlass/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-mintGlass">
                <span className="h-2 w-2 rounded-full bg-mintGlass shadow-[0_0_14px_rgba(88,230,198,0.9)]" />
                Software engineer · Product builder
              </div>

              <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
                I build digital products that feel{" "}
                <strong className="bg-gradient-to-r from-mintGlass via-white to-violetMist bg-clip-text text-transparent">
                  clear, fast, and human.
                </strong>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                I&apos;m {SITE_AUTHOR}, a full-stack and mobile developer from Kathmandu. I turn
                thoughtful ideas into dependable interfaces, APIs, and products people enjoy using.
              </p>

              <div className="mt-8 text-xl font-bold text-mintGlass sm:text-2xl">
                <Type />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/project"
                  className="inline-flex items-center justify-center rounded-full bg-mintGlass px-6 py-3 text-base font-black text-ink no-underline shadow-glow transition hover:-translate-y-1 hover:bg-white"
                >
                  Explore my work <span className="ml-2">↗</span>
                </Link>
                <a
                  href={UPWORK_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-base font-bold text-white no-underline transition hover:-translate-y-1 hover:border-mintGlass/45 hover:text-mintGlass"
                >
                  Start a conversation
                </a>
              </div>

              <p className="mt-7 text-sm font-semibold text-white/40">
                Kathmandu, Nepal <span className="mx-2 text-mintGlass/60">•</span> Web, mobile &amp; product engineering
              </p>
          </motion.div>

          <motion.div {...scaleIn} className="relative">
            <div className="absolute inset-8 rounded-full bg-violetMist/20 blur-3xl" />
              <img
                src={homeLogo.src}
                alt={`${SITE_AUTHOR} workspace illustration`}
                className="relative mx-auto max-h-[460px] w-full max-w-md"
              />
          </motion.div>
        </div>
      </div>
      <Home2 />

      <div className="px-4 pb-20 pt-12 text-center text-white sm:px-6 lg:px-8">
        <motion.div
          {...viewportFadeUp}
          className="mx-auto max-w-4xl"
        >
            <h2 className="text-3xl font-black sm:text-4xl">Let&apos;s build something useful.</h2>
            <p className="mt-3 text-white/60">
              Find me online, follow what I&apos;m building, or start a conversation.
            </p>
            <ul className="mt-8 flex list-none flex-wrap justify-center gap-4 p-0">
              {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
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
