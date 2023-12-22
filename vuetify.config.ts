import type { ExternalVuetifyOptions } from 'vuetify-nuxt-module';
// import type { ThemeDefinition } from 'vuetify';
import { en, de, zhHans } from 'vuetify/locale'

// const themeInternalLight: ThemeDefinition = {
//     dark: false,
//     colors: {
//         background: '#FFFFFF',
//     },
// }

// const themeInternalDark: ThemeDefinition = {
//     dark: true,
//     colors: {
//         background: '#000000',
//     },
// }

export default {
    labComponents: true,
    directives: true,
    theme: {
        defaultTheme: 'light',
        // themes: {
        //     themeInternalLight,
        //     themeInternalDark
        // }
    },
    locale: {
        locale: 'de',
        fallback: 'en',
        messages: { zhHans, en, de }
    }
} satisfies ExternalVuetifyOptions

