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
            <span className="text-xs font-black uppercase tracking-[0.24em] text-mintGlass">
              A little about my approach
            </span>
            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              Thoughtful products, built from the <span className="text-mintGlass">inside out.</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-white/70">
              I enjoy taking a product from its first rough idea to a reliable thing people can use.
              That means shaping the interface, designing the data flow, building the API, and
              refining the details that make software feel effortless.
            </p>
            <p className="mt-5 text-base leading-8 text-white/70">
              My day-to-day toolkit includes <strong className="text-mintGlass">React, Next.js,
              Node.js, WordPress, React Native, and Figma</strong>. I care about performance,
              maintainability, and clean experiences that work just as well on a phone as they do
              on a large screen.
            </p>
            <p className="mt-5 text-base leading-8 text-white/70">
              Outside software, music keeps me curious. I play guitar, experiment with production,
              and share original work such as{" "}
              <a
                href="https://www.youtube.com/@avihs010"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-mintGlass no-underline hover:text-white"
              >
                Nyano Jhari
              </a>.
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
