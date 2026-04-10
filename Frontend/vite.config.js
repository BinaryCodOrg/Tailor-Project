import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Tailor-Project/",
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.js",
  },
  server: {
    host: true, // ← allows access via IP address
    port: 5180, // optional: choose your port
  },

  // Ensures relative paths are generated for assets
});
