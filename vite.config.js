import process from "node:process"
import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import viteImagemin from "vite-plugin-imagemin"

const isCI = Boolean(process.env.CI)

export default defineConfig({
  base: "/Avion/",
  plugins: [
    vue(),
    ...(!isCI
      ? [
          viteImagemin({
            webp: { quality: 100 },
          }),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/scss/mixins/index" as *;`,
      },
    },
    devSourcemap: true,
  },
  server: {
    host: "0.0.0.0",
    port: 5174,
  },
  build: {
    sourcemap: true,
  },
})
