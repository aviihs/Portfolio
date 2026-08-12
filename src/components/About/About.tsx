"use client";

import React from "react";
import { motion } from "framer-motion";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { BsArrowUpRight } from "react-icons/bs";
import {
  ABOUT_COPY,
  ABOUT_HIGHLIGHTS,
  ABOUT_METRICS,
} from "../../constants/about";
import {
  fadeUp,
  scaleIn,
  viewportFadeUp,
} from "../../constants/animations";

function About() {
  return (
    <>
      <Particle />
      <main className="min-h-screen overflow-hidden px-4 py-28 text-white sm:px-6 lg:px-8">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_10%,rgba(88,230,198,0.16),transparent_28%),radial-gradient(circle_at_88%_12%,rgba(199,112,240,0.18),transparent_28%),radial-gradient(circle_at_70%_52%,rgba(247,200,115,0.1),transparent_26%),linear-gradient(135deg,#080A12_0%,#111827_48%,#160B24_100%)]" />
        <div className="mx-auto max-w-7xl">
          <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              {...fadeUp}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-mintGlass backdrop-blur">
                {ABOUT_COPY.eyebrow}
              </span>
              <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight sm:text-7xl">
                {ABOUT_COPY.titleLead}{" "}
                <strong className="bg-gradient-to-r from-mintGlass via-white to-violetMist bg-clip-text text-transparent">
                  {ABOUT_COPY.titleAccent}
                </strong>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                {ABOUT_COPY.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/project"
                  className="inline-flex items-center gap-2 rounded-full bg-mintGlass px-5 py-3 font-black text-ink no-underline transition hover:-translate-y-1 hover:bg-white"
                >
                  {ABOUT_COPY.primaryCta} <BsArrowUpRight />
                </a>
                <a
                  href="/resume"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 font-bold text-white no-underline transition hover:border-mintGlass/45 hover:text-mintGlass"
                >
                  {ABOUT_COPY.secondaryCta} <BsArrowUpRight />
                </a>
              </div>
            </motion.div>
            <motion.div
              {...scaleIn}
              className="relative mx-auto w-full max-w-lg"
            >
              <div className="absolute inset-6 rounded-[2rem] bg-mintGlass/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
                <img src={laptopImg.src} alt="about" className="mx-auto w-full max-w-sm" />
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {ABOUT_METRICS.map(([value, label]) => (
                    <motion.div
                      key={label}
                      whileHover={{ y: -4 }}
                      className="rounded-2xl border border-white/10 bg-ink/45 p-4"
                    >
                      <div className="text-lg font-black text-mintGlass">
                        {value}
                      </div>
                      <div className="mt-1 text-xs text-white/50">{label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          <section className="mt-16 grid gap-5 md:grid-cols-3">
            {ABOUT_HIGHLIGHTS.map((item, index) => {
              const Icon = item.icon;

              return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="rounded-[1.35rem] border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-mintGlass text-xl text-ink">
                  <Icon />
                </div>
                <h3 className="mt-5 text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">
                  {item.text}
                </p>
              </motion.article>
              );
            })}
          </section>

          <section className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              {...viewportFadeUp}
            >
              <h2 className="mb-5 text-3xl font-black sm:text-5xl">
                {ABOUT_COPY.storyTitleLead}{" "}
                <strong className="text-mintGlass">
                  {ABOUT_COPY.storyTitleAccent}
                </strong>
              </h2>
              <p className="text-sm leading-7 text-white/60 sm:text-base">
                {ABOUT_COPY.story}
              </p>
            </motion.div>
            <motion.div
              {...viewportFadeUp}
            >
              <Aboutcard />
            </motion.div>
          </section>

          <h2 className="mb-8 mt-20 text-center text-3xl font-black sm:text-5xl">
            {ABOUT_COPY.skillTitleLead}{" "}
            <strong className="text-mintGlass">
              {ABOUT_COPY.skillTitleAccent}{" "}
            </strong>
          </h2>
 
          <Techstack />

          <h2 className="mb-8 mt-8 text-center text-3xl font-black sm:text-5xl">
            <strong className="text-mintGlass">
              {ABOUT_COPY.toolsTitleLead}
            </strong>{" "}
            {ABOUT_COPY.toolsTitleRest}
          </h2>
          <Toolstack />

          <Github />
        </div>
      </main>
    </>
  );
}

export default About;
