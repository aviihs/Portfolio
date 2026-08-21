import {
  SKILL_CARD_CLASS,
  SKILL_BRAND_COLORS,
  SKILL_IMAGE_CLASS,
  SKILL_TEXT_CLASS,
  TOOL_ITEMS,
} from "../../constants/skills";

function Toolstack() {
  return (
    <div className="grid grid-cols-2 gap-4 pb-12 sm:grid-cols-3 lg:grid-cols-5">
      {TOOL_ITEMS.map((item) => {
        const Icon = item.icon;

        return (
        <div className={`${SKILL_CARD_CLASS} hover:border-violetMist/45`} key={item.label}>
          {item.image ? (
            <img src={item.image} alt={item.alt} className={SKILL_IMAGE_CLASS} />
          ) : Icon ? (
            <Icon
              style={{ color: SKILL_BRAND_COLORS[item.label] }}
              className="text-4xl transition group-hover:scale-110"
            />
          ) : (
            <div className="grid h-10 min-w-10 place-items-center rounded-xl bg-violetMist/15 px-2 text-xs font-black text-violet-200 transition group-hover:scale-110">
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

export default Toolstack;
