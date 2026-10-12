import { defineConfig, minimal2023Preset } from "@vite-pwa/assets-generator/config"

// Gera os ícones do PWA a partir de public/favicon.svg: `npm run generate-pwa-assets`
export default defineConfig({
  headLinkOptions: { preset: "2023" },
  preset: {
    ...minimal2023Preset,
    maskable: {
      ...minimal2023Preset.maskable,
      padding: 0,
      resizeOptions: { background: "#111111" },
    },
    apple: {
      ...minimal2023Preset.apple,
      padding: 0,
      resizeOptions: { background: "#111111" },
    },
  },
  images: ["public/favicon.svg"],
})
