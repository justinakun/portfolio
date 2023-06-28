import { defineConfig } from "vite";
import cors from "cors";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    middleware: [cors()],
  },
  plugins: [react()],
});
