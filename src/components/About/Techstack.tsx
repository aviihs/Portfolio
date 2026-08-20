"use client";

import {
  SKILL_CARD_CLASS,
  SKILL_IMAGE_CLASS,
  SKILL_TEXT_CLASS,
  TECH_ITEMS,
} from "../../constants/skills";

function Techstack() {
  return (
    <div className="grid grid-cols-2 gap-4 pb-12 sm:grid-cols-3 lg:grid-cols-6">
      {TECH_ITEMS.map((item) => {
        const Icon = item.icon;

        return (
          <div className={`${SKILL_CARD_CLASS} hover:border-mintGlass/45`} key={item.label}>
            {item.image ? (
              <img src={item.image} alt={item.alt} className={SKILL_IMAGE_CLASS} />
            ) : Icon ? (
              <Icon className="text-4xl transition group-hover:scale-110" />
            ) : (
              <div className="grid h-10 min-w-10 place-items-center rounded-xl bg-mintGlass/15 px-2 text-xs font-black text-mintGlass transition group-hover:scale-110">
                {item.iconText}
              </div>
            )}
            <div className={SKILL_TEXT_CLASS}>{item.label}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Techstack;
