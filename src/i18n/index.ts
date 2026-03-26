import ru from "./ru.json";
import en from "./en.json";

const contentMap = { ru, en } as const;

export type Lang = keyof typeof contentMap;
export type Content = (typeof contentMap)[Lang];

export const defaultLang: Lang = "ru";
export const langs: Lang[] = ["ru", "en"];

export function getContent(lang: string): Content {
  return contentMap[lang as Lang] ?? contentMap[defaultLang];
}

export function isValidLang(lang: string): lang is Lang {
  return langs.includes(lang as Lang);
}
