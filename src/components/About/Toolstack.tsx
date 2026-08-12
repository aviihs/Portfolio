"use client";

import {
  SKILL_CARD_CLASS,
  SKILL_IMAGE_CLASS,
  SKILL_TEXT_CLASS,
  TOOL_ITEMS,
} from "../../constants/skills";

function Toolstack() {
  return (
    <div className="grid grid-cols-2 gap-4 pb-12 sm:grid-cols-3 lg:grid-cols-5">
      {TOOL_ITEMS.map((item) => (
        <div className={`${SKILL_CARD_CLASS} hover:border-violetMist/45`} key={item.label}>
          <img src={item.image} alt={item.alt} className={SKILL_IMAGE_CLASS} />
          <div className={SKILL_TEXT_CLASS}>{item.label}</div>
        </div>
      ))}
    </div>
  );
}

export default Toolstack;
