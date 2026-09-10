import { NextRequest, NextResponse } from "next/server";
import { LANGUAGE_IDS, type Language } from "../../../constants/chatbot";
import { generateReply } from "../../../lib/chat-engine";

export const runtime = "nodejs";

const MAX_MESSAGE_LENGTH = 1000;

function resolveLanguage(value: unknown): Language {
  return LANGUAGE_IDS.includes(value as Language) ? (value as Language) : "en";
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const message =
      typeof body?.message === "string" ? body.message.trim() : "";

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const reply = generateReply(
      message.slice(0, MAX_MESSAGE_LENGTH),
      resolveLanguage(body?.language)
    );

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat route error:", error);

    return NextResponse.json(
      { error: "Failed to generate a reply" },
      { status: 500 }
    );
  }
}
