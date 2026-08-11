"use client";

import macOs from "../../Assets/TechIcons/mac-os.png";
import brave from "../../Assets/TechIcons/brave-browser-icon.webp";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import trello from "../../Assets/TechIcons/trello.png";
import slack from "../../Assets/TechIcons/slack.png";

function Toolstack() {
  const iconClass =
    "group flex min-h-32 flex-col items-center justify-center gap-3 rounded-[1.15rem] border border-white/10 bg-white/[0.055] p-4 text-center shadow-2xl shadow-black/10 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violetMist/45 hover:shadow-glow";
  const imageClass = "h-10 w-10 object-contain transition group-hover:scale-110";
  const textClass = "text-sm font-bold text-white/75";

  return (
    <div className="grid grid-cols-2 gap-4 pb-12 sm:grid-cols-3 lg:grid-cols-5">
      <div className={iconClass}>
        <img src={macOs.src} alt="macOs" className={imageClass} />
        <div className={textClass}>Mac Os</div>
      </div>
      <div className={iconClass}>
        <img src={brave.src} alt="Brave" className={imageClass} />
        <div className={textClass}>Brave Browser</div>
      </div>
      <div className={iconClass}>
        <img src={vsCode.src} alt="vsCode" className={imageClass} />
        <div className={textClass}>Vs Code</div>
      </div>

      <div className={iconClass}>
        <img src={trello.src} alt="trello" className={imageClass} />
        <div className={textClass}>Trello</div>
      </div>
      <div className={iconClass}>
        <img src={slack.src} alt="slack" className={imageClass} />
        <div className={textClass}>Slack</div>
      </div>
    </div>
  );
}

export default Toolstack;
