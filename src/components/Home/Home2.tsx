"use client";

import React from "react";
import { motion } from "framer-motion";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <section className="px-4 py-20 text-white sm:px-6 lg:px-8" id="about">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8"
          >
            <h2 className="text-3xl font-black sm:text-5xl">
              LET ME <span className="text-mintGlass"> INTRODUCE </span> MYSELF
            </h2>
            <p className="mt-6 text-justify text-base leading-8 text-white/70">
              I’m a Software Engineer passionate about transforming ideas into
              reliable, scalable, and high-performance digital products. I enjoy
              solving real-world problems and crafting systems that balance
              performance with great user experience.
              <br />
              <br />
              My technical background includes
              <i>
                <b className="text-mintGlass">
                  {" "}
                  JavaScript, Php, C, Node.js, Wordpress, TailwindCss, React Native, Figma{" "}
                </b>
              </i>
              enabling me to work across both backend and frontend ecosystems. I
              have strong expertise in
              <b className="text-mintGlass"> React and Figma </b>
              along with intermediate experience in
              <b className="text-mintGlass"> WordPress</b>.
              <br />
              <br />
              Lately, I’ve been increasingly focused on
              <b className="text-mintGlass"> Application Development</b>, building fast,
              intuitive, and user-centric products.
              <br />
              <br />
              Beyond technology, I have a deep passion for music. I enjoy
              playing guitar and have also explored music production. I’ve
              released an original song on YouTube titled{" "}
              <b > <a
                href="https://www.youtube.com/@avihs010"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mintGlass no-underline"
              >
              Nyano Jhari
              </a></b>.
              <br />
              <br />
              While coding is my profession, music remains my creative escape, a
              space where I explore, express, and recharge.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="text-mintGlass"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="text-mintGlass">React.js</b> and{" "}
                <b className="text-mintGlass">Next.js</b>.
              </i>
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-full max-w-sm"
          >
            <Tilt>
              <img src={myImg.src} className="w-full" alt="avatar" />
            </Tilt>
          </motion.div>
      </div>
    </section>
  );
}
export default Home2;
