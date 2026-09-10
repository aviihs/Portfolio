import type { ChatMessage } from "../../types/chat";

const BUBBLE_BASE =
  "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-6";

const BUBBLE_BY_ROLE = {
  user: "bg-mintGlass text-ink",
  assistant: "border border-white/10 bg-white/[0.06] text-white/85",
} as const;

function isExternal(href: string) {
  return href.startsWith("http");
}

function ChatMessageItem({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={`${BUBBLE_BASE} ${BUBBLE_BY_ROLE[message.role]}`}>
        <p className="m-0 whitespace-pre-wrap">{message.content}</p>

        {message.links?.length ? (
          <div className="mt-2.5 flex flex-wrap gap-2">
            {message.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={isExternal(link.href) ? "_blank" : undefined}
                rel={isExternal(link.href) ? "noopener noreferrer" : undefined}
                className="inline-flex rounded-full border border-mintGlass/40 bg-mintGlass/10 px-3 py-1 text-xs font-bold text-mintGlass no-underline transition hover:bg-mintGlass/20"
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ChatMessageItem;
