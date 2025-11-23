import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/OMS-ENGLISH-SKILL-PRO/",   // REQUIRED FOR GITHUB PAGES
});
