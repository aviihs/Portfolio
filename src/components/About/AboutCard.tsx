"use client";

import React from "react";
import { ImPointRight } from "react-icons/im";
import {
  ABOUT_ACTIVITIES,
  ABOUT_COPY,
} from "../../constants/about";
import { SITE_AUTHOR } from "../../constants/site";

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
            {ABOUT_ACTIVITIES.map((activity) => (
              <li
                key={activity}
                className="flex items-center gap-3 text-white/75"
              >
                <ImPointRight /> {activity}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-violet-200">
            {ABOUT_COPY.quote}
          </p>
          <footer className="text-sm text-white/45">{SITE_AUTHOR}</footer>
      </blockquote>
    </div>
  );
}

export default AboutCard;
