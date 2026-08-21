import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import {
  PROJECT_CARD_ACCENT_STYLES,
  PROJECT_CARD_COPY,
} from "../../constants/project-card";

type ProjectCardProps = {
  accent?: "mint" | "violet" | "amber";
  demoLink?: string;
  description: ReactNode;
  designLink?: string;
  ghLink?: string;
  imgPath?: { src: string } | string;
  isBlog?: boolean;
  tags?: string[];
  title: string;
  videoLink?: string;
};

function ProjectCards({
  accent = "mint",
  demoLink,
  description,
  designLink,
  ghLink,
  imgPath,
  isBlog,
  tags,
  title,
  videoLink,
}: ProjectCardProps) {
  const imageSrc = typeof imgPath === "string" ? imgPath : imgPath?.src;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -10, scale: 1.01 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.055] text-white shadow-2xl shadow-black/20 backdrop-blur-xl transition-colors duration-300 hover:border-white/20"
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${PROJECT_CARD_ACCENT_STYLES[accent]} opacity-80`}
      />
      {videoLink ? (
        <div className="relative aspect-video bg-black">
          <iframe
            src={videoLink}
            title={title}
            frameBorder="0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      ) : (
        <div className="relative h-56 overflow-hidden">
          <img
            src={imageSrc}
            alt={`${title} preview`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
        </div>
      )}

      <div className="relative flex flex-1 flex-col p-5">
        <h3 className="mb-4 text-xl font-black leading-snug">
          {title}
        </h3>

        {tags && tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wide text-white/55"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex-1 text-justify text-sm leading-7 text-white/65">
          {description}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {ghLink && ghLink !== "#" && (
          <a
            href={ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-bold text-white no-underline transition hover:border-mintGlass/45 hover:text-mintGlass"
          >
            <BsGithub />
            {isBlog ? PROJECT_CARD_COPY.blog : PROJECT_CARD_COPY.github}
          </a>
          )}

          {!isBlog && demoLink && demoLink !== "#" && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-mintGlass px-4 py-2 text-sm font-black text-ink no-underline transition hover:bg-white"
          >
            <CgWebsite /> {PROJECT_CARD_COPY.demo}
          </a>
          )}
          {!isBlog && designLink && designLink !== "#" && (
            <a
              href={designLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-violetMist/30 bg-violetMist/10 px-4 py-2 text-sm font-bold text-violet-100 no-underline transition hover:border-violetMist/60 hover:bg-violetMist/20"
            >
              Figma ↗
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCards;
