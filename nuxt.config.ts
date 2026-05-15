import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-05-15",

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      title: "Vinzz Portfolio",
      meta: [
        {
          name: "description",
          content:
            "Modern personal portfolio website for Vinzz, built with Nuxt, TypeScript, and Tailwind CSS.",
        },
        {
          name: "theme-color",
          content: "#050014",
        },
        {
          property: "og:title",
          content: "Vinzz Portfolio",
        },
        {
          property: "og:description",
          content:
            "Modern portfolio website showcasing projects, skills, and contact links.",
        },
        {
          property: "og:type",
          content: "website",
        },
      ],
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
});