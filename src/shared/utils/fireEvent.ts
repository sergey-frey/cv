import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from "../constants/tg";
import type { EventType } from "../types/stats";
import { collectMeta } from "./meta";

export const fireEvent = (eventType: EventType) => {
  const url = new URL(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
  );

  const text = [
    `*Event:* ${eventType}`,
    "",
    "```json",
    JSON.stringify(collectMeta(), null, 2),
    "```",
  ].join("\n");

  url.searchParams.set("chat_id", TELEGRAM_CHAT_ID);
  url.searchParams.set("text", text);
  url.searchParams.set("parse_mode", "markdown");

  void fetch(url.toString(), {
    method: "GET",
  });
};
