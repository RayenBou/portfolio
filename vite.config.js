import { defineConfig } from "vite";

export default defineConfig({
  ssr: {
    noExternal: ["@material-tailwind/react"],
  },
  optimizeDeps: {
    include: ["@material-tailwind/react"],
  },
});
