// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    'vuetify-nuxt-module', '@nuxtjs/i18n'
  ],
  vuetify: {
    moduleOptions: {
      styles: {
        configFile: './assets/vuetify/styles.scss'
      }
      // ssrClientHints: {
      //   prefersColorScheme: true
      // }
    },
    vuetifyOptions: './vuetify.config.ts'
  }
})
