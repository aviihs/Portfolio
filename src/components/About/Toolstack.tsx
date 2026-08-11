"use client";

import macOs from "../../Assets/TechIcons/mac-os.png";
import brave from "../../Assets/TechIcons/brave-browser-icon.webp";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import trello from "../../Assets/TechIcons/trello.png";
import slack from "../../Assets/TechIcons/slack.png";

const toolItems = [
  { label: "Mac Os", image: macOs.src, alt: "macOs" },
  { label: "Brave Browser", image: brave.src, alt: "Brave" },
  { label: "Vs Code", image: vsCode.src, alt: "vsCode" },
  { label: "Trello", image: trello.src, alt: "trello" },
  { label: "Slack", image: slack.src, alt: "slack" },
];

function Toolstack() {
  const iconClass =
    "group flex min-h-32 flex-col items-center justify-center gap-3 rounded-[1.15rem] border border-white/10 bg-white/[0.055] p-4 text-center shadow-2xl shadow-black/10 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violetMist/45 hover:shadow-glow";
  const imageClass = "h-10 w-10 object-contain transition group-hover:scale-110";
  const textClass = "text-sm font-bold text-white/75";

  return (
    <div className="grid grid-cols-2 gap-4 pb-12 sm:grid-cols-3 lg:grid-cols-5">
      {toolItems.map((item) => (
        <div className={iconClass} key={item.label}>
          <img src={item.image} alt={item.alt} className={imageClass} />
          <div className={textClass}>{item.label}</div>
        </div>
      ))}
    </div>
  );
}

export default Toolstack;
