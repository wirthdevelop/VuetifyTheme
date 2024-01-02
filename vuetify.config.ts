import type { ExternalVuetifyOptions } from 'vuetify-nuxt-module';
// import type { ThemeDefinition } from 'vuetify';
import { en, de, zhHans } from 'vuetify/locale';

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
    directives: true,
    labComponents: true,
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
    },
    aliases: {
        CSelect: 'VSelect',
    },
    defaults: {
        // Globle Custom Configs
        CSelect: {
            // variant: 'yellow',
            class: ['basic']
        },
        // Globle Vuetify Configs
        VDivider: {
            thickness: 8
        },
    }
} satisfies ExternalVuetifyOptions;

