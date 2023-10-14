// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // gh-pages deploying
  // target: "static",
  // router: {
  //   base: "/A7Kanban10/",
  // },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge", "@vueuse/nuxt"],

  css: ["@/assets/css/tailwind.css"],

  app: {
    head: {
      title: "A7社區網站-生活指引",
      meta: [
        {
          name: "description",
          content: "A7新林口-社區網站 V2.0 生活指引",
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
