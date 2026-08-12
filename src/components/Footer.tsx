"use client";

import { SITE_AUTHOR, SOCIAL_LINKS } from "../constants/site";

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
              {SITE_AUTHOR}.
            </a>
          </h3>
        </div>
        <div>
          <h3 className="m-0 text-sm">Copyright © {year} SB</h3>
        </div>
        <div>
          <ul className="m-0 flex list-none justify-center gap-3 p-0 md:justify-end">
            {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white transition hover:border-mintGlass/50 hover:text-mintGlass"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
