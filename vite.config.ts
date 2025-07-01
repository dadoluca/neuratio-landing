import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    // Only include Replit plugins when in Replit environment AND packages are available
    ...(process.env.REPL_ID !== undefined ? (() => {
      const plugins = [];
      
      try {
        // Try to load runtime error overlay
        const runtimeErrorOverlay = require("@replit/vite-plugin-runtime-error-modal");
        plugins.push(runtimeErrorOverlay.default());
      } catch {
        // Plugin not available, continue without it
      }

      if (process.env.NODE_ENV !== "production") {
        try {
          // Try to load cartographer
          const cartographer = require("@replit/vite-plugin-cartographer");
          plugins.push(cartographer.cartographer());
        } catch {
          // Plugin not available, continue without it
        }
      }
      
      return plugins;
    })() : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});