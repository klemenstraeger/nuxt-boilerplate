import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/test-utils",
    "@pinia/nuxt",
    "nuxt-security",
  ],
  future: {
    compatibilityVersion: 4,
  },
  typescript: {
    strict: true,
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  css: ["~~/assets/css/main.css"],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})