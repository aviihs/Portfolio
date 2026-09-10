import { CHAT_WELCOME, LANGUAGES, type Language } from "../../constants/chatbot";

function LanguagePicker({
  onSelect,
}: {
  onSelect: (language: Language) => void;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-8 text-center">
      <div>
        <p className="m-0 text-4xl" aria-hidden>
          {CHAT_WELCOME.emoji}
        </p>
        <p className="mt-3 text-2xl font-black tracking-[0.2em] text-white">
          {CHAT_WELCOME.title}
        </p>
        <p className="mt-2 text-xs text-white/50">{CHAT_WELCOME.prompt}</p>
      </div>

      <div className="flex w-full flex-col gap-2">
        {LANGUAGES.map((language) => (
          <button
            key={language.id}
            type="button"
            onClick={() => onSelect(language.id)}
            className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-left transition hover:border-mintGlass/40 hover:bg-white/[0.07]"
          >
            <span className="text-sm font-bold text-white">{language.label}</span>
            <span className="text-xs text-white/40">{language.hint}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default LanguagePicker;
