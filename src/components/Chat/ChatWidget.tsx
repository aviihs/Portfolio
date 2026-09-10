"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsChatText, BsChevronLeft, BsXLg } from "react-icons/bs";
import { CHATBOT, type Language } from "../../constants/chatbot";
import ChatConversation from "./ChatConversation";
import LanguagePicker from "./LanguagePicker";

function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<Language | null>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open ? (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            role="dialog"
            aria-label={CHATBOT.title}
            className="flex h-[min(70vh,560px)] w-[min(calc(100vw-2.5rem),380px)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink/95 shadow-glow backdrop-blur-xl"
          >
            <header className="flex items-start justify-between gap-3 border-b border-white/10 px-4 py-3.5">
              <div className="flex items-start gap-2">
                {language ? (
                  <button
                    type="button"
                    onClick={() => setLanguage(null)}
                    aria-label={CHATBOT.changeLanguage}
                    className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-white/10 text-white/70 transition hover:border-white/25 hover:text-white"
                  >
                    <BsChevronLeft className="text-xs" />
                  </button>
                ) : null}
                <div>
                  <p className="m-0 text-sm font-black text-white">
                    {CHATBOT.title}
                  </p>
                  {language ? (
                    <p className="m-0 text-xs text-white/50">
                      {CHATBOT.subtitle[language]}
                    </p>
                  ) : null}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 text-white/70 transition hover:border-white/25 hover:text-white"
              >
                <BsXLg className="text-xs" />
              </button>
            </header>

            {language ? (
              <ChatConversation key={language} language={language} />
            ) : (
              <LanguagePicker onSelect={setLanguage} />
            )}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        className="grid h-14 w-14 place-items-center rounded-full bg-mintGlass text-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-white"
      >
        {open ? <BsXLg className="text-lg" /> : <BsChatText className="text-xl" />}
      </button>
    </div>
  );
}

export default ChatWidget;
