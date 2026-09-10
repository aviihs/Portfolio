"use client";

import { useEffect, useRef, useState } from "react";
import { BsSend } from "react-icons/bs";
import {
  CHAT_SUGGESTIONS,
  CHATBOT,
  type Language,
} from "../../constants/chatbot";
import ChatMessageItem from "./ChatMessage";
import { useChat } from "./useChat";

const MAX_TEXTAREA_HEIGHT = 112;

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="flex items-center gap-1 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3">
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            className="h-1.5 w-1.5 rounded-full bg-white/50 animate-soft-pulse"
            style={{ animationDelay: `${dot * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}

function ChatConversation({ language }: { language: Language }) {
  const { messages, isSending, error, send } = useChat(language);
  const [draft, setDraft] = useState("");
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const id = window.setTimeout(() => inputRef.current?.focus(), 120);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    const list = listRef.current;
    if (list) list.scrollTop = list.scrollHeight;
  }, [messages, isSending]);

  function resetTextarea() {
    const el = inputRef.current;
    if (el) el.style.height = "auto";
  }

  function submit(content: string, matchText?: string) {
    if (!content.trim()) return;
    send(content, matchText);
    setDraft("");
    resetTextarea();
  }

  function handleInput(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setDraft(event.target.value);
    const el = event.target;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, MAX_TEXTAREA_HEIGHT)}px`;
  }

  const showSuggestions = messages.length === 1 && !isSending;

  return (
    <>
      <div
        ref={listRef}
        aria-live="polite"
        className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
      >
        {messages.map((message) => (
          <ChatMessageItem key={message.id} message={message} />
        ))}
        {isSending ? <TypingIndicator /> : null}
        {error ? <p className="m-0 text-xs text-amberSoft">{error}</p> : null}
      </div>

      {showSuggestions ? (
        <div className="flex flex-wrap gap-2 px-4 pb-3">
          {CHAT_SUGGESTIONS[language].map((suggestion) => (
            <button
              key={suggestion.label}
              type="button"
              onClick={() => submit(suggestion.label, suggestion.query)}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/70 transition hover:border-mintGlass/40 hover:text-white"
            >
              {suggestion.label}
            </button>
          ))}
        </div>
      ) : null}

      <form
        onSubmit={(event) => {
          event.preventDefault();
          submit(draft);
        }}
        className="flex items-end gap-2 border-t border-white/10 px-3 py-3"
      >
        <textarea
          ref={inputRef}
          value={draft}
          onChange={handleInput}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              submit(draft);
            }
          }}
          rows={1}
          placeholder={CHATBOT.placeholder[language]}
          className="max-h-28 flex-1 resize-none rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-white placeholder:text-white/35 focus:border-mintGlass/40 focus:outline-none"
        />
        <button
          type="submit"
          disabled={isSending || !draft.trim()}
          aria-label="Send message"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-mintGlass text-ink transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          <BsSend className="text-sm" />
        </button>
      </form>

      <p className="m-0 px-4 pb-3 text-[10px] leading-4 text-white/35">
        {CHATBOT.disclaimer[language]}
      </p>
    </>
  );
}

export default ChatConversation;
