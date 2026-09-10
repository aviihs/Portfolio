export type ChatRole = "user" | "assistant";

export type ChatLink = {
  label: string;
  href: string;
};

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
  links?: ChatLink[];
};

export type ChatReply = {
  content: string;
  links?: ChatLink[];
};
