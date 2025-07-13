import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [react(), tailwind()],
  site: "https://rayenbou.github.io",
  base: "/",
  trailingSlash: "always",
  build: {
    assets: "assets",
  },
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
    ssr: {
      noExternal: ["@astrojs/*"],
    },
    resolve: {
      preserveSymlinks: true,
    },
  },
});
