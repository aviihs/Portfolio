import React from "react";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";

function Github() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="mt-14 overflow-x-auto rounded-[1.35rem] border border-white/10 bg-white/[0.055] p-5 text-white shadow-2xl shadow-black/20 backdrop-blur-xl"
    >
      <h2 className="mb-6 text-center text-3xl font-black sm:text-5xl">
        Days I <strong className="text-mintGlass">Code</strong>
      </h2>
      <div className="min-w-[760px]">
        <GitHubCalendar
          username="aviihs"
          blockSize={28}
          blockMargin={8}
          color="#58E6C6"
          fontSize={16}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        />
      </div>
    </motion.section>
  );
}

export default Github;
