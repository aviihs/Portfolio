"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type MotionBlockProps = {
  children: ReactNode;
  className?: string;
};

export function MotionBlock({
  children,
  className,
}: MotionBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionArticle({
  children,
  className,
}: MotionBlockProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.article>
  );
}
