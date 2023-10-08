// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // gh-pages deploying
  // target: "static",
  // router: {
  //   base: "/A7Kanban10/",
  // },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge"],

  css: ["@/assets/css/tailwind.css"],

  app: {
    head: {
      title: "Nuxt 3 Crash Course",
      meta: [
        {
          name: "description",
          content: "A7Kanban template base on Nuxt 3 Crash Course",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
});
