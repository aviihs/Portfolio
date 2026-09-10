"use client";

import { useCallback, useRef, useState } from "react";
import { CHAT_INTRO, CHATBOT, type Language } from "../../constants/chatbot";
import type { ChatMessage, ChatReply } from "../../types/chat";

let messageCounter = 0;
const nextId = () => `m${Date.now()}-${messageCounter++}`;

export function useChat(language: Language) {
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    { id: "intro", role: "assistant", content: CHAT_INTRO[language] },
  ]);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const controllerRef = useRef<AbortController | null>(null);

  const send = useCallback(
    async (content: string, matchText?: string) => {
      const text = content.trim();
      if (!text || isSending) return;

      setMessages((prev) => [...prev, { id: nextId(), role: "user", content: text }]);
      setIsSending(true);
      setError(null);

      controllerRef.current?.abort();
      const controller = new AbortController();
      controllerRef.current = controller;

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: matchText ?? text, language }),
          signal: controller.signal,
        });

        if (!response.ok) throw new Error(`Request failed: ${response.status}`);

        const data = (await response.json()) as { reply: ChatReply };
        setMessages((prev) => [
          ...prev,
          {
            id: nextId(),
            role: "assistant",
            content: data.reply.content,
            links: data.reply.links,
          },
        ]);
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
        setError(CHATBOT.errorText[language]);
      } finally {
        setIsSending(false);
      }
    },
    [isSending, language]
  );

  return { messages, isSending, error, send };
}
