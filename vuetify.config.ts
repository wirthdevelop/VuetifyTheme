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
        VNavigationDrawerNotification: 'VNavigationDrawer',
        VNavigationDrawerHistory: 'VNavigationDrawer',
        VNavigationDrawerSettings: 'VNavigationDrawer',
        VRowMain: 'VRow',
        VColMain: 'VCol',
        VColMainSub: 'VCol',
        VCardMain: 'VCard',
    },
    defaults: {
        VApp: {
            fullHeight: true,
        },
        VAppBar: {
            VDivider: {
                vertical: true,
                inset: true,
                style: [{ height: '16px' }, { 'margin-top': 'auto'}, { 'margin-bottom': 'auto'}, { 'margin-left': '6px'}, { 'margin-right': '6px'}],
                length: 18,
            }
        },
        VNavigationDrawer: {
            location: 'left',
            permanent: true,
            floating: true,
            rail: false,
            width: 300,

            VList: {
                density: 'compact',
                nav: true,
            }
        },
        VNavigationDrawerNotification: {
            location: 'right',
            width: 300,
        },
        VNavigationDrawerHistory: {
            location: 'right',
            width: 300,
        },
        VNavigationDrawerSettings: {
            location: 'right',
            width: 300,
        },
        VRowMain: {
            noGutters: false,
            class: 'v-row--main',
            style: [{ margin: '0px' }],
        },
        VColMain: {
            cols: '8',
        },
        VCardMain: {
            variant: ['action', 'main'],
        },
    }
} satisfies ExternalVuetifyOptions;