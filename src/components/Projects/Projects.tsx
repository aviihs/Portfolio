"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { FaMusic } from "react-icons/fa";
import { BsArrowUpRight, BsStars } from "react-icons/bs";
import { fadeUp, viewportFadeUp } from "../../constants/animations";
import {
  FEATURED_PROJECT,
  MUSIC_PROJECT,
  PROJECT_COPY,
  PROJECT_ITEMS,
  PROJECT_STATS,
} from "../../constants/projects";

function Projects() {
  return (
    <main className="min-h-screen overflow-hidden px-4 py-28 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_10%,rgba(88,230,198,0.16),transparent_28%),radial-gradient(circle_at_92%_6%,rgba(247,200,115,0.12),transparent_24%),radial-gradient(circle_at_76%_36%,rgba(199,112,240,0.16),transparent_28%),linear-gradient(135deg,#080A12_0%,#111827_48%,#160B24_100%)]" />
      <Particle />
      <div className="mx-auto max-w-7xl">
        <motion.section
          {...fadeUp}
          className="mb-14 grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-amberSoft backdrop-blur">
              <BsStars />
              {PROJECT_COPY.eyebrow}
            </span>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight sm:text-7xl">
              {PROJECT_COPY.titleLead}{" "}
              <strong className="bg-gradient-to-r from-mintGlass via-white to-violetMist bg-clip-text text-transparent">
                {PROJECT_COPY.titleAccent}
              </strong>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              {PROJECT_COPY.description}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {PROJECT_STATS.map(([value, label]) => (
              <motion.div
                key={label}
                whileHover={{ x: 6 }}
                className="rounded-[1.1rem] border border-white/10 bg-white/[0.055] p-4 backdrop-blur-xl"
              >
                <div className="text-2xl font-black text-mintGlass">
                  {value}
                </div>
                <div className="mt-1 text-sm text-white/55">{label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          {...viewportFadeUp}
          className="mb-6 rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6"
        >
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative overflow-hidden rounded-[1.2rem]">
              <img
                src={FEATURED_PROJECT.image.src}
                alt={FEATURED_PROJECT.imageAlt}
                className="h-full min-h-72 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="mb-4 w-fit rounded-full bg-mintGlass px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-ink">
                {PROJECT_COPY.featuredLabel}
              </span>
              <h2 className="text-3xl font-black sm:text-5xl">
                {FEATURED_PROJECT.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
                {FEATURED_PROJECT.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {FEATURED_PROJECT.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-bold text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={FEATURED_PROJECT.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-mintGlass px-5 py-3 font-black text-ink no-underline transition hover:-translate-y-1 hover:bg-white"
                >
                  {PROJECT_COPY.viewLive} <BsArrowUpRight />
                </a>
                <a
                  href={FEATURED_PROJECT.ghLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 font-bold text-white no-underline transition hover:border-mintGlass/45 hover:text-mintGlass"
                >
                  {PROJECT_COPY.sourceCode} <BsArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {PROJECT_ITEMS.map((project) => (
            <ProjectCard
              key={project.title}
              isBlog={false}
              {...project}
            />
          ))}
        </div>

      <section className="pt-24">
          <motion.div
            {...viewportFadeUp}
            className="text-center"
          >
            <h2 className="text-4xl font-black sm:text-6xl">
              {PROJECT_COPY.musicTitleLead}{" "}
              <strong className="inline-flex items-center gap-3 text-amberSoft">
                {PROJECT_COPY.musicTitleAccent} <FaMusic className="text-3xl" />
              </strong>
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-white/65">
              {PROJECT_COPY.musicDescription}
            </p>
          </motion.div>

          <div className="mx-auto mt-10 max-w-lg">
            <ProjectCard isBlog={false} {...MUSIC_PROJECT} />
          </div>
      </section>
      </div>
    </main>
  );
}

export default Projects;
