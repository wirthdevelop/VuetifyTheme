// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  css: ['~/assets/styles/fonts.scss'],
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
    moduleOptions: {
      styles: {
        configFile: './assets/styles/settings.scss'
      }
    },
    vuetifyOptions: './vuetify.config.ts'
  }
})
