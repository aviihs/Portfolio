import {
  CHAT_FALLBACK,
  CHAT_KNOWLEDGE,
  GREETING_RESPONSE,
  type KnowledgeEntry,
  type Language,
} from "../constants/chatbot";
import type { ChatReply } from "../types/chat";

const GREETING_PATTERN = /\b(hi|hey|hello|yo|namaste|greetings|hola)\b/i;

function normalize(text: string): string {
  return text
    .normalize("NFC")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ");
}

function scoreEntry(entry: KnowledgeEntry, text: string): number {
  return entry.keywords.reduce(
    (score, keyword) => (text.includes(normalize(keyword)) ? score + 1 : score),
    0
  );
}

/**
 * Local intent matcher over the portfolio knowledge base.
 * Swap this for a LangChain chain later; keep the {@link ChatReply} shape.
 */
export function generateReply(message: string, language: Language): ChatReply {
  const text = normalize(message).trim();

  if (!text) return { content: CHAT_FALLBACK[language] };

  let best: KnowledgeEntry | null = null;
  let bestScore = 0;

  for (const entry of CHAT_KNOWLEDGE) {
    const score = scoreEntry(entry, text);
    if (score > bestScore) {
      best = entry;
      bestScore = score;
    }
  }

  if (best && bestScore > 0) {
    return { content: best.response[language], links: best.links };
  }

  if (GREETING_PATTERN.test(message)) {
    return { content: GREETING_RESPONSE[language] };
  }

  return { content: CHAT_FALLBACK[language] };
}
