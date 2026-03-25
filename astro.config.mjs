// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const getBase = () => {
  if (process.env.NODE_ENV === "development") {
    return "/cv";
  }

  return undefined;
};

// https://astro.build/config
export default defineConfig({
  site: "https://sergey-frey.github.io/",
  base: getBase(),
  vite: {
    plugins: [tailwindcss()],
  },
});
