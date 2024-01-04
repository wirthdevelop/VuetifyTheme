import type { ExternalVuetifyOptions } from 'vuetify-nuxt-module';
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
        NavigationDrawer: 'VNavigationDrawer',
        // NotificationDrawer: 'VNavigationDrawer',
        // SettingsDrawer: 'VNavigationDrawer',
    },
    defaults: {
        VLayout: {
            fullHeight: true,
        },
        NavigationDrawer: {

        },
        // NotificationDrawer: {

        // },
        // SettingsDrawer: {

        // },
    }
} satisfies ExternalVuetifyOptions;