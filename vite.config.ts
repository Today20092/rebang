import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/rebang/", // Corrected: Top-level option, with trailing slash
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      // Add any other VitePWA options here
    }),
  ],
  // You can add other Vite configuration options here, like build options
});