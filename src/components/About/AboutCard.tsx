"use client";

import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.055] p-6 text-white shadow-2xl shadow-black/20 backdrop-blur-xl">
      <blockquote className="m-0">
          <p className="text-justify leading-8 text-white/70">
            Hi everyone! I’m <span className="text-mintGlass">Shiva Bhusal</span> from{" "}
            <span className="text-mintGlass">Kathmandu, Nepal</span>.
            <br />
            I’m a{" "}
            <span className="text-mintGlass">
              Web & Mobile Designer, Developer
            </span>{" "}
            with expertise in{" "}
            <span className="text-mintGlass">MERN Stack, React Native, PHP, SQL</span>,
            and <span className="text-mintGlass">Figma</span>.
            <br />I am currently pursuing my{" "}
            <span className="text-mintGlass">
              BSc. CSIT (Computer Science & IT)
            </span> at <span className="text-mintGlass">Patan Multiple Campus</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul className="mt-5 space-y-3 p-0">
            <li className="flex items-center gap-3 text-white/75">
              <ImPointRight /> Creating and sharing my music 🎵
            </li>
            <li className="flex items-center gap-3 text-white/75">
              <ImPointRight /> Photo & video editing 🎬
            </li>
            <li className="flex items-center gap-3 text-white/75">
              <ImPointRight /> Reading, chess, and badminton ♟️🏸
            </li>
          </ul>

          <p className="mt-6 text-violet-200">
            "Building apps & music that inspire!"
          </p>
          <footer className="text-sm text-white/45">Shiva Bhusal</footer>
      </blockquote>
    </div>
  );
}

export default AboutCard;
