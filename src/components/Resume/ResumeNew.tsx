"use client";

import Particle from "../Particle";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const pdf = "/shivabhusal.pdf";

  return (
    <main className="min-h-screen overflow-hidden px-4 py-28 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(88,230,198,0.14),transparent_30%),radial-gradient(circle_at_84%_12%,rgba(199,112,240,0.16),transparent_30%),linear-gradient(135deg,#080A12_0%,#111827_48%,#160B24_100%)]" />
        <Particle />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-5xl"
      >
        <div className="mb-8 flex justify-center">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-mintGlass px-6 py-3 font-black text-ink no-underline shadow-glow transition hover:-translate-y-1 hover:bg-white"
          >
            <AiOutlineDownload />
            Download CV
          </a>
        </div>

        <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.055] p-3 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <iframe
            src={pdf}
            title="Shiva Bhusal Resume"
            className="h-[82vh] w-full rounded-2xl bg-white"
            loading="lazy"
          />
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 font-bold text-white no-underline transition hover:border-mintGlass/45 hover:text-mintGlass"
          >
            <AiOutlineDownload />
            Download CV
          </a>
        </div>
      </motion.div>
    </main>
  );
}

export default ResumeNew;
