"use client";

import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="border-t border-white/10 bg-ink/80 px-4 py-8 text-white backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-6 text-center text-sm text-white/65 md:grid-cols-3">
        <div>
          <h3 className="m-0 text-sm">
            Designed and Developed by{" "}
            <a
              href="https://www.instagram.com/av_ihs_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mintGlass no-underline"
            >
              Shiva Bhusal.
            </a>
          </h3>
        </div>
        <div>
          <h3 className="m-0 text-sm">Copyright © {year} SB</h3>
        </div>
        <div>
          <ul className="m-0 flex list-none justify-center gap-3 p-0 md:justify-end">
            <li>
              <a
                href="https://github.com/aviihs"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white transition hover:border-mintGlass/50 hover:text-mintGlass"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@avihs010"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white transition hover:border-mintGlass/50 hover:text-mintGlass"
              >
                <AiOutlineYoutube />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/shiva-bhusal-9409152a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white transition hover:border-mintGlass/50 hover:text-mintGlass"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/av_ihs_"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white transition hover:border-mintGlass/50 hover:text-mintGlass"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
