// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/styles/overriding.scss";
          `
        }
      }
    }
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: [
    'vuetify-nuxt-module', '@nuxtjs/i18n'
  ],
  vuetify: {
    vuetifyOptions: './vuetify.config.ts'
  }
})
