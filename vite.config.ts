import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [reactRouter(), tsconfigPaths()],
  build: {
    // Optimize production builds
    cssCodeSplit: true,
    minify: "esbuild", // Use esbuild (default, faster, no extra dependencies)
    // Note: manualChunks removed - React is external in SSR builds
    // Vite will automatically optimize chunk splitting
  },
});
