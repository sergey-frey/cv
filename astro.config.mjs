// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const getBase = () => {
  if (process.env.NODE_ENV === "development") {
    return "/cv/";
  }

  return "/";
};

// https://astro.build/config
export default defineConfig({
  vite: {
    base: getBase(),
    plugins: [tailwindcss()],
  },
});
