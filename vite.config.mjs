import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: "/index.html",
    // open: "/about.html",
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true
  },
  root: "src",
});
