// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  css: ['~/assets/styles/main.scss'],
  components: [
    {
      pathPrefix: false,
    },
  ],
  modules: [
    'vuetify-nuxt-module', '@nuxtjs/i18n'
  ],
  vuetify: {
    moduleOptions: {
      styles: {
        configFile: './assets/vuetify/custom.scss'
      }
    },
    vuetifyOptions: './vuetify.config.ts'
  }
})
