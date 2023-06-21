import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      pages: path.resolve(__dirname, "./src/pages"),
      containers: path.resolve(__dirname, "./src/containers"),
      components: path.resolve(__dirname, "./src/components"),
      images: path.resolve(__dirname, "./src/assets/images"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
  plugins: [react(), tsconfigPaths()],
  server: {
    host: true,
  },
});
