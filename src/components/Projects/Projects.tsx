"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import bike from "../../Assets/Projects/bike.png";
import mobile from "../../Assets/Projects/mobile.png";
import { FaMusic } from "react-icons/fa";
import { BsArrowUpRight, BsStars } from "react-icons/bs";

function Projects() {
  const projectStats = [
    ["04+", "Shipped works"],
    ["Full-stack", "Web + mobile"],
    ["Creative", "Music + product"],
  ];

  return (
    <main className="min-h-screen overflow-hidden px-4 py-28 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_10%,rgba(88,230,198,0.16),transparent_28%),radial-gradient(circle_at_92%_6%,rgba(247,200,115,0.12),transparent_24%),radial-gradient(circle_at_76%_36%,rgba(199,112,240,0.16),transparent_28%),linear-gradient(135deg,#080A12_0%,#111827_48%,#160B24_100%)]" />
      <Particle />
      <div className="mx-auto max-w-7xl">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-14 grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-amberSoft backdrop-blur">
              <BsStars />
              Selected work
            </span>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight sm:text-7xl">
              Digital products with a{" "}
              <strong className="bg-gradient-to-r from-mintGlass via-white to-violetMist bg-clip-text text-transparent">
                polished pulse.
              </strong>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              A focused collection of web, mobile, backend, and creative work,
              redesigned with cleaner hierarchy, richer cards, and smoother
              motion.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {projectStats.map(([value, label]) => (
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
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-6 rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6"
        >
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative overflow-hidden rounded-[1.2rem]">
              <img
                src={bike.src}
                alt="Bike Management System preview"
                className="h-full min-h-72 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="mb-4 w-fit rounded-full bg-mintGlass px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-ink">
                Featured case
              </span>
              <h2 className="text-3xl font-black sm:text-5xl">
                Bike Management System
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
                A practical Core PHP and MySQL admin system with CRUD workflows,
                database operations, authentication, and production-style data
                management.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Core PHP", "MySQL", "Admin panel", "CRUD"].map((tag) => (
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
                  href="https://bikemanagement.free.nf/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-mintGlass px-5 py-3 font-black text-ink no-underline transition hover:-translate-y-1 hover:bg-white"
                >
                  View live <BsArrowUpRight />
                </a>
                <a
                  href="https://github.com/aviihs/php/tree/main/bikeManagementSystem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 font-bold text-white no-underline transition hover:border-mintGlass/45 hover:text-mintGlass"
                >
                  Source code <BsArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <ProjectCard
              accent="mint"
              imgPath={bike}
              isBlog={false}
              title="Bike Management System"
              description={
                <>
                  A web-based Bike Management System developed using Core PHP
                  and MySQL. The system includes a secure admin panel with full
                  CRUD functionality, allowing efficient management of bike
                  records and data handling. This project demonstrates my
                  practical knowledge of backend logic, database operations, and
                  admin workflow design.
                  <br />
                  <br />
                  <strong>Admin Panel Access:</strong>
                  <br />
                  Username: bhusalshiva010@gmail.com
                  <br />
                  Password: bhusalshiva010@gmail.com
                </>
              }
              ghLink="https://github.com/aviihs/php/tree/main/bikeManagementSystem"
              demoLink="https://bikemanagement.free.nf/"
            />

            <ProjectCard
              accent="violet"
              imgPath={mobile}
              isBlog={false}
              title="Basic Restro App"
              description={
                <>
                  A simple restaurant-themed mobile application built while
                  learning React Native. This project focuses on applying core
                  React Native fundamentals, including components, layout
                  structuring, navigation, and basic UI design. It represents my
                  hands-on practice in building native interfaces and
                  understanding mobile app development concepts.
                  <br />
                  <br />
                  <strong>
                    Note: To Download this app, You can click demo link and then
                    you will be redirect to download apk file of the app.
                    Suitable for only android devices.
                  </strong>
                </>
              }
              ghLink="https://github.com/aviihs/internNative/tree/main/basic_homeTab"
              demoLink="https://github.com/aviihs/react-native/tree/main/basicRestroApp"
            />

            <ProjectCard
              accent="amber"
              imgPath={leaf}
              isBlog={false}
              title="Websocket"
              description="A real-time communication system built using WebSockets and Node.js. This project demonstrates bidirectional communication between client and server, enabling live updates and interactive user experiences in web applications."
              ghLink="#"
              demoLink="#"
            />
        </div>

      <section className="pt-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center"
          >
            <h2 className="text-4xl font-black sm:text-6xl">
              Interest in{" "}
              <strong className="inline-flex items-center gap-3 text-amberSoft">
                Music <FaMusic className="text-3xl" />
              </strong>
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-white/65">
              Alongside development, I have a deep passion for music and creative
              expression. Here is one of my original creations.
            </p>
          </motion.div>

          <div className="mx-auto mt-10 max-w-lg">
              <ProjectCard
                accent="amber"
                videoLink="https://www.youtube.com/embed/KwApRqUZDGc"
                isBlog={false}
                title="Nyano Jhari"
                description="An original Nepali song inspired by personal emotions and creativity.
    This project reflects my strong interest in music, where I explore mood,
    melody, and artistic storytelling beyond programming."
                demoLink="https://www.youtube.com/watch?v=KwApRqUZDGc"
              />
          </div>
      </section>
      </div>
    </main>
  );
}

export default Projects;
